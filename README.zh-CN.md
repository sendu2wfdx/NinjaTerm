# NinjaTerm 简体中文社区版

这是 [NinjaTerm](https://github.com/gbmhunter/NinjaTerm) 的简体中文分支，面向串口、TCP/UDP、蓝牙和 SEGGER RTT 等嵌入式调试场景。

## 主要变化

- 默认使用简体中文界面；左侧工具栏的“翻译”按钮可随时切换中英文。
- 保留终端数据、日志正文和代码块的原始内容，不会误翻译 RT-Thread MSH 输出或设备日志。
- 应用逻辑、配置格式和测试标识均保持与上游兼容，便于持续同步上游版本。
- Windows 安装包使用独立的应用标识，可与上游英文版并存。

## 安装

前往本仓库的 [Releases](https://github.com/sendu2wfdx/NinjaTerm/releases) 下载最新版 Windows 安装包。

## 开发与构建

建议使用 Node.js 22：

```powershell
npm install
npm run test:unit
npm run build
npm run dist:win
```

安装包生成在 `dist` 目录。

## 汉化实现说明

上游目前没有内建国际化框架。本分支将翻译集中维护在 `src/renderer/src/i18n/zhCN.ts`，通过精确匹配界面文本实现汉化，并明确排除终端行、`pre` 和 `code` 内容。这样可以减少对上游业务代码的侵入，也便于以后合并上游更新。

如果发现漏译、误译或界面布局问题，欢迎在本仓库提交 Issue。

## 上游与许可证

- 上游项目：[gbmhunter/NinjaTerm](https://github.com/gbmhunter/NinjaTerm)
- 中文分支：[sendu2wfdx/NinjaTerm](https://github.com/sendu2wfdx/NinjaTerm)
- 许可证：[GNU GPL v3](LICENSE)

本项目是社区维护的中文分支，与上游作者无隶属关系。
