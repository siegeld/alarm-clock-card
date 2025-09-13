import {
  LitElement,
  html,
  css,
  CSSResultGroup,
  TemplateResult,
  PropertyValues,
} from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { fireEvent, LovelaceCardEditor, LovelaceCard } from 'custom-card-helpers';
import './mwc-loader';

import type {
  HomeAssistant,
  LovelaceCardConfig,
  ActionConfig,
} from 'custom-card-helpers';

import { getTranslations, detectLanguage, Translations } from './translations';

export interface AlarmClockCardConfig extends LovelaceCardConfig {
  type: string;
  device_id: string;
  name?: string;
  show_time_picker?: boolean;
  show_days?: boolean;
  show_scripts?: boolean;
  show_snooze_info?: boolean;
  use_24_hour_format?: boolean;
  debug?: boolean;
  theme?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
}

@customElement('alarm-clock-card')
export class AlarmClockCard extends LitElement implements LovelaceCard {
  public static async getConfigElement(): Promise<LovelaceCardEditor> {
    return document.createElement('alarm-clock-card-editor') as LovelaceCardEditor;
  }

  public static getStubConfig(): AlarmClockCardConfig {
    return {
      type: 'custom:alarm-clock-card',
      device_id: '',
      name: 'Alarm Clock',
      show_time_picker: true,
      show_days: true,
      show_scripts: true,
      show_snooze_info: true,
    };
  }

  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private config!: AlarmClockCardConfig;
  @state() private _showSettingsMenu = false;
  @state() private entities: {
    main?: any;           // sensor.alarm_clock (main status)
    time?: any;           // time.alarm_clock (alarm time)
    enabled?: any;        // switch.alarm_clock_enabled
    status?: any;         // sensor.alarm_clock_status  
    nextAlarm?: any;      // sensor.alarm_clock_next_alarm
    timeUntil?: any;      // sensor.alarm_clock_time_until_alarm
    days?: {[day: string]: any}; // switch.alarm_clock_monday, etc.
  } = {};

  private get _translations(): Translations {
    const language = this.hass ? detectLanguage(this.hass) : 'en';
    return getTranslations(language);
  }

  private _debug(message: string, ...args: any[]): void {
    if (this.config?.debug) {
      console.log(message, ...args);
    }
  }

  private _debugError(message: string, ...args: any[]): void {
    if (this.config?.debug) {
      console.error(message, ...args);
    } else {
      // Always show errors but without debug prefix
      console.error(message.replace('🔍 ALARM CARD: ', 'ALARM CARD: '), ...args);
    }
  }

  public setConfig(config: AlarmClockCardConfig): void {
    if (!config.device_id) {
      throw new Error('You need to define a device_id');
    }

    this.config = {
      show_time_picker: true,
      show_days: true,
      show_scripts: true,
      show_snooze_info: true,
      ...config,
    };
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    this._debug('🔍 ALARM CARD: shouldUpdate called', {
      hasConfig: !!this.config,
      hasHass: !!this.hass,
      hasEntities: Object.keys(this.entities).length > 0,
      changedProps: Array.from(changedProps.keys()),
    });

    if (!this.config) {
      this._debug('🔍 ALARM CARD: No config, returning false');
      return false;
    }

    // Initialize or refresh entity data when needed
    if (changedProps.has('hass') && this.hass && this.config) {
      if (Object.keys(this.entities).length === 0) {
        this._debug('🔍 ALARM CARD: No entities yet, calling _updateEntities');
        this._updateEntities();
      } else {
        this._debug('🔍 ALARM CARD: Refreshing entity states');
        this._refreshEntityStates();
      }
    }

    // Let Lit handle change detection based on property changes
    return changedProps.has('config') || changedProps.has('hass') || changedProps.has('entities');
  }

  private _refreshEntityStates(): void {
    // Update all entity states from hass.states
    let hasChanges = false;
    const newEntities = { ...this.entities, days: { ...this.entities.days } };
    
    // Check main entities (time, enabled, status, etc.)
    for (const [key, entity] of Object.entries(this.entities)) {
      if (key === 'days') continue; // Handle days separately
      
      if (entity && entity.entity_id) {
        const freshState = this.hass.states[entity.entity_id];
        if (freshState && (freshState.state !== entity.state || freshState.last_updated !== entity.last_updated)) {
          this._debug(`🔍 ALARM CARD: ${key} entity changed:`, entity.state, '→', freshState.state);
          (newEntities as any)[key] = freshState;
          hasChanges = true;
        }
      }
    }
    
    // Check day entities separately
    if (this.entities.days) {
      for (const [day, dayEntity] of Object.entries(this.entities.days)) {
        if (dayEntity && dayEntity.entity_id) {
          const freshState = this.hass.states[dayEntity.entity_id];
          if (freshState && (freshState.state !== dayEntity.state || freshState.last_updated !== dayEntity.last_updated)) {
            this._debug(`🔍 ALARM CARD: Day ${day} entity changed:`, dayEntity.state, '→', freshState.state);
            newEntities.days![day] = freshState;
            hasChanges = true;
          }
        }
      }
    }
    
    if (hasChanges) {
      this._debug('🔍 ALARM CARD: Changes detected, updating entities object');
      this.entities = newEntities; // This should trigger Lit's reactivity
    }
  }

  private async _updateEntities(): Promise<void> {
    if (!this.hass || !this.config.device_id) {
      this._debugError('🔍 ALARM CARD: Missing hass or device_id:', {
        hass: !!this.hass,
        device_id: this.config.device_id
      });
      return;
    }

    this._debug('🔍 ALARM CARD: Looking for entities for device:', this.config.device_id);

    try {
      // Get entity registry to find entities for this device
      const entityRegistry = await this.hass.callWS({
        type: 'config/entity_registry/list'
      }) as any[];

      this._debug('🔍 ALARM CARD: Entity registry loaded, total entities:', entityRegistry.length);

      // Find entities that belong to this device
      const deviceEntities = entityRegistry.filter((entity: any) => 
        entity.device_id === this.config.device_id
      );

      this._debug('🔍 ALARM CARD: Found device entities:', deviceEntities.length, deviceEntities);

      // First, find the coordinator's unique_id from the main entity
      // The main entity is the one that matches the basic pattern: alarm_clock_{entry_id}
      let coordinatorUniqueId: string | null = null;
      
      for (const regEntity of deviceEntities) {
        // Don't check state for coordinator detection - registry is enough
        if (!regEntity.unique_id) continue;
        
        // Main entity has unique_id that matches exactly: {entry_id} (no suffix, no underscores)
        if (regEntity.entity_id.startsWith('sensor.') && 
            regEntity.unique_id && 
            !regEntity.unique_id.includes('_')) {
          coordinatorUniqueId = regEntity.unique_id;
          this._debug('🔍 ALARM CARD: Found coordinator unique_id:', coordinatorUniqueId);
          break;
        }
      }

      if (!coordinatorUniqueId) {
        this._debugError('🔍 ALARM CARD: Could not find coordinator unique_id');
        this.entities = {};
        return;
      }

      // Map entities by unique_id patterns (rename-proof!)
      const newEntities: typeof this.entities = { days: {} };
      
      this._debug('🔍 ALARM CARD: Processing device entities using unique_id patterns:');
      for (const regEntity of deviceEntities) {
        this._debug('🔍 ALARM CARD: Checking entity:', regEntity.entity_id, 'unique_id:', regEntity.unique_id);
        
        if (!regEntity.unique_id) {
          this._debug('🔍 ALARM CARD: No unique_id found for:', regEntity.entity_id);
          continue;
        }
        
        const entityState = this.hass.states[regEntity.entity_id];
        const uniqueId = regEntity.unique_id;
        
        // Use unique_id patterns instead of entity_id patterns
        if (uniqueId === coordinatorUniqueId) {
          this._debug('🔍 ALARM CARD: Found MAIN entity:', regEntity.entity_id);
          newEntities.main = entityState || { entity_id: regEntity.entity_id, state: 'unknown' };
        } else if (uniqueId === `${coordinatorUniqueId}_alarm_time`) {
          this._debug('🔍 ALARM CARD: Found TIME entity:', regEntity.entity_id);
          newEntities.time = entityState || { entity_id: regEntity.entity_id, state: '07:00' };
        } else if (uniqueId === `${coordinatorUniqueId}_alarm_enabled`) {
          this._debug('🔍 ALARM CARD: Found MAIN ENABLED entity:', regEntity.entity_id);
          newEntities.enabled = entityState || { entity_id: regEntity.entity_id, state: 'off' };
        } else if (uniqueId === `${coordinatorUniqueId}_alarm_status`) {
          this._debug('🔍 ALARM CARD: Found STATUS entity:', regEntity.entity_id);
          newEntities.status = entityState || { entity_id: regEntity.entity_id, state: 'off' };
        } else if (uniqueId === `${coordinatorUniqueId}_next_alarm`) {
          this._debug('🔍 ALARM CARD: Found NEXT_ALARM entity:', regEntity.entity_id);
          newEntities.nextAlarm = entityState || { entity_id: regEntity.entity_id, state: null };
        } else if (uniqueId === `${coordinatorUniqueId}_time_until_alarm`) {
          this._debug('🔍 ALARM CARD: Found TIME_UNTIL entity:', regEntity.entity_id);
          newEntities.timeUntil = entityState || { entity_id: regEntity.entity_id, state: null };
        } else if (uniqueId.startsWith(`${coordinatorUniqueId}_`) && uniqueId !== `${coordinatorUniqueId}_alarm_enabled`) {
          // Day switches: check if it ends with a day name
          const dayMatch = uniqueId.match(/_(\w+)$/);
          if (dayMatch && dayMatch[1] !== 'enabled') {
            const day = dayMatch[1];
            if (['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].includes(day)) {
              this._debug('🔍 ALARM CARD: Found DAY entity:', regEntity.entity_id, day);
              newEntities.days![day] = entityState || { entity_id: regEntity.entity_id, state: 'off' };
            }
          }
        } else {
          this._debug('🔍 ALARM CARD: Unmatched entity:', regEntity.entity_id, uniqueId);
        }
      }
      
      this._debug('🔍 ALARM CARD: Final mapped entities:', newEntities);
      this._debug('🔍 ALARM CARD: Entity count - main:', !!newEntities.main, 'time:', !!newEntities.time, 'enabled:', !!newEntities.enabled, 'days:', Object.keys(newEntities.days || {}).length);
      
      this.entities = newEntities;
      
    } catch (error) {
      this._debugError('🔍 ALARM CARD: Error loading entity registry:', error);
      this.entities = {};
    }
  }

  protected render(): TemplateResult {
    if (!this.config || Object.keys(this.entities).length === 0) {
      return html`
        <ha-card>
          <div class="warning">
            ${!this.config ? 'No configuration' : `Device not available: ${this.config.device_id}`}
          </div>
        </ha-card>
      `;
    }

    // Read data directly from hass.states to ensure fresh data
    const timeEntity = this.entities.time?.entity_id ? this.hass.states[this.entities.time.entity_id] : null;
    const enabledEntity = this.entities.enabled?.entity_id ? this.hass.states[this.entities.enabled.entity_id] : null;
    const mainEntity = this.entities.main?.entity_id ? this.hass.states[this.entities.main.entity_id] : null;
    
    const alarmTimeRaw = timeEntity?.state || '07:00';
    const alarmTime = this._formatTime(alarmTimeRaw);
    const isEnabled = enabledEntity?.state === 'on';
    
    // Get the actual alarm state from main entity (this is authoritative)
    // The main entity already handles all logic for off/armed/ringing/snoozed states
    const status = mainEntity?.state || 'off';
    
    // Debug the status logic with fresh data
    this._debug('🔍 ALARM CARD: Status logic debug (FRESH DATA):', {
      timeEntityId: this.entities.time?.entity_id,
      enabledEntityId: this.entities.enabled?.entity_id,
      mainEntityId: this.entities.main?.entity_id,
      enabledEntityFreshState: enabledEntity?.state,
      mainEntityFreshState: mainEntity?.state,
      isEnabled: isEnabled,
      finalStatus: status,
    });
    
    // Get additional data from sensor entities
    const nextAlarmAttrs = this.entities.nextAlarm?.attributes || {};
    const timeUntilAttrs = this.entities.timeUntil?.attributes || {};
    
    const nextAlarm = this.entities.nextAlarm?.state;
    const nextAlarmDay = nextAlarmAttrs.next_alarm_day;
    const timeUntil = timeUntilAttrs.human_readable;
    const countdownType = timeUntilAttrs.countdown_type;
    
    // Get day states
    const enabledDays = Object.keys(this.entities.days || {}).filter(day => 
      this.entities.days![day]?.state === 'on'
    );

    this._debug('🎯 ALARM CARD: Rendering with entity states:', {
      alarmTime,
      isEnabled,
      status,
      nextAlarm,
      nextAlarmDay,
      timeUntil,
      countdownType,
      enabledDays,
      entities: this.entities,
    });

    return html`
      <ha-card @click=${this._handleCardClick}>
        <div class="card-content">
          <div class="header">
            <div class="title">${this.config.name || this._translations.card.title}</div>
            <div class="header-right">
              <div class="status ${status}">${this._getStatusTranslation(status)}</div>
              <div class="settings-menu">
                <button 
                  class="settings-button"
                  @click=${this._toggleSettingsMenu}
                  title="Settings"
                >
                  ⋮
                </button>
                ${this._showSettingsMenu ? this._renderSettingsMenu() : ''}
              </div>
            </div>
          </div>

          <div class="time-display">
            <div class="alarm-time">${alarmTime}</div>
            ${nextAlarm && nextAlarmDay
              ? html`<div class="next-alarm">${this._translations.card.next_alarm}: ${nextAlarmDay} at ${this._formatTime(new Date(nextAlarm).toTimeString().substring(0, 5))}</div>`
              : html``}
            ${timeUntil
              ? html`
                  <div class="countdown">
                    <span class="countdown-label">
                      ${countdownType === 'snooze' ? this._translations.card.snooze_ends_in : this._translations.card.alarm_in}
                    </span>
                    <span class="countdown-time">${timeUntil}</span>
                  </div>
                `
              : html``}
          </div>

          ${this.config.show_time_picker ? this._renderTimePicker() : html``}
          ${this._renderControls(isEnabled, status)}
          ${this.config.show_days ? this._renderDays(enabledDays) : html``}
          ${this.config.show_snooze_info && status === 'snoozed' ? this._renderSnoozeInfo() : html``}
        </div>
      </ha-card>
    `;
  }

  private _renderTimePicker(): TemplateResult {
    // Use raw 24-hour time for the input field
    const alarmTimeRaw = this.entities.time?.state || '07:00';
    
    return html`
      <div class="time-picker">
        <input
          type="time"
          class="time-input"
          id="alarm-time-input"
          .value=${alarmTimeRaw}
          value=${alarmTimeRaw}
          step="60"
          lang="en-GB"
          @change=${this._onTimeInputChange}
        />
        <mwc-button
          raised
          @click=${this._onSetTimeButtonClick}
          class="set-time-button"
        >
          ${this._translations.card.set_time}
        </mwc-button>
      </div>
    `;
  }

  private _renderControls(isEnabled: boolean, status: string): TemplateResult {
    return html`
      <div class="controls">
        <mwc-button
          raised
          class="control-button ${isEnabled ? 'danger' : 'primary'}"
          @click=${this._toggleAlarm}
        >
          ${isEnabled ? this._translations.card.disable_alarm : this._translations.card.enable_alarm}
        </mwc-button>
        ${status === 'ringing'
          ? html`
              <mwc-button
                outlined
                class="control-button secondary"
                @click=${this._snoozeAlarm}
              >
                ${this._translations.card.snooze}
              </mwc-button>
              <mwc-button
                raised
                class="control-button danger"
                @click=${this._dismissAlarm}
              >
                ${this._translations.card.dismiss}
              </mwc-button>
            `
          : html``}
      </div>
    `;
  }

  private _renderDays(enabledDays: string[]): TemplateResult {
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    return html`
      <div class="days-grid">
        ${days.map(
          (day) => {
            const isActive = enabledDays.includes(day);

            return html`
              <button
                class="day-button ${isActive ? 'active' : ''}"
                @click=${() => this._toggleDay(day)}
              >
                ${this._getDayTranslation(day)}
              </button>
            `;
          }
        )}
      </div>
    `;
  }

  private _renderScriptsInfo(attrs: any): TemplateResult {
    const scripts: Array<{ label: string; value: string }> = [];

    if (attrs.pre_alarm_enabled && attrs.pre_alarm_script) {
      scripts.push({
        label: 'Pre-alarm',
        value: `${attrs.pre_alarm_script} (${attrs.pre_alarm_minutes}m before)`,
      });
    }

    if (attrs.alarm_script) {
      scripts.push({
        label: 'Alarm',
        value: attrs.alarm_script,
      });
    }

    if (attrs.post_alarm_enabled && attrs.post_alarm_script) {
      scripts.push({
        label: 'Post-alarm',
        value: `${attrs.post_alarm_script} (${attrs.post_alarm_minutes}m after)`,
      });
    }

    if (scripts.length === 0) return html``;

    return html`
      <div class="scripts-info">
        <div class="scripts-title">Configured Scripts</div>
        ${scripts.map(
          script => html`
            <div class="script-item">
              <span class="script-label">${script.label}:</span>
              <span class="script-value">${script.value}</span>
            </div>
          `
        )}
      </div>
    `;
  }

  private _renderSnoozeInfo(): TemplateResult {
    const timeUntilAttrs = this.entities.timeUntil?.attributes || {};
    const snoozeCount = timeUntilAttrs.snooze_count || 0;
    const maxSnoozes = this.entities.main?.attributes?.max_snoozes || 3;
    const snoozeUntil = timeUntilAttrs.snooze_until;
    
    return html`
      <div class="snooze-info">
        <div>${this._translations.card.snoozed} (${snoozeCount}/${maxSnoozes})</div>
        ${snoozeUntil
          ? html`<div>${this._translations.card.until}: ${this._formatTime(new Date(snoozeUntil).toTimeString().substring(0, 5))}</div>`
          : html``}
      </div>
    `;
  }

  private _onTimeInputChange(ev: Event): void {
    // Don't auto-save on every keystroke - only when user finishes typing
    // The user can use the "Set Time" button or press Enter
  }

  private _onSetTimeButtonClick(ev: Event): void {
    // Get the time from the input field when button is clicked
    const timeInput = this.shadowRoot?.querySelector('#alarm-time-input') as HTMLInputElement;
    if (timeInput) {
      const time = timeInput.value;
      this._setAlarmTime(time);
    }
  }

  private _setAlarmTime(time: string): void {
    this._debug('⏰ ALARM CARD: Setting alarm time to:', time);
    if (!time || !this.config.device_id) {
      this._debugError('ALARM CARD: Cannot set time - missing time or device_id:', { time, device_id: this.config.device_id });
      return;
    }

    this._debug('⏰ ALARM CARD: Calling alarm_clock.set_alarm service:', {
      device_id: this.config.device_id,
      time: time,
    });

    this.hass.callService('alarm_clock', 'set_alarm', {
      device_id: this.config.device_id,
      time: time,
    });
    
    // Force immediate refresh after service call
    setTimeout(() => this._refreshEntityStates(), 100);
  }

  private _toggleAlarm(): void {
    this._debug('🔘 ALARM CARD: Toggle alarm button clicked');
    if (!this.config.device_id || !this.hass) {
      this._debugError('ALARM CARD: Cannot toggle alarm - no device_id found');
      return;
    }

    const isEnabled = this.entities.enabled?.state === 'on';
    const service = isEnabled ? 'turn_off' : 'turn_on';
    
    this._debug('🔘 ALARM CARD: Toggling alarm via switch:', {
      device_id: this.config.device_id,
      currentEnabled: isEnabled,
      service,
    });

    this.hass.callService('switch', service, {
      entity_id: this.entities.enabled?.entity_id,
    });
    
    // Force immediate refresh after service call
    setTimeout(() => this._refreshEntityStates(), 100);
  }

  private async _toggleDay(day: string): Promise<void> {
    this._debug('📅 ALARM CARD: Toggle day clicked:', day);
    if (!this.config.device_id) {
      this._debugError('ALARM CARD: Cannot toggle day - no device_id found:', day);
      return;
    }

    const dayEntity = this.entities.days?.[day];
    if (!dayEntity) {
      this._debugError('ALARM CARD: Cannot toggle day - no day entity found:', day);
      return;
    }

    const isEnabled = dayEntity.state === 'on';
    const service = isEnabled ? 'turn_off' : 'turn_on';

    this._debug('📅 ALARM CARD: Toggling day switch:', {
      day,
      device_id: this.config.device_id,
      currentEnabled: isEnabled,
      service,
    });

    await this.hass.callService('switch', service, {
      entity_id: dayEntity.entity_id,
    });
    
    // Force refresh after service call
    this._debug('📅 ALARM CARD: Service call completed, forcing refresh');
    setTimeout(() => this._refreshEntityStates(), 100);
  }

  private _snoozeAlarm(): void {
    this._debug('💤 ALARM CARD: Snooze button clicked');
    if (!this.config.device_id) {
      this._debugError('ALARM CARD: Cannot snooze - no device_id found');
      return;
    }

    this._debug('💤 ALARM CARD: Calling snooze service:', this.config.device_id);
    this.hass.callService('alarm_clock', 'snooze', {
      device_id: this.config.device_id,
    });
    
    // Force immediate refresh after service call
    setTimeout(() => this._refreshEntityStates(), 100);
  }

  private _dismissAlarm(): void {
    this._debug('🛑 ALARM CARD: Dismiss button clicked');
    if (!this.config.device_id) {
      this._debugError('ALARM CARD: Cannot dismiss - no device_id found');
      return;
    }

    this._debug('🛑 ALARM CARD: Calling dismiss service:', this.config.device_id);
    this.hass.callService('alarm_clock', 'dismiss', {
      device_id: this.config.device_id,
    });
    
    // Force immediate refresh after service call
    setTimeout(() => this._refreshEntityStates(), 100);
  }

  private _formatTime(time24: string): string {
    if (!time24 || time24 === 'off') return time24;
    
    // Use 24-hour format if configured
    if (this.config.use_24_hour_format) {
      return time24;
    }
    
    // Otherwise use 12-hour format
    return this._formatTime12Hour(time24);
  }

  private _formatTime12Hour(time24: string): string {
    if (!time24 || time24 === 'off') return time24;
    
    try {
      // Parse the 24-hour time (e.g., "07:00" or "20:30")
      const [hoursStr, minutesStr] = time24.split(':');
      const hours24 = parseInt(hoursStr, 10);
      const minutes = parseInt(minutesStr, 10);
      
      // Convert to 12-hour format
      const isPM = hours24 >= 12;
      const hours12 = hours24 === 0 ? 12 : hours24 > 12 ? hours24 - 12 : hours24;
      const ampm = isPM ? 'PM' : 'AM';
      
      // Format without leading zero for hours, but keep it for minutes
      const minutesFormatted = minutes.toString().padStart(2, '0');
      
      return `${hours12}:${minutesFormatted} ${ampm}`;
    } catch (error) {
      // If parsing fails, return original time
      return time24;
    }
  }

  private _getStatusTranslation(status: string): string {
    // Safely get status translation with fallback
    const statusKey = status.toLowerCase() as keyof typeof this._translations.status;
    return this._translations.status[statusKey] || status.toUpperCase();
  }

  private _getDayTranslation(day: string): string {
    // Map full day names to short day names
    const dayToShortMap: { [key: string]: string } = {
      'monday': 'mon',
      'tuesday': 'tue',
      'wednesday': 'wed',
      'thursday': 'thu',
      'friday': 'fri',
      'saturday': 'sat',
      'sunday': 'sun',
    };
    
    // Get the short version of the day
    const shortDay = dayToShortMap[day.toLowerCase()] || day.toLowerCase();
    const dayKey = shortDay as keyof typeof this._translations.days;
    
    // Return the short day translation with fallback
    return this._translations.days[dayKey] || day.charAt(0).toUpperCase() + day.slice(1);
  }

  private _toggleSettingsMenu(): void {
    this._showSettingsMenu = !this._showSettingsMenu;
  }

  private _renderSettingsMenu(): TemplateResult {
    return html`
      <div class="settings-dropdown" @click=${this._handleSettingsClick}>
        <label class="settings-option">
          <input
            type="checkbox"
            .checked=${this.config.use_24_hour_format || false}
            @change=${this._toggle24HourFormat}
          />
          ${this._translations.card.use_24_hour_format}
        </label>
      </div>
    `;
  }

  private _handleSettingsClick(ev: Event): void {
    // Prevent dropdown from closing when clicking inside
    ev.stopPropagation();
  }

  private _toggle24HourFormat(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    const use24Hour = target.checked;
    
    this.config = {
      ...this.config,
      use_24_hour_format: use24Hour,
    };
    
    fireEvent(this, 'config-changed', { config: this.config });
    this._showSettingsMenu = false;
  }

  private _handleCardClick(ev: Event): void {
    // Close settings menu when clicking outside of it
    if (this._showSettingsMenu && !(ev.target as Element)?.closest('.settings-menu')) {
      this._showSettingsMenu = false;
    }
  }

  public getCardSize(): number {
    return 6;
  }

  static get styles(): CSSResultGroup {
    return css`
      :host {
        display: block;
      }

      ha-card {
        height: 100%;
      }

      .card-content {
        padding: 24px;
      }

      .warning {
        display: block;
        color: var(--error-color);
        font-weight: 500;
        padding: 16px;
        text-align: center;
      }

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      .title {
        font-size: 24px;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .header-right {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .status {
        font-size: 14px;
        padding: 4px 12px;
        border-radius: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }

      .settings-menu {
        position: relative;
      }

      .settings-button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        font-size: 18px;
        padding: 8px;
        cursor: pointer;
        color: #ffffff;
        border-radius: 50%;
        transition: all 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        opacity: 0.8;
      }

      .settings-button:hover {
        background: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        opacity: 1;
        transform: scale(1.05);
      }

      .settings-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        background: var(--card-background-color);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        min-width: 200px;
        z-index: 1000;
        padding: 8px;
      }

      .settings-option {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        cursor: pointer;
        border-radius: 4px;
        transition: background-color 0.2s;
        font-size: 14px;
        color: var(--primary-text-color);
      }

      .settings-option:hover {
        background-color: var(--secondary-background-color);
      }

      .settings-option input[type="checkbox"] {
        margin: 0;
        cursor: pointer;
      }

      .status.off {
        background: var(--error-color);
        color: white;
      }
      .status.armed {
        background: var(--success-color);
        color: white;
      }
      .status.ringing {
        background: var(--warning-color);
        color: white;
        animation: blink 1s infinite;
      }
      .status.snoozed {
        background: var(--info-color);
        color: white;
      }

      @keyframes blink {
        0%,
        50% {
          opacity: 1;
        }
        51%,
        100% {
          opacity: 0.3;
        }
      }

      .time-display {
        text-align: center;
        margin: 20px 0;
      }

      .alarm-time {
        font-size: 48px;
        font-weight: 300;
        color: var(--primary-text-color);
        margin-bottom: 8px;
      }

      .next-alarm {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      .countdown {
        margin-top: 8px;
      }

      .countdown-label {
        font-size: 12px;
        color: var(--secondary-text-color);
        display: block;
        margin-bottom: 4px;
      }

      .countdown-time {
        font-size: 18px;
        font-weight: 500;
        color: var(--primary-color);
      }

      .time-picker {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin: 20px 0;
      }

      .time-input {
        padding: 8px 12px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        font-size: 16px;
        background: var(--card-background-color);
        color: var(--primary-text-color);
      }

      .set-time-button {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .controls {
        display: flex;
        gap: 12px;
        margin: 20px 0;
        flex-wrap: wrap;
      }

      .control-button {
        flex: 1;
        min-width: 120px;
      }

      .control-button.primary {
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: var(--text-primary-color);
      }

      .control-button.secondary {
        --mdc-theme-primary: var(--secondary-text-color);
        --mdc-theme-on-primary: var(--primary-text-color);
      }

      .control-button.danger {
        --mdc-theme-primary: var(--error-color);
        --mdc-theme-on-primary: white;
      }

      .days-grid {
        display: flex;
        justify-content: space-between;
        gap: 4px;
        margin: 20px 0;
        overflow: visible;
      }

      .day-button {
        background: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        border: none;
        outline: none;
        box-shadow: none;
        min-width: 40px;
        flex: 1;
        max-width: calc((100% - 30px) / 7);
        height: 36px;
        font-size: 11px;
        font-weight: 500;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        font-family: inherit;
      }

      .day-button:hover {
        background: rgba(255, 255, 255, 0.25);
        transform: translateY(-1px);
      }

      .day-button.active {
        background: #ff9800;
        color: #ffffff;
        box-shadow: 0 2px 4px rgba(255, 152, 0, 0.3);
      }

      .day-button.active:hover {
        background: #e68900;
        transform: translateY(-1px);
      }

      .scripts-info {
        margin-top: 20px;
        padding: 16px;
        background: var(--secondary-background-color);
        border-radius: 8px;
      }

      .scripts-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 12px;
        color: var(--primary-text-color);
      }

      .script-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        font-size: 14px;
        flex-wrap: wrap;
        gap: 8px;
      }

      .script-label {
        color: var(--secondary-text-color);
      }

      .script-value {
        color: var(--primary-text-color);
        font-weight: 500;
        text-align: right;
        flex: 1;
      }

      .snooze-info {
        margin-top: 16px;
        padding: 12px;
        background: var(--warning-color);
        color: white;
        border-radius: 8px;
        text-align: center;
      }

      @media (max-width: 600px) {
        .card-content {
          padding: 16px;
        }

        .alarm-time {
          font-size: 36px;
        }

        .controls {
          flex-direction: column;
        }

        .control-button {
          flex: none;
        }

        .script-item {
          flex-direction: column;
          gap: 4px;
        }

        .script-value {
          text-align: left;
        }
      }
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'alarm-clock-card': AlarmClockCard;
  }
}

// Register the card
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'alarm-clock-card',
  name: 'Alarm Clock Card',
  description: 'A card for displaying and controlling alarm clock entities',
  preview: true,
  documentationURL: 'https://github.com/siegeld/alarm-clock',
});

console.info(
  `%c  ALARM-CLOCK-CARD  %c  Version 2.0.17  `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray'
);
