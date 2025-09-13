import { LitElement, CSSResultGroup, TemplateResult, PropertyValues } from 'lit';
import { LovelaceCardEditor, LovelaceCard } from 'custom-card-helpers';
import './mwc-loader';
import type { HomeAssistant, LovelaceCardConfig, ActionConfig } from 'custom-card-helpers';
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
export declare class AlarmClockCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): AlarmClockCardConfig;
    hass: HomeAssistant;
    private config;
    private _showSettingsMenu;
    private entities;
    private get _translations();
    private _debug;
    private _debugError;
    setConfig(config: AlarmClockCardConfig): void;
    protected shouldUpdate(changedProps: PropertyValues): boolean;
    private _refreshEntityStates;
    private _updateEntities;
    protected render(): TemplateResult;
    private _renderTimePicker;
    private _renderControls;
    private _renderDays;
    private _renderScriptsInfo;
    private _renderSnoozeInfo;
    private _onTimeInputChange;
    private _onSetTimeButtonClick;
    private _setAlarmTime;
    private _toggleAlarm;
    private _toggleDay;
    private _snoozeAlarm;
    private _dismissAlarm;
    private _formatTime;
    private _formatTime12Hour;
    private _getStatusTranslation;
    private _getDayTranslation;
    private _toggleSettingsMenu;
    private _renderSettingsMenu;
    private _handleSettingsClick;
    private _toggle24HourFormat;
    private _handleCardClick;
    getCardSize(): number;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        'alarm-clock-card': AlarmClockCard;
    }
}
//# sourceMappingURL=alarm-clock-card.d.ts.map