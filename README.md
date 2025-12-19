# DeepSeek Translator Assistant Chrome Browser Extension

A simple and efficient Chrome extension that uses DeepSeek API to translate text between Chinese and English directly from your browser.

## Features

- **Quick Translation**: Translate text between Chinese and English with just a click
- **User-friendly Interface**: Clean and intuitive popup design for easy use
- **API Key Integration**: Securely store your DeepSeek API Key in browser localStorage
- **Keyboard Shortcuts**: Use Ctrl+Enter (or Cmd+Enter on Mac) to quickly translate text
- **Loading Indicators**: Visual feedback while translations are in progress
- **Responsive Design**: Adapts to different screen sizes

## Installation

1. **Download or Clone the Repository**
   ```
   git clone https://github.com/yourusername/DeepSeek-Translator-Assistant-Chrome-Browser-Extension.git
   ```

2. **Open Chrome Extensions Page**
   - Open Google Chrome
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (toggle switch in the top right corner)

3. **Load Unpacked Extension**
   - Click "Load unpacked"
   - Navigate to the directory where you cloned or downloaded the extension
   - Select the folder and click "Open"

4. **Extension Installed**
   - The DeepSeek Translator Assistant icon should now appear in your Chrome toolbar

## Usage

1. **Click on the Extension Icon** in your Chrome toolbar to open the popup
2. **Set Up Your API Key** (first-time use):
   - Click "设置API Key" (Set API Key) button
   - Enter your DeepSeek API Key in the input field
   - Click "保存" (Save) or press Enter to store your API Key
   - The API Key will be securely stored in your browser's localStorage

3. **Translate Text**:
   - Enter Chinese text in the input textarea
   - Click "翻译" (Translate) button or press Ctrl+Enter (Cmd+Enter on Mac)
   - The translated English text will appear in the output textarea

## Project Structure

```
DeepSeek-Translator-Assistant-Chrome-Browser-Extension/
├── icons/                  # Extension icons
│   └── icon.svg            # Main extension icon
├── .gitignore             # Git ignore file
├── LICENSE                # License file
├── README.md              # English README file
├── manifest.json          # Extension configuration
├── popup.html             # Popup UI HTML
└── popup.js               # Popup functionality and API integration
```

### Key Files

- **[manifest.json](manifest.json)**: Contains extension metadata, permissions, and configuration
- **[popup.html](popup.html)**: Defines the extension's popup interface
- **[popup.js](popup.js)**: Implements the translation logic and API communication
- **[icons/icon.svg](icons/icon.svg)**: Extension icon used in Chrome toolbar

## Browser Compatibility

- **Google Chrome**: Version 88 or later (requires Manifest V3 support)
- **Microsoft Edge**: Version 88 or later
- **Other Chromium-based browsers**: May work, but not officially tested

## API Key

To use this extension, you need a DeepSeek API Key. You can obtain one from the [DeepSeek Developer Portal](https://platform.deepseek.com/).

### Security Note

Your API Key is stored locally in your browser's localStorage and is only sent to the DeepSeek API servers when making translation requests. The extension does not transmit your API Key to any other third-party services.

## Keyboard Shortcuts

- **Ctrl+Enter (Windows/Linux)** or **Cmd+Enter (Mac)**: Translate text from input to output
- **Enter (in API Key input)**: Save API Key

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue on the project's GitHub repository.