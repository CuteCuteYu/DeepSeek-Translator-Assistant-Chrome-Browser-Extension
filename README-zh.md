# DeepSeek 翻译助手 Chrome 浏览器扩展

一个简单高效的 Chrome 扩展，使用 DeepSeek API 在浏览器中直接进行中英文文本翻译。

## 功能特点

- **快速翻译**：只需点击一下即可在中英文之间翻译文本
- **友好的用户界面**：简洁直观的弹出式设计，易于使用
- **API Key 集成**：将您的 DeepSeek API Key 安全存储在浏览器 localStorage 中
- **键盘快捷键**：使用 Ctrl+Enter（或 Mac 上的 Cmd+Enter）快速翻译文本
- **加载指示器**：翻译过程中提供视觉反馈
- **响应式设计**：适应不同屏幕尺寸

## 安装步骤

1. **下载或克隆仓库**
   ```
   git clone https://github.com/yourusername/DeepSeek-Translator-Assistant-Chrome-Browser-Extension.git
   ```

2. **打开 Chrome 扩展页面**
   - 打开 Google Chrome 浏览器
   - 访问 `chrome://extensions/`
   - 启用「开发者模式」（右上角的切换开关）

3. **加载已解压的扩展程序**
   - 点击「加载已解压的扩展程序」
   - 导航到您克隆或下载扩展的目录
   - 选择该文件夹并点击「打开」

4. **扩展安装完成**
   - DeepSeek 翻译助手图标现在应该出现在您的 Chrome 工具栏中

## 使用说明

1. **点击扩展图标**：在 Chrome 工具栏中点击扩展图标打开弹出窗口
2. **设置您的 API Key**（首次使用）：
   - 点击「设置API Key」按钮
   - 在输入框中输入您的 DeepSeek API Key
   - 点击「保存」或按 Enter 键存储您的 API Key
   - API Key 将安全存储在浏览器的 localStorage 中

3. **翻译文本**：
   - 在输入文本框中输入中文文本
   - 点击「翻译」按钮或按 Ctrl+Enter（Mac 上为 Cmd+Enter）
   - 翻译后的英文文本将显示在输出文本框中

## 项目结构

```
DeepSeek-Translator-Assistant-Chrome-Browser-Extension/
├── icons/                  # 扩展图标
│   └── icon.svg            # 主要扩展图标
├── .gitignore             # Git 忽略文件
├── LICENSE                # 许可证文件
├── README.md              # 英文 README 文件
├── README-zh.md           # 中文 README 文件
├── manifest.json          # 扩展配置
├── popup.html             # 弹出窗口 UI HTML
└── popup.js               # 弹出窗口功能和 API 集成
```

### 关键文件

- **[manifest.json](manifest.json)**：包含扩展元数据、权限和配置
- **[popup.html](popup.html)**：定义扩展的弹出界面
- **[popup.js](popup.js)**：实现翻译逻辑和 API 通信
- **[icons/icon.svg](icons/icon.svg)**：Chrome 工具栏中使用的扩展图标

## 浏览器兼容性

- **Google Chrome**：88 版本或更高（需要 Manifest V3 支持）
- **Microsoft Edge**：88 版本或更高
- **其他基于 Chromium 的浏览器**：可能兼容，但未经过正式测试

## API Key

要使用此扩展，您需要一个 DeepSeek API Key。您可以从 [DeepSeek 开发者平台](https://platform.deepseek.com/) 获取。

### 安全说明

您的 API Key 存储在浏览器的 localStorage 中，仅在发出翻译请求时发送到 DeepSeek API 服务器。扩展不会将您的 API Key 传输到任何其他第三方服务。

## 键盘快捷键

- **Ctrl+Enter (Windows/Linux)** 或 **Cmd+Enter (Mac)**：将输入文本翻译为输出
- **Enter（在 API Key 输入框中）**：保存 API Key

## 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENSE](LICENSE) 文件。

## 贡献

欢迎贡献！请随时提交 Pull Request。

## 支持

如果您遇到任何问题或有疑问，请在项目的 GitHub 仓库上打开一个 issue。