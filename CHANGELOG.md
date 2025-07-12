# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.7] - 2025-07-12

### 🌍 Major International Expansion

#### Top 10 Global Languages Support
- **Expanded to 12 Languages** - Added 7 new languages for comprehensive international coverage
- **Global Reach** - Now supports languages spoken by over 4 billion people worldwide
- **Complete Translations** - Full interface translation for all supported languages

#### New Languages Added
- **Chinese (Simplified)** (`zh`) - 中文：闹钟、设置时间、启用闹钟
- **Japanese** (`ja`) - 日本語：アラーム時計、時刻設定、アラーム有効
- **Korean** (`ko`) - 한국어：알람 시계、시간 설정、알람 켜기
- **Russian** (`ru`) - Русский：Будильник、Установить время、Включить будильник
- **Portuguese** (`pt`) - Português：Despertador、Definir horário、Ativar alarme
- **Italian** (`it`) - Italiano：Sveglia、Imposta orario、Attiva sveglia
- **Dutch** (`nl`) - Nederlands：Wekker、Tijd instellen、Wekker inschakelen
- **Hebrew** (`he`) - עברית：שעון מעורר、הגדר שעה、הפעל מעורר
- **Arabic** (`ar`) - العربية：ساعة المنبه、تحديد الوقت、تشغيل المنبه
- **Hindi** (`hi`) - हिन्दी：अलार्म घड़ी、समय सेट करें、अलार्म चालू करें

### 🎯 Complete Language Coverage

#### All Supported Languages (12 Total)
- **English** (`en`) - Default language
- **German** (`de`) - Deutsch
- **Spanish** (`es`) - Español
- **French** (`fr`) - Français
- **Slovenian** (`sl`) - Slovenščina
- **Chinese** (`zh`) - 中文
- **Japanese** (`ja`) - 日本語
- **Korean** (`ko`) - 한국어
- **Russian** (`ru`) - Русский
- **Portuguese** (`pt`) - Português
- **Italian** (`it`) - Italiano
- **Dutch** (`nl`) - Nederlands
- **Hebrew** (`he`) - עברית
- **Arabic** (`ar`) - العربية
- **Hindi** (`hi`) - हिन्दी

### 🔧 Technical Features

#### Script Support
- **Right-to-Left Languages** - Proper support for Hebrew and Arabic text direction
- **Character Sets** - Full Unicode support for all character systems
- **Font Compatibility** - Works with system fonts for proper character rendering

#### Language Detection
- **Smart Fallback** - Graceful fallback to English for unsupported languages
- **Regional Variants** - Handles language variants (e.g., zh-CN, zh-TW both use zh)
- **Automatic Detection** - Uses Home Assistant language preferences seamlessly

### 📊 Global Impact

#### Population Coverage
- **4+ Billion Speakers** - Languages cover majority of world's population
- **Regional Distribution** - Comprehensive coverage across all continents
- **Most Requested Languages** - Includes top languages requested by community

#### User Experience
- **Native Language Support** - Users see interface in their preferred language
- **Cultural Sensitivity** - Appropriate translations for different cultural contexts
- **Accessibility** - Improved accessibility for non-English speaking users

---

## [2.0.6] - 2025-07-12

### 🌍 Translation Update

#### New Language Support
- **Slovenian Translation** - Complete Slovenian language support (Slovenščina)
- **Enhanced Language Coverage** - Added 5th supported language for broader international usage

#### Slovenian Translations
- **Card Interface** - Budilka, Nastavi čas, Vključi budilko, Izključi budilko
- **Status Messages** - IZKLOPLJENO, VKLOPLJENO, ZVONI, ODLOŽENO
- **Day Names** - Ponedeljek, Torek, Sreda, Četrtek, Petek, Sobota, Nedelja
- **Settings Menu** - Uporabi 24-urni format, Nastavitve
- **Action Buttons** - Odloži, Ustavi

### 🔧 Technical Details
- **Language Code** - Uses `sl` for Slovenian language detection
- **Automatic Detection** - Works with Home Assistant language preferences
- **Fallback System** - Graceful fallback to English if translations missing

---

## [2.0.5] - 2025-07-12

### 🌍 Internationalization

#### Multi-Language Support
- **German Translation** - Complete German language support (Deutsch)
- **Spanish Translation** - Complete Spanish language support (Español)
- **French Translation** - Complete French language support (Français)
- **Automatic Language Detection** - Uses Home Assistant language settings automatically

### 🎯 Language Features

#### Automatic Detection
- **Home Assistant Language** - Automatically detects from `hass.language`
- **User Language Preference** - Falls back to `hass.user.language`
- **Browser Language** - Uses browser setting if HA language unavailable
- **English Fallback** - Defaults to English if no supported language detected

#### Translated Elements
- **All UI Text** - Complete translation of buttons, labels, and messages
- **Status Messages** - Translated alarm states (OFF/ARMED/RINGING/SNOOZED)
- **Day Names** - Localized day names and abbreviations
- **Settings Menu** - Translated 24-hour format option
- **Time Displays** - Localized time format labels

### 🔧 Technical Implementation

#### Translation System
- **Embedded Translations** - All languages built into main JavaScript bundle
- **No External Files** - Works seamlessly with HACS installation
- **Runtime Detection** - Language determined at card render time
- **Fallback System** - Graceful fallback to English for missing translations

#### Supported Languages
- **English** (`en`) - Default language
- **German** (`de`) - Wecker, Zeit einstellen, Schlummern, etc.
- **Spanish** (`es`) - Despertador, Establecer hora, Posponer, etc.
- **French** (`fr`) - Réveil, Définir l'heure, Reporter, etc.
- **Slovenian** (`sl`) - Budilka, Nastavi čas, Odloži, etc.

### 📝 Migration Notes
- **No Configuration Required** - Languages work automatically
- **Backward Compatible** - Existing installations continue working
- **HACS Compatible** - Single file deployment with all languages included

---

## [2.0.3] - 2025-07-12

### ✨ New Features

#### 24-Hour Time Format Support
- **Time Format Options** - Choose between 12-hour (AM/PM) or 24-hour format
- **Three-Dot Settings Menu** - Runtime configuration via settings menu in card header
- **Persistent Settings** - Format preference persists across restarts and browser refreshes
- **Multiple Configuration Methods** - Set via YAML, visual editor, or runtime menu

### 🎯 Configuration Options

#### YAML Configuration
```yaml
type: custom:alarm-clock-card
device_id: your_device_id
use_24_hour_format: true  # Enable 24-hour format
```

#### Runtime Settings
- **Three-Dot Menu** - Click menu icon in card header for instant format toggle
- **Immediate Updates** - Time format changes instantly without page refresh
- **Persistent Storage** - Settings saved to dashboard configuration

### 🔧 Technical Details

#### UI Improvements
- **Clean Interface** - Settings menu keeps card interface uncluttered
- **Instant Feedback** - Format changes apply immediately
- **Backward Compatible** - Defaults to 12-hour format for existing installations

#### Multiple Access Methods
- **YAML Configuration** - Set `use_24_hour_format: true` in dashboard config
- **Visual Editor** - Toggle in "Display Options" section
- **Runtime Menu** - Three-dot menu in card header for instant changes

### 📝 Migration Notes

- **No Breaking Changes** - Existing cards continue to use 12-hour format
- **Optional Feature** - Must be explicitly enabled to use 24-hour format
- **All Time Displays** - Format applies to alarm time, next alarm, and snooze times

---

## [1.3.0] - 2025-07-10

### 🚀 Major Architecture Refactoring

#### Home Assistant Coordinator Pattern
- **Migrated to DataUpdateCoordinator** - Complete refactoring to use proper HA coordinator pattern
- **Centralized State Management** - All alarm logic now centralized in AlarmClockCoordinator
- **Thin Entity Wrappers** - Entities now just expose coordinator data via standard HA patterns
- **Standard HA Structure** - Follows Home Assistant best practices for integration architecture

#### Unique ID-Based Entity Discovery
- **Rename-Proof Architecture** - Card now uses unique_id patterns instead of entity names
- **Clean Unique ID Patterns** - Simplified from `alarm_clock_{entry_id}` to just `{entry_id}` for main entity
- **Registry-Based Discovery** - Works even when entities don't have states yet
- **Future-Proof Design** - Entity renames won't break card functionality

#### Real-Time Responsiveness
- **1-Second Update Interval** - Changed coordinator from 30-second to 1-second updates
- **Immediate Service Call Refresh** - All service calls trigger instant coordinator refresh
- **Responsive UI Updates** - Card now responds immediately to button clicks (<1 second)
- **Double-Layer Responsiveness** - Both backend push and frontend pull for instant feedback

### 🛠️ Bug Fixes

#### Entity Discovery Issues
- **Fixed Card Entity Detection** - Resolved "Could not find coordinator" errors
- **Registry vs State Handling** - Fixed entities existing in registry but not having states
- **Fallback Entity Values** - Added fallback handling for entities without states
- **Platform Detection** - Fixed entity platform detection issues

#### UI Responsiveness
- **Eliminated 15-Second Delays** - Fixed slow response when clicking "Enable Alarm"
- **Immediate Visual Feedback** - All card interactions now provide instant feedback
- **Force Refresh Logic** - Added immediate refresh after all service calls

### ✨ Technical Improvements

#### Code Architecture
- **Proper HA Patterns** - Now follows Home Assistant coordinator best practices
- **Single Source of Truth** - Coordinator manages all state, entities just expose it
- **Better Error Handling** - Enhanced error handling and fallback mechanisms
- **Cleaner Entity Structure** - Simplified entity relationships and dependencies

#### Performance Optimizations
- **Real-Time Updates** - 1-second coordinator refresh for live status monitoring
- **Efficient State Propagation** - Optimized data flow between coordinator and entities
- **Reduced Entity Coupling** - Entities no longer directly communicate with each other

### 🔧 Breaking Changes

#### Internal Architecture
- **Coordinator Required** - Entities now require coordinator for proper operation
- **Entity Dependencies** - Some entity initialization order changes
- **Unique ID Format** - Main entity unique_id simplified (internal change)

### 📝 Migration Notes

- **Restart Required** - Restart Home Assistant after updating to apply coordinator changes
- **Browser Refresh** - Hard refresh browser (Ctrl+F5) to load updated card
- **No Config Changes** - All existing alarm settings preserved
- **Performance Improvement** - Should notice much faster UI responsiveness

### 🎯 What's Improved

- ✅ **Instant Responsiveness** - Card responds in ~1 second instead of 15 seconds
- ✅ **Rename-Proof Design** - Renaming entities won't break card functionality  
- ✅ **Proper HA Architecture** - Follows Home Assistant coordinator best practices
- ✅ **Real-Time Updates** - Live status monitoring with 1-second precision
- ✅ **Better Error Handling** - More robust entity discovery and state management
- ✅ **Future-Proof** - Clean architecture for easier maintenance and features

---

## [1.1.3] - 2025-07-09

### 🚨 Critical Bug Fix

#### Dismiss Button Functionality  
- **Fixed Dismiss Button Not Working** - Restore immediate alarm dismissal functionality
- **Proper State Flow** - Dismiss now immediately sets state to OFF, then calculates next alarm
- **Auto-dismiss Fix** - Applied same fix to auto-dismiss timer functionality

### 🎯 What's Fixed

**The Problem:**
- Dismiss button stopped working after v1.1.2 recurring alarm fix
- Clicking dismiss did nothing - alarm kept ringing
- Auto-dismiss also broken

**Root Cause:**
- Removed immediate state change to `ALARM_STATE_OFF` in dismiss methods
- Relied entirely on `_async_update_alarm_state()` to set new state
- This broke immediate dismiss functionality

**The Solution:**
- Restored immediate `self._state = ALARM_STATE_OFF` 
- Write state to HA immediately so user sees alarm dismissed
- Then recalculate next alarm occurrence for recurring functionality
- Update sensors with new next alarm time

### 🔧 Technical Details

**Correct Dismiss Flow:**
1. **Immediately set state to OFF** (stops current alarm)  
2. **Write state to HA immediately** (user sees alarm dismissed)
3. **Then recalculate next alarm occurrence** (for recurring)
4. **Update sensors** with new next alarm

Applied to both `async_dismiss()` and `_async_auto_dismiss()` methods.

### 📝 Impact

This fixes the critical regression where dismiss functionality was completely broken. Now dismiss works immediately AND alarms still recur properly.

---

## [1.1.2] - 2025-07-09

### 🚨 Critical Bug Fix

#### Recurring Alarm Functionality
- **Fixed Critical Recurring Alarm Bug** - Alarms now properly advance to next occurrence after dismiss/auto-dismiss
- **Immediate State Recalculation** - `async_dismiss()` and `_async_auto_dismiss()` now call `_async_update_alarm_state()`
- **Sensor Synchronization** - Both dismiss methods trigger `_async_update_related_entities()` for real-time updates

### 🎯 What's Fixed

**Before (Broken):**
- Alarm rings Monday 7:00 AM → User dismisses → Alarm stays OFF permanently
- Next alarm sensor shows "None" 
- Alarm never rings again until manually re-enabled

**After (Fixed):**
- Alarm rings Monday 7:00 AM → User dismisses → Immediately arms for Tuesday 7:00 AM
- Next alarm sensor immediately shows "Tuesday at 7:00 AM"
- Alarm properly recurs as expected

### 📝 Impact

This was a **critical functionality bug** that made alarms behave as one-time instead of recurring. All users should update immediately to restore proper recurring alarm behavior.

### 🔧 Technical Details

- Added `await self._async_update_alarm_state()` to both dismiss methods
- Added `await self._async_update_related_entities()` for sensor updates
- Ensures alarm state machine properly advances to next scheduled occurrence
- Maintains all timing and script execution logic

---

## [1.1.1] - 2025-07-09

### 🛠️ Bug Fixes

#### UI/Layout Improvements
- **Fixed Day Button Layout** - Resolved Sunday button getting cut off on narrow cards
- **Responsive Design** - Switched from CSS grid to flexbox for better space distribution
- **Optimized Spacing** - Reduced gaps and font sizes for better fit on all card widths

#### Sensor Synchronization
- **Fixed Sensor Updates** - Next alarm and time until sensors now update immediately when alarm time or days change
- **Real-time Recalculation** - Sensors properly recalculate values without requiring page refresh
- **Direct Entity References** - Improved sensor update mechanism using stored entity references

### ✨ Technical Improvements

#### Layout System
- **Flexbox Implementation** - Changed day buttons from `grid` to `flex` with `justify-content: space-between`
- **Calculated Sizing** - Added `max-width: calc((100% - 12px) / 7)` for precise button sizing
- **Responsive Spacing** - Reduced gap from 8px → 2px and font-size from 12px → 10px

#### Entity Management
- **Sensor Registration** - Sensors now register themselves with main entity during setup
- **Force Updates** - Added direct `async_write_ha_state()` calls for immediate sensor updates
- **Better Synchronization** - Improved communication between main entity and sensor entities

### 🎯 What's Fixed

- ✅ All 7 day buttons now fit properly on narrow cards without Sunday cutoff
- ✅ Next alarm sensor updates immediately when time or days change
- ✅ Time until sensor recalculates countdown in real-time
- ✅ No page refresh required for sensor updates
- ✅ Improved responsive layout across all card sizes

### 📝 Migration Notes

- Hard refresh your browser (Ctrl+F5) after updating to see the layout fixes
- No configuration changes required
- All existing alarm settings preserved

---

## [1.1.0] - 2025-07-09

### 🛠️ Bug Fixes & Improvements

#### Frontend Card Fixes
- **Fixed Status Indicator** - Correctly maps to `switch.alarm_clock_enabled` instead of wrong entity
- **Fixed Day Button Updates** - Real-time state changes without requiring browser refresh
- **Enhanced Entity Discovery** - Improved entity mapping logic to prevent conflicts

#### Sensor Updates Fixed
- **Fixed Next Alarm Sensor** - Now updates immediately when alarm time or days are changed
- **Fixed Time Until Sensor** - Recalculates countdown instantly when configuration changes
- **Real-time Synchronization** - All sensors stay in sync with main entity without refresh

#### User Experience Improvements
- **12-Hour Time Format** - Display now shows "8:25 PM" instead of "20:25" for better readability
- **Immediate Visual Feedback** - All button clicks now provide instant visual responses
- **Cleaner Interface** - Removed debug logging for production use

#### Backend Synchronization
- **Fixed State Sync** - Resolved switch/main entity synchronization issues
- **Improved State Logic** - Always updates state when alarm enabled/disabled changes
- **Better Error Handling** - Enhanced entity communication reliability
- **Direct Entity References** - Simplified sensor update mechanism using stored references

### ✨ Technical Improvements

#### State Management
- **Enhanced Reactivity** - Improved Lit element change detection for nested objects
- **Fresh State Reading** - Card now reads directly from `hass.states` for real-time data
- **Forced Refresh Logic** - Added manual refresh triggers for immediate updates

#### Code Quality
- **Removed Debug Code** - Cleaned up console logging from troubleshooting
- **Better Error Messages** - More descriptive error handling and logging
- **Version Consistency** - Updated both manifest and UI card to 1.1.0

### 🎯 What's Fixed

- ✅ Status correctly shows "ARMED" when enabled, "OFF" when disabled
- ✅ Time displays in user-friendly 12-hour format (e.g., "8:25 PM")
- ✅ Day buttons update immediately when clicked
- ✅ Enable/disable button works properly without refresh
- ✅ Real-time entity state synchronization across all components

### 🔧 Breaking Changes

None - this is a backwards-compatible bug fix release.

### 📝 Migration Notes

- Hard refresh your browser (Ctrl+F5) after updating to see the fixes
- No configuration changes required
- All existing alarm settings will be preserved

---

## [1.0.0] - 2025-07-08

### 🎉 Initial Release

This is the first stable release of the Alarm Clock integration for Home Assistant.

### ✨ Features

#### Core Alarm Functionality
- **Comprehensive Alarm Clock** - Full-featured alarm with time, day selection, and enable/disable
- **Multi-Day Support** - Configure alarm for any combination of weekdays
- **State Persistence** - All settings survive Home Assistant restarts
- **Real-Time Updates** - Live countdown and status updates

#### Script Integration
- **Pre-Alarm Scripts** - Execute actions X minutes before alarm (e.g., gradual wake-up lighting)
- **Main Alarm Scripts** - Execute alarm sound/notification actions
- **Post-Alarm Scripts** - Execute cleanup actions (e.g., turn off lights, start coffee)
- **Independent Post-Alarm** - Runs on separate timer regardless of how alarm ends

#### Snooze System
- **Smart Snooze** - Configurable duration (1-30 minutes, default 9)
- **Snooze Limits** - Configurable max snoozes (1-10, default 3)
- **Snooze Tracking** - Shows current snooze count and remaining snoozes
- **Snooze Countdown** - Real-time countdown until alarm rings again

#### Auto-Dismiss
- **Configurable Timeout** - Auto-dismiss after 1-120 minutes (default 30)
- **Safety Feature** - Prevents alarm from ringing forever if user is away
- **Independent Operation** - Works alongside manual dismiss and snooze

#### User Interface
- **Always-Available Buttons** - Snooze and dismiss buttons never greyed out
- **Smart Actions** - Buttons work when appropriate, do nothing gracefully when not
- **Time Picker** - Easy alarm time setting with immediate feedback
- **Day Toggles** - Individual switches for each day of the week

#### Real-Time Sensors
- **Time Until Alarm** - Live countdown with 1-second precision
- **Smart Countdown** - Shows snooze countdown when snoozed, alarm countdown when armed
- **Next Alarm** - Shows exact date/time of next alarm
- **Alarm Status** - Current state (off/armed/ringing/snoozed) with rich attributes

#### Configuration Entities
- **Pre-Alarm Minutes** - How long before alarm to run pre-alarm script (1-60 min)
- **Post-Alarm Minutes** - How long after alarm to run post-alarm script (1-120 min)
- **Snooze Duration** - How long each snooze lasts (1-30 min)
- **Max Snoozes** - Maximum number of snoozes allowed (1-10)
- **Auto Dismiss Minutes** - How long alarm rings before auto-dismiss (1-120 min)

### 🔧 Technical Features

#### Entity Types
- **Main Alarm Clock** - Core entity with comprehensive state management
- **Time Entity** - For setting alarm time via time picker
- **Switch Entities** - For enabling/disabling alarm and individual days
- **Number Entities** - For configuring durations and limits
- **Button Entities** - For snooze and dismiss actions
- **Sensor Entities** - For status, countdown, and next alarm information

#### State Management
- **Persistent Configuration** - All settings saved to Home Assistant config
- **Startup State Restoration** - Correctly restores alarm time, enabled state, and day selection
- **Execution Tracking** - Prevents duplicate script execution
- **Timer Management** - Comprehensive timer system with proper cleanup

#### Events & Logging
- **Rich Event System** - Fires events for alarm triggered, snoozed, dismissed, auto-dismissed
- **Comprehensive Logging** - Debug-level logging for troubleshooting
- **Logbook Integration** - Events appear in Home Assistant logbook
- **State Attributes** - Rich attributes for automations and dashboards

### 🎯 Use Cases

#### Basic Alarm
- Set wake-up time and days
- Choose alarm sound script
- Snooze or dismiss when ringing

#### Advanced Wake-Up
- Pre-alarm: Gradually brighten lights 15 minutes before
- Main alarm: Play wake-up sounds and notifications
- Post-alarm: Turn off lights, start coffee maker after 30 minutes

#### Safety Features
- Auto-dismiss prevents infinite ringing
- Configurable snooze limits prevent oversleeping
- Always-available controls ensure alarm can always be stopped

### 📱 Dashboard Integration

#### Entities for Cards
- `sensor.alarm_clock_time_until_alarm` - Real-time countdown
- `sensor.alarm_clock_next_alarm` - Next alarm timestamp
- `sensor.alarm_clock_status` - Current state with rich attributes
- `time.alarm_clock_time` - Time picker for setting alarm
- `button.alarm_clock_snooze` - Manual snooze action
- `button.alarm_clock_dismiss` - Manual dismiss action

#### Automation Examples
```yaml
# Bedtime automation when alarm is set for tomorrow
- trigger:
    platform: numeric_state
    entity_id: sensor.alarm_clock_time_until_alarm
    below: 480  # 8 hours
  action:
    service: light.turn_off
    entity_id: all

# Pre-coffee automation
- trigger:
    platform: event
    event_type: alarm_clock_triggered
  action:
    service: switch.turn_on
    entity_id: switch.coffee_maker
```

### 🚀 Installation

1. Copy the `custom_components/alarm_clock` folder to your Home Assistant custom_components directory
2. Restart Home Assistant
3. Go to Settings > Integrations > Add Integration
4. Search for "Alarm Clock" and follow the setup wizard
5. Configure your alarm scripts and preferences

### 📋 Requirements

- Home Assistant 2023.4.0 or later
- Python 3.11 or later
- Script entities for alarm sounds/actions (optional)

### 🎉 Initial Release Notes

This initial release provides a complete, production-ready alarm clock solution for Home Assistant. All core functionality is implemented and tested, including state persistence, real-time updates, and comprehensive configuration options.

The integration is designed to be both simple for basic use cases and powerful for advanced automation scenarios.

---

**Full Changelog**: https://github.com/your-repo/alarm-clock/commits/v1.0.0
