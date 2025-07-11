# 🕐 Alarm Clock Card

A beautiful, interactive Lovelace card for the [Alarm Clock Integration](https://github.com/siegeld/alarm-clock) in Home Assistant.

[![hacs][hacsbadge]][hacs]
[![GitHub Release][releases-shield]][releases]
[![License][license-shield]](LICENSE)

## ✨ Features

- **⏰ Large Time Display** - Clear, easy-to-read alarm time with next alarm information
- **🎛️ Interactive Time Picker** - Intuitive time selection interface
- **🔘 Day Toggles** - Quick enable/disable for each day of the week
- **▶️ Control Buttons** - Snooze and dismiss buttons when alarm is active
- **📋 Script Display** - Shows configured pre/post alarm scripts
- **🎨 Status Animations** - Visual feedback for alarm states
- **⚙️ Card Editor** - GUI configuration in Lovelace editor
- **📱 Mobile Responsive** - Works perfectly on all screen sizes
- **🎨 Real-time Updates** - Live countdown with 1-second precision

## 📋 Prerequisites

This card requires the [Alarm Clock Integration](https://github.com/siegeld/alarm-clock) to be installed and configured in Home Assistant.

## 🚀 Installation

### Via HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to **"Frontend"**
3. Click the **"+ Explore & Download Repositories"** button
4. Search for **"Alarm Clock Card"**
5. Click **"Download"**
6. **Restart Home Assistant**

### Manual Installation

1. Download `alarm-clock-card.js` from the latest release
2. Copy it to your `www/alarm-clock-card/` folder
3. Add the card resource in Home Assistant:
   - Go to **Settings** → **Dashboards** → **Resources**
   - Click **"+ Add Resource"**
   - URL: `/local/alarm-clock-card/alarm-clock-card.js`
   - Resource type: **JavaScript module**

## ⚙️ Configuration

### Visual Editor

1. Add a new card in Lovelace
2. Search for **"Alarm Clock Card"**
3. Select your alarm clock entity
4. Configure display options through the visual editor

### YAML Configuration

```yaml
type: custom:alarm-clock-card
entity: alarm_clock.bedroom_alarm
name: "Bedroom Alarm"
show_time_picker: true
show_days: true
show_scripts: true
show_snooze_info: true
```

### Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `entity` | string | **Required** | Alarm clock entity ID |
| `name` | string | `"Alarm Clock"` | Card title |
| `show_time_picker` | boolean | `true` | Show the time picker input |
| `show_days` | boolean | `true` | Show day selection buttons |
| `show_scripts` | boolean | `true` | Show configured scripts info |
| `show_snooze_info` | boolean | `true` | Show snooze info when snoozed |

## 🎨 Card Sections

### Header
- **Title**: Customizable card name
- **Status Badge**: Current alarm state (off/armed/ringing/snoozed)

### Time Display
- **Large Time**: Current alarm time
- **Next Alarm**: When the alarm will next trigger
- **Countdown**: Real-time countdown to alarm or snooze end

### Time Picker
- **Time Input**: Set alarm time directly
- **Set Button**: Apply the new time

### Controls
- **Enable/Disable**: Toggle alarm on/off
- **Snooze**: Available when alarm is ringing
- **Dismiss**: Available when alarm is ringing

### Day Selection
- **Day Buttons**: Toggle individual days of the week
- **Visual Feedback**: Active days highlighted

### Scripts Info
- **Pre-alarm**: Shows configured pre-alarm script and timing
- **Main Alarm**: Shows the main alarm script
- **Post-alarm**: Shows post-alarm script and timing

### Snooze Info
- **Snooze Counter**: Shows current snooze count vs. maximum
- **Time Until**: When the snooze will end

## 📱 Responsive Design

The card automatically adapts to different screen sizes:

- **Desktop**: Full layout with side-by-side elements
- **Mobile**: Stacked layout with larger touch targets
- **Tablet**: Balanced layout optimized for touch

## 🎨 Theming

The card respects Home Assistant's theme system:

- **Colors**: Uses theme-defined colors for consistency
- **Typography**: Matches Home Assistant's font system
- **Spacing**: Follows Material Design guidelines

## 🔧 Troubleshooting

### Card Not Loading

1. Check browser console for errors
2. Verify the card is added to Lovelace resources
3. Ensure the alarm clock integration is installed
4. Clear browser cache and hard refresh (Ctrl+F5)

### Entity Not Found

1. Verify the [Alarm Clock Integration](https://github.com/your-username/alarm-clock) is installed and configured
2. Check that the entity ID in the card config matches your alarm entity
3. Restart Home Assistant if the integration was recently added

### Visual Editor Not Working

1. Clear browser cache
2. Check that you're using a supported browser
3. Verify Home Assistant is up to date

## 🛠️ Development

### Prerequisites

- Node.js 16 or higher
- npm or yarn

### Setup

```bash
npm install
```

### Development Mode

```bash
npm run dev
```

This starts webpack in watch mode for live development.

### Building

```bash
npm run build
```

Outputs optimized JavaScript to `dist/alarm-clock-card.js`.

### Linting

```bash
npm run lint
```

### Formatting

```bash
npm run format
```

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

The card uses modern web standards including:
- ES2020 JavaScript
- CSS Custom Properties
- Web Components
- Lit framework

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 Acknowledgments

- [Alarm Clock Integration](https://github.com/siegeld/alarm-clock) - The integration this card requires
- Home Assistant community for inspiration and support
- HACS for making installation seamless

---

**⭐ If you like this card, please star the repository!**

[hacs]: https://github.com/hacs/integration
[hacsbadge]: https://img.shields.io/badge/HACS-Custom-orange.svg
[releases-shield]: https://img.shields.io/github/release/siegeld-username/alarm-clock-card.svg
[releases]: https://github.com/siegeld/alarm-clock-card/releases
[license-shield]: https://img.shields.io/github/license/siegeld/alarm-clock-card.svg
