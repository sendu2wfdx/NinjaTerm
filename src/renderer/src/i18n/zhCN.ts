/**
 * Simplified-Chinese UI overlay for the NinjaTerm desktop application.
 *
 * Upstream currently has no i18n abstraction.  Keeping the translations in
 * one exact-string table makes this fork inexpensive to rebase: application
 * logic, test IDs and persisted settings remain untouched.  Terminal rows,
 * code blocks and preformatted diagnostic output are deliberately excluded.
 */

export type UiLanguage = 'zh-CN' | 'en';

const STORAGE_KEY = 'ninjaterm.uiLanguage';

const zhCN: Record<string, string> = {
  // Main navigation and sessions
  'Show the terminal': '显示终端',
  'Show settings.': '显示设置',
  'Show the graphing pane.': '显示图表',
  'Show the logging pane.': '显示日志',
  'Open the NinjaTerm manual in your browser.': '在浏览器中打开 NinjaTerm 使用手册',
  'Session:': '会话：',
  'New session': '新建会话',
  'Rename': '重命名',
  'Duplicate': '复制',
  'Close': '关闭',
  'Cancel': '取消',
  'Confirm': '确认',
  'Save': '保存',
  'Delete': '删除',
  'Add': '添加',
  'Edit': '编辑',
  'Apply': '应用',
  'Reset': '重置',
  'Browse...': '浏览…',
  'Locate': '自动查找',
  'Open': '打开',
  'Connect': '连接',
  'Disconnect': '断开',
  'Connected': '已连接',
  'Disconnected': '已断开',
  'Clear': '清空',
  'Copy': '复制',
  'Send': '发送',
  'Find': '查找',

  // Settings navigation
  'Get started': '快速开始',
  'Communication': '通信',
  'Connection': '连接',
  'TX Settings': '发送设置',
  'RX Settings': '接收设置',
  'Appearance': '外观',
  'Display': '显示',
  'Rules': '规则',
  'Application': '应用程序',
  'General': '常规',

  // Connection settings
  'Connection Type': '连接类型',
  'Available Serial Ports': '可用串口',
  'Select': '选择',
  'Port Path': '端口',
  'Friendly Name': '设备名称',
  'Manufacturer': '制造商',
  'Vendor ID': '厂商 ID',
  'Product ID': '产品 ID',
  'Serial Number': '序列号',
  'Location ID': '位置 ID',
  'PNP ID': '即插即用 ID',
  'RESCAN': '重新扫描',
  'Status': '状态',
  'Status:': '状态：',
  'CLOSED': '已关闭',
  'CLOSED_BUT_WILL_REOPEN': '已关闭（等待重连）',
  'OPENED': '已打开',
  'Serial Port': '串口',
  'Socket': '网络套接字',
  'Bluetooth LE': '低功耗蓝牙',
  'Bluetooth': '低功耗蓝牙',
  'Segger RTT': 'SEGGER RTT',
  'Segger RTT Settings': 'SEGGER RTT 设置',
  'Serial Port Settings': '串口设置',
  'Socket Settings': '网络套接字设置',
  'Bluetooth LE Settings': '低功耗蓝牙设置',
  'General Settings': '通用设置',
  'Target Device': '目标器件',
  'Target Interface': '目标接口',
  'Interface': '接口',
  'Speed (kHz)': '速度（kHz）',
  'RTT Channel': 'RTT 通道',
  'J-Link Commander': 'J-Link Commander',
  'J-Link Commander Path': 'J-Link Commander 路径',
  'Recent': '最近使用',
  'Common devices': '常用器件',
  'Diagnostic Log': '诊断日志',
  'Clear Log': '清空日志',
  'Host': '主机',
  'Port': '端口',
  'Protocol': '协议',
  'TCP client': 'TCP 客户端',
  'TCP server': 'TCP 服务器',
  'UDP': 'UDP',
  'Baud Rate': '波特率',
  'Baud rate': '波特率',
  'Data Bits': '数据位',
  'Num. data bits': '数据位数',
  'Stop Bits': '停止位',
  'Stop bits': '停止位',
  'Parity': '校验位',
  'none': '无',
  'Flow Control': '流控制',
  'Flow Control Settings': '流控制设置',
  'Let driver/OS manage RTS/CTS signals': '由驱动程序/系统管理 RTS/CTS 信号',
  'XON software flow control': 'XON 软件流控制',
  'XOFF software flow control': 'XOFF 软件流控制',
  'XANY (any character restarts output)': 'XANY（任意字符恢复发送）',
  'Drop DTR on close (HUPCL)': '关闭端口时释放 DTR（HUPCL）',
  'None': '无',
  'Even': '偶校验',
  'Odd': '奇校验',
  'Allow settings changes when open (will reconnect)': '连接期间允许修改设置（将自动重连）',
  'Allow settings changes when open (reconnect)': '连接期间允许修改设置（将自动重连）',
  'Open connection and go to the terminal as soon as port is selected': '选择端口后立即连接并进入终端',
  'Connect and go to the terminal automatically': '自动连接并进入终端',
  'Resume connection on app startup': '应用启动时恢复连接',
  'Reopen connection when available if it unexpectedly closes': '连接意外中断后自动重连',

  // Terminal and right drawer
  'Quick Connection Settings': '快速连接设置',
  'Quick Port Settings': '快速端口设置',
  'Macros': '宏',
  'Filters': '过滤器',
  'Add filter': '添加过滤器',
  'Pattern': '匹配内容',
  'Regular expression': '正则表达式',
  'Case sensitive': '区分大小写',
  'Scroll lock': '滚动锁定',
  'Copy all': '复制全部',
  'Show/hide side panel': '显示或隐藏侧边栏',
  'HIDE SIDE PANEL': '隐藏侧边栏',
  'SHOW SIDE PANEL': '显示侧边栏',
  'MORE SETTINGS': '更多设置',
  'Donate': '赞助',
  'Request port access': '请求端口访问权限',
  'Send break': '发送 Break',
  'ASCII': 'ASCII',
  'Echo ON': '回显：开',
  'Echo OFF': '回显：关',
  'Logging ON': '日志：开',
  'Logging OFF': '日志：关',
  'Graphing ON': '绘图：开',
  'Graphing OFF': '绘图：关',
  'Timestamps ON': '时间戳：开',
  'Timestamps OFF': '时间戳：关',
  'MCP ON': 'MCP：开',
  'MCP OFF': 'MCP：关',
  'Port NOT CONN': '串口未连接',
  'RTT NOT CONN': 'RTT 未连接',
  'RTT NOT CONN (will reopen)': 'RTT 未连接（等待重连）',
  'RTT CONN': 'RTT 已连接',
  'RTT UNKNOWN': 'RTT 状态未知',
  'HEX': '十六进制',
  'Data': '数据',
  'Name': '名称',
  'More settings': '更多设置',
  'Send on connect': '连接时发送',
  'Send on RX match': '接收匹配时发送',
  'Send on interval': '定时发送',
  'Interval (ms)': '间隔（ms）',
  'Process escape characters': '解析转义字符',
  'Settings view': '设置页面',
  'Controls how to display the TX and RX data. Different use cases require different view configurations.': '设置发送和接收数据的显示方式，不同使用场景适合不同的布局。',
  'Separate TX/RX terminals: TX and RX data are kept in separate panes. Useful for when you have a lot of incoming basic RX data and what to still see the data you are sending.': '分离 TX/RX 终端：发送和接收数据分别显示，适合接收数据量较大且仍需观察发送内容的场景。',
  'The font size (in pixels) of characters displayed in the terminal.': '终端字符的字体大小（像素）。',
  'Other Quick Settings': '其他快捷设置',
  'For more options, go to the': '更多选项请前往',
  'Settings view.': '设置页面。',
  'Data View Configuration': '数据显示方式',
  'Single terminal': '单终端',
  'SEND BREAK': '发送 BREAK',
  'Char Size': '字符大小',
  'Local TX Echo': '本地发送回显',
  'Single terminal: TX and RX data is combined in the same pane. Useful for terminal style applications when escape codes are used.': '单终端：发送和接收数据显示在同一窗格中，适合使用转义序列的终端类应用。',

  // Terminal filters
  'Filters (match any)': '过滤器（任一匹配）',
  'No filters. Add one to start filtering the terminal.': '尚无过滤器，添加一个即可开始过滤终端内容。',
  'Filter pattern': '过滤内容',
  'Enable/disable this filter.': '启用或禁用此过滤器。',
  'Match as a regular expression.': '使用正则表达式匹配。',
  'Match case-sensitively.': '区分大小写。',
  'Remove this filter.': '删除此过滤器。',
  'Filter the rows shown in the terminal. A row is shown if it matches any enabled filter (logical OR). Each filter can be a plain substring or a regular expression, with optional case-sensitivity.': '过滤终端中显示的行。只要一行匹配任一已启用过滤器（逻辑或）便会显示。过滤器可使用普通子串或正则表达式，并可选择是否区分大小写。',
  'The row the cursor is on is always shown.': '光标所在行始终显示。',
  'Disable or remove all filters to show everything.': '禁用或删除全部过滤器即可显示所有内容。',

  // TX/RX settings
  'TX Mode': '发送模式',
  'How typed data is sent:': '键入数据的发送方式：',
  'Character (send as you type)': '字符（键入时立即发送）',
  'Line (send on Enter, as one write)': '整行（按回车后一次性发送）',
  'Open Manual': '打开手册',
  'Enter': '回车',
  'When enter is pressed:': '按下回车键时：',
  'Send LF (0x0A)': '发送 LF（0x0A）',
  'Send CR (0x0D)': '发送 CR（0x0D）',
  'Send CRLF (0x0D 0x0A)': '发送 CRLF（0x0D 0x0A）',
  'Send a break signal': '发送 Break 信号',
  'Backspace': '退格',
  'When backspace is pressed:': '按下退格键时：',
  'Send backspace (0x08)': '发送退格符（0x08）',
  'Send delete (0x7F)': '发送删除符（0x7F）',
  'When delete is pressed:': '按下 Delete 键时：',
  'Send VT sequence ( ESC [ 3 ~ )': '发送 VT 序列（ESC [ 3 ~）',
  'Meta Keys': '组合键',
  'Send 0x01-0x1A when Ctrl+A thru Ctrl+Z is pressed': '按下 Ctrl+A 至 Ctrl+Z 时发送 0x01–0x1A',
  'Send [ESC] + <char> when Alt-<char> is pressed (e.g. Alt-A sends 0x1B 0x41).': '按下 Alt+字符时发送 [ESC] + 字符（例如 Alt+A 发送 0x1B 0x41）。',
  'Use Ctrl+C/V for copy/paste (Ctrl+C copies if text selected, Ctrl+V always pastes, will override sending 0x01-0x1A)': '使用 Ctrl+C/V 复制和粘贴（选中文字时 Ctrl+C 复制，Ctrl+V 始终粘贴；会覆盖 0x01–0x1A 的发送）',
  'Use Ctrl+F to open Find in scrollback (will override sending 0x01-0x1A)': '使用 Ctrl+F 在回滚内容中查找（会覆盖 0x01–0x1A 的发送）',
  'Character mode': '字符模式',
  'Line mode': '行模式',
  'Enter Key': '回车键',
  'Backspace Key': '退格键',
  'Delete Key': '删除键',
  'Local Echo': '本地回显',
  'New Line': '换行',
  'Character Encoding': '字符编码',
  'Data Type': '数据类型',
  'How to interpret RX data:': '接收数据解析方式：',
  'Text': '文本',
  'Number': '数值',
  'Number (e.g. hex, uint8, int16, ...)': '数值（如 hex、uint8、int16 等）',
  'Number Settings': '数值设置',
  'Number Type': '数值类型',
  'Endianness': '字节序',
  'Little Endian': '小端序',
  'Big Endian': '大端序',
  'Separator Between Values': '数值分隔符',
  'Prevent values from wrapping across rows.': '禁止数值跨行换行。',
  'Insert new line on specific value.': '遇到指定数值时换行。',
  'Value to insert new line on': '触发换行的数值',
  'Insert new line before or after value?': '在该数值之前还是之后换行？',
  'Before': '之前',
  'After': '应用后',
  'Padding Settings': '填充设置',
  'Pad values': '填充数值',
  'Padding character:': '填充字符：',
  "0's": '数字 0',
  '<whitespace>': '<空格>',
  'Num. of padding chars': '填充字符数',
  'Hex Specific Settings': '十六进制专用设置',
  'Num. of bytes per hex number': '每个十六进制数的字节数',
  'Upper/lowercase hex:': '十六进制字母大小写：',
  'Uppercase': '大写',
  'Lowercase': '小写',
  'Prefix hex values with "0x".': '为十六进制数添加“0x”前缀。',
  'Float Specific Settings': '浮点数专用设置',
  'String Conversion Method': '字符串转换方式',
  'Float num. of decimal places': '浮点数小数位数',
  'Timestamp Settings': '时间戳设置',
  'Add timestamps to the data.': '为数据添加时间戳。',
  'Timestamp Format': '时间戳格式',
  'Custom Format': '自定义格式',
  'Custom Timestamp Format': '自定义时间戳格式',
  'ISO8601, no timezone (e.g. "2025-06-04T12:04:45.832")': 'ISO8601，不含时区（例如“2025-06-04T12:04:45.832”）',
  'ISO8601, with timezone (e.g. "2025-06-04T12:04:45.832+12:00")': 'ISO8601，含时区（例如“2025-06-04T12:04:45.832+12:00”）',
  'Local Time (e.g. "2025-06-04 12:04:45.832")': '本地时间（例如“2025-06-04 12:04:45.832”）',
  'Unix Time, in seconds (e.g. "1678886400")': 'Unix 时间（秒，例如“1678886400”）',
  'Unix Time, seconds + milliseconds (e.g. "1678886400.123")': 'Unix 时间（秒和毫秒，例如“1678886400.123”）',
  'The custom string must be a valid': '自定义字符串必须是有效的',
  'Moment.js format string': 'Moment.js 格式字符串',
  '. For example:': '。例如：',
  '"YYYY-MM-DDTHH:mm:ssZ" for the ISO8601 format (e.g. "2025-06-04T11:18:50+12:00")': '“YYYY-MM-DDTHH:mm:ssZ”表示 ISO8601 格式（例如“2025-06-04T11:18:50+12:00”）',
  '"YYYY-MM-DD HH:mm:ss.SSS" for local time in milliseconds without time zone (e.g. "2025-06-04 11:18:50.833")': '“YYYY-MM-DD HH:mm:ss.SSS”表示不含时区、精确到毫秒的本地时间（例如“2025-06-04 11:18:50.833”）',
  '"X" for Unix time in seconds (e.g. "1748992730")': '“X”表示 Unix 秒时间戳（例如“1748992730”）',
  '"x" for Unix time in milliseconds (e.g. "1748992730833")': '“x”表示 Unix 毫秒时间戳（例如“1748992730833”）',
  '"X.SSS" for Unix time in seconds with millisecond precision (e.g. "1748992730.833")': '“X.SSS”表示精确到毫秒的 Unix 秒时间戳（例如“1748992730.833”）',
  'Any other format string for any other format': '也可使用其他 Moment.js 格式字符串',
  'Other RX Settings': '其他接收设置',
  'Show a warning when break signals are received.': '收到 Break 信号时显示警告。',
  'ASCII Control Characters': 'ASCII 控制字符',
  'ANSI Escape Codes': 'ANSI 转义序列',
  'Enable ANSI Escape Code Parsing': '启用 ANSI 转义序列解析',
  'Enable ANSI escape code parsing': '启用 ANSI 转义序列解析',
  'Max. Escape Code Length': '最大转义序列长度',
  'Show Unknown Escape Codes': '显示未知转义序列',
  'Show unknown escape codes': '显示未知转义序列',
  'Echo': '回显',
  'New Lines': '换行符',
  'When a \\n byte is received:': '收到 \\n 字节时：',
  "Don't move the cursor": '不移动光标',
  'Move cursor down one line (new line)': '光标下移一行（换行）',
  'Move cursor to the start of line and then down one line.': '光标移到行首，然后下移一行。',
  'Swallow \\n bytes': '丢弃 \\n 字节',
  'Carriage Returns': '回车符',
  'When a \\r byte is received:': '收到 \\r 字节时：',
  'Move cursor to the start of the current line': '光标移到当前行行首',
  'Move cursor to the start and then down one line.': '光标移到行首，然后下移一行。',
  'Swallow \\r bytes': '丢弃 \\r 字节',
  'When a backspace (0x08, \\b) or DEL (0x7F) byte is received:': '收到退格符（0x08、\\b）或 DEL（0x7F）时：',
  "Don't interpret (display as a glyph)": '不解析（显示为符号）',
  'Move the cursor one column to the left': '光标左移一列',
  'Move the cursor one column to the left and delete the character': '光标左移一列并删除字符',
  'Form Feed': '换页符',
  'When a form feed (0x0C, \\f, Ctrl-L) byte is received:': '收到换页符（0x0C、\\f、Ctrl+L）时：',
  'Clear the screen (keep scrollback)': '清屏（保留回滚内容）',
  'Clear the screen and scrollback': '清屏并清除回滚内容',
  'Interpret received data as:': '接收数据的字符编码：',
  'ASCII only (show 0x80+ as glyphs)': '仅 ASCII（0x80 以上显示为符号）',
  'CP437 (DOS)': 'CP437（DOS）',
  'Non-visible Character Display': '不可见字符显示',
  'For all received bytes in the range 0x00-0xFF that are not visible ASCII characters AND that are not swallowed above:': '对于 0x00–0xFF 范围内所有不可见、且未在上方被丢弃的 ASCII 字节：',
  'Swallow': '丢弃',
  'Convert ASCII control codes to control code glyphs, and all others to hex code glyphs': 'ASCII 控制码显示为控制符号，其余显示为十六进制符号',
  'Convert all to hex code glyphs': '全部显示为十六进制符号',
  'Add timestamps': '添加时间戳',
  'Timestamp format': '时间戳格式',
  'Line ending': '行结束符',
  'Carriage Return (CR)': '回车（CR）',
  'Line Feed (LF)': '换行（LF）',
  'CR + LF': 'CR + LF',

  // Display, rules and presets
  'Terminal Font': '终端字体',
  'NinjaTerm (default)': 'NinjaTerm（默认）',
  'Font Size': '字体大小',
  'Vertical Row Padding': '行垂直间距',
  'Terminal Width': '终端宽度',
  'Terminal Height Mode': '终端高度模式',
  'Auto': '自动',
  'Terminal Height': '终端高度',
  'Tab Stop Width': '制表位宽度',
  'Scrollback Buffer': '回滚缓冲区',
  'Scrollback Buffer Size': '回滚缓冲区大小',
  'Auto Scroll Lock on TX': '发送时自动锁定滚动',
  'Tooltips': '工具提示',
  'Enable Tooltips': '启用工具提示',
  'Tooltip Delay': '工具提示延迟',
  'px': '像素',
  'chars': '字符',
  'spaces': '空格',
  'rows': '行',
  'Theme': '主题',
  'Dark': '深色',
  'Light': '浅色',
  'Tooltip delay': '工具提示延迟',
  'Highlight Rules': '高亮规则',
  'Add Rule': '添加规则',
  'Add rule': '添加规则',
  'ADD RULE': '添加规则',
  'Rules paint the background of matching characters in the terminal scrollback and can optionally play a sound when a matching line completes. Rules are evaluated per finalised row.': '规则会为终端回滚内容中匹配的字符设置背景色，并可在匹配行完成时播放声音。每一完整行都会执行规则匹配。',
  'On': '启用',
  'Color': '颜色',
  'Actions': '操作',
  'No rules yet. Click': '尚无规则。点击',
  'to create one.': '即可创建。',
  '(no name)': '（未命名）',
  '(empty)': '（空）',
  'Warning': '警告',
  'Error': '错误',
  'Buzzer': '蜂鸣器',
  'Ding': '提示音',
  'Background Color': '背景颜色',
  'TX Text Color': '发送文字颜色',
  'RX Text Color': '接收文字颜色',
  'SET RX COLOR EQUAL TO TX': '将接收文字颜色设为与发送相同',
  'Color Settings': '颜色设置',
  'The default colours for the terminal background, TX text, and RX text. If ANSI escape code parsing is enabled, these default colours may be overridden by data.': '设置终端背景、发送文字和接收文字的默认颜色。启用 ANSI 转义序列解析后，数据中的颜色控制可能覆盖这些默认值。',
  'Click on the coloured square to change the colour.': '点击颜色方块即可修改颜色。',
  'Enabled': '启用',
  'Sound': '声音',
  'Matched text only': '仅匹配文字',
  'Entire line': '整行',
  'Built-in presets': '内置预设',
  'Presets': '预设',
  'Save your current settings as a preset, or apply one of the built-in presets. When saving a preset, you can choose to only save certain settings.': '将当前设置保存为预设，或应用一个内置预设。保存时可以选择只包含部分设置。',
  'Search presets': '搜索预设',
  'Save current settings as preset...': '将当前设置保存为预设…',
  'Your presets': '我的预设',
  'Built in': '内置预设',
  "You haven't saved any presets yet.": '尚未保存任何预设。',
  'No saved presets match your search.': '没有与搜索条件匹配的已保存预设。',
  'No built-in presets match your search.': '没有与搜索条件匹配的内置预设。',
  'Undo last preset': '撤销上次预设操作',
  'Update': '更新',
  'Everything': '全部设置',
  'Connection settings': '连接设置',
  'RX data handling': '接收数据处理',
  'TX / key behaviour': '发送与按键行为',
  'DOS text-mode (CP437)': 'DOS 文本模式（CP437）',
  'Full-screen text-mode UIs that draw frames with box-drawing characters.': '使用制表字符绘制边框的全屏文本界面。',
  'Show every received byte as a two-digit hex value.': '将每个接收字节显示为两位十六进制数。',
  'Interactive shell over UART, with coloured log levels and line editing.': '通过 UART 使用交互式命令行，支持彩色日志级别和行编辑。',
  'Line mode (SCPI instruments)': '行模式（SCPI 仪器）',
  'Compose a whole command and send it as a single write.': '编辑完整命令后一次性发送。',
  'Long-running capture of human-readable output, with timestamps.': '长时间采集可读文本输出，并添加时间戳。',
  'NinjaTerm defaults': 'NinjaTerm 默认设置',
  'Put the RX, TX and display settings back to how they ship.': '将接收、发送和显示设置恢复为初始默认值。',
  'Replace this preset with your current settings.': '用当前设置更新此预设。',
  'Delete this preset.': '删除此预设。',
  'Save your current settings as a new preset, choosing what it should cover.': '将当前设置保存为新预设，并选择要包含的设置。',
  'Restore the settings as they were before the last preset was applied.': '恢复到应用上一个预设之前的设置。',
  'Saved presets': '已保存预设',
  'Save current settings as preset': '将当前设置保存为预设',
  'Preset name': '预设名称',
  'Apply preset': '应用预设',
  'Delete preset': '删除预设',
  'Zephyr / RTOS shell': 'Zephyr / RTOS 命令行',
  'Plain-text log capture': '纯文本日志采集',
  'Hex dump': '十六进制转储',
  'Save current settings as a preset': '将当前设置保存为预设',
  'That name is used by a built-in preset.': '该名称已被内置预设使用。',
  'What should this preset cover?': '该预设应包含哪些设置？',
  'Select all': '全选',
  'Select none': '全不选',
  'Pick at least one thing to save, otherwise applying this preset would do nothing.': '请至少选择一项要保存的设置，否则应用该预设不会产生任何效果。',
  'This preset matches your current settings, so there is nothing to change.': '该预设与当前设置一致，无需更改。',
  'Setting': '设置项',
  'Now': '当前值',
  'All other settings are left unchanged, including your connection settings, colours and logging. You can undo this straight afterwards.': '其他设置均保持不变，包括连接设置、颜色和日志设置；应用后可立即撤销。',
  'The connection type, address (e.g. serial port ID, BLE device or socket address), and connection parameters.': '连接类型、地址（例如串口 ID、BLE 设备或套接字地址）以及连接参数。',
  'How received bytes are decoded and displayed.': '接收字节的解码和显示方式。',
  'What the Enter, Backspace and Delete keys send.': 'Enter、Backspace 和 Delete 键发送的内容。',
  'Font, terminal size, colours and scrollback.': '字体、终端尺寸、颜色和回滚缓冲区。',
  'What gets logged and how files are named.': '记录哪些内容以及日志文件的命名方式。',
  'Patterns that colour matching text or play a sound.': '为匹配文字着色或播放声音的规则。',
  'The macros in the right drawer.': '右侧抽屉中的宏。',
  'Filters applied to the terminal view.': '应用于终端视图的过滤器。',
  'How values are parsed out of the data stream and plotted.': '如何从数据流解析数值并绘制图表。',
  'Copy and paste behaviour.': '复制与粘贴行为。',
  'Drawer layout': '抽屉布局',
  'Right drawer width and which sections are expanded.': '右侧抽屉宽度及各区域的展开状态。',

  // Logging and graphing
  'Logging': '日志记录',
  'LOGGING': '日志记录',
  'Directory and Permissions': '目录与权限',
  'Select log directory': '选择日志目录',
  'Directory status:': '目录状态：',
  'NOT SELECTED': '未选择',
  'SELECTED': '已选择',
  'Selected directory:': '已选目录：',
  'File Naming': '文件命名',
  'What to name the file:': '文件命名方式：',
  'Save in the form "NinjaTerm Logs - <DATETIME>.txt". The current local datetime when logging is started will be used in the form "YYYY-MM-DD HH-MM-SS".': '保存为“NinjaTerm Logs - <日期时间>.txt”；开始记录时的本地时间采用“YYYY-MM-DD HH-MM-SS”格式。',
  'Names the file with the current datetime at the moment logging is started.': '以开始记录时的当前日期和时间命名文件。',
  'Use a custom filename as defined below.': '使用下方定义的自定义文件名。',
  'Custom File Name': '自定义文件名',
  'Existing File Behavior': '已有文件处理方式',
  'If file already exists when logging is started:': '开始记录时如果文件已存在：',
  'Appends data to the end of the existing file.': '将数据追加到已有文件末尾。',
  'Overwrites an existing file with the same name.': '覆盖同名已有文件。',
  'What To Log?': '记录哪些数据？',
  'Raw TX data': '原始发送数据',
  'Raw RX data': '原始接收数据',
  'Log the raw bytes being received from the serial port to the log file.': '将串口接收的原始字节写入日志文件。',
  'Log the raw bytes being sent out the serial port to the log file.': '将串口发送的原始字节写入日志文件。',
  'Enabling and Status': '启用与状态',
  'Enable Logging': '启用日志记录',
  'Writing to file named:': '正在写入文件：',
  'Amount of data written:': '已写入数据量：',
  'File size (approx.):': '文件大小（约）：',
  'n/a': '无',
  'The log file is written to once per second, so your data should still be there even if something unexpected happens (e.g. computer battery runs flat, Windows decides it\'s a good time to update).': '日志文件每秒写入一次，因此即使发生意外（例如电脑断电或 Windows 突然更新），绝大部分数据仍会保留。',
  'Start Logging': '开始记录',
  'Stop Logging': '停止记录',
  'Log Directory': '日志目录',
  'File Name': '文件名',
  'Existing File': '已有文件',
  'Append': '追加',
  'Overwrite': '覆盖',
  'Include RX data': '包含接收数据',
  'Include TX data': '包含发送数据',
  'Graphing': '图表',
  'Enable Graphing': '启用绘图',
  'Data:': '数据：',
  'Plots:': '图表：',
  'Detection Mode': '检测模式',
  'Basic Prefix Mode': '基础前缀模式',
  'Advanced Cmd Mode': '高级命令模式',
  'Processing Trigger': '处理触发符',
  'Custom': '自定义',
  'Max. Buffer Size': '最大缓冲区大小',
  'Num. bytes in buffer:': '缓冲区字节数：',
  'Max. Num. Data Points': '最大数据点数',
  'X Variable Source': 'X 变量来源',
  'Received Time': '接收时间',
  'Counter': '计数器',
  'In Data': '来自数据',
  'X Variable Prefix': 'X 变量前缀',
  'Y Variable Prefix': 'Y 变量前缀',
  'Multiple Values Per Buffer': '每个缓冲区解析多个值',
  'Value Separator': '数值分隔符',
  'Custom Separator': '自定义分隔符',
  'Clear Plot On New Values': '收到新数据时清空图表',
  'X Axis Range Mode': 'X 轴范围模式',
  'Y Axis Range Mode': 'Y 轴范围模式',
  'Fixed': '固定',
  'X-Axis Range Min.': 'X 轴范围最小值',
  'X-Axis Range Max.': 'X 轴范围最大值',
  'Y-Axis Range Min.': 'Y 轴范围最小值',
  'Y-Axis Range Max.': 'Y 轴范围最大值',
  'Update X Range From Data': '根据数据更新 X 轴范围',
  'Update Y Range From Data': '根据数据更新 Y 轴范围',
  'Choose how graphing data is detected and parsed. Basic Prefix Mode uses processing triggers and y= prefix (legacy). Advanced Cmd Mode uses #PLOT: commands. See the online NinjaTerm manual for more details.': '选择绘图数据的检测与解析方式。基础前缀模式使用处理触发符和 y= 前缀（兼容模式）；高级命令模式使用 #PLOT: 命令。详情请参阅 NinjaTerm 在线手册。',
  'Open the NinjaTerm manual in your browser. This contains information on the graphing system and how to use it.': '在浏览器中打开 NinjaTerm 手册，其中包含绘图系统的用法说明。',
  'The character sequence that triggers processing of accumulated command data. Commands are parsed when this trigger is received.': '触发累计命令数据处理的字符序列。收到该序列时解析命令。',
  'The character sequence which triggers processing for data points from data that has accumulated in the buffer since the last sequence.': '触发数据点处理的字符序列；处理自上次触发后累积在缓冲区中的数据。',
  'The max. size the graphing receiving buffer can grow to waiting for command termination (;). The receive buffer is cleared if this size is exceeded. Must be an integer in the range [1-10000].': '等待命令结束符（;）时绘图接收缓冲区允许增长的最大值。超过后将清空缓冲区，必须为 [1–10000] 范围内的整数。',
  'The max. size the graphing receiving buffer can grow to waiting for a processing trigger. The receive buffer is cleared if this size is exceeded. Must be an integer in the range [1-10000].': '等待处理触发符时绘图接收缓冲区允许增长的最大值。超过后将清空缓冲区，必须为 [1–10000] 范围内的整数。',
  'The max. number of previous data points to display per trace. Must be an integer in the range [1-2000]. Increasing this will increase the CPU usage.': '每条曲线保留并显示的历史数据点上限，必须为 [1–2000] 范围内的整数。增大该值会提高 CPU 占用。',
  'The number of bytes currently in the graphing buffer. This is the number of bytes that have been received but not yet processed. They will be processed (graph information extracted) when the processing trigger is received.': '绘图缓冲区中当前尚未处理的接收字节数；收到处理触发符后会从中提取图表数据。',
  'The string that precedes each x value in the input data stream.': '输入数据流中每个 X 值之前的字符串。',
  'The string that precedes each y value in the input data stream.': '输入数据流中每个 Y 值之前的字符串。',
  'Enable parsing multiple comma/space-separated values from each buffer instead of just one value per buffer.': '允许从每个缓冲区解析多个以逗号或空格分隔的数值，而不是只解析一个值。',
  'The character that separates multiple values within a single line.': '同一行内多个数值之间使用的分隔字符。',
  'Custom character(s) to use as value separator.': '用作数值分隔符的自定义字符。',
  'When enabled, the plot is cleared each time new data arrives in a buffer. Useful for displaying snapshots of data rather than accumulating over time.': '启用后，每次缓冲区收到新数据都会清空图表，适合显示数据快照而非持续累积。',
  'Auto: Limits change to accommodate all data.': '自动：范围随全部数据自动调整。',
  'Fixed: Specify the limits in the below inputs.': '固定：在下方输入范围上下限。',
  'Minimum X axis value.': 'X 轴最小值。',
  'Maximum X axis value.': 'X 轴最大值。',
  'Minimum Y axis value.': 'Y 轴最小值。',
  'Maximum Y axis value.': 'Y 轴最大值。',
  'Start Graphing': '开始绘图',
  'Stop Graphing': '停止绘图',
  'Clear Graph': '清空图表',
  'X Axis': 'X 轴',
  'Y Axis': 'Y 轴',
  'Minimum': '最小值',
  'Maximum': '最大值',
  'The source of data for the X-axis variable.': 'X 轴变量的数据来源。',
  'Changing this resets the graph.': '更改此项会重置图表。',
  "Received Time: Time is seconds that the data points was received at since the graph was last reset. NOTE: Don't rely on this for accurate timing (millisecond or lower range), as timing is dependent on OS buffering and CPU usage. Instead, record the time on the microcontroller, send it along with the y value and use \"In Data\".": '接收时间：自上次重置图表起，数据点被接收时的秒数。注意：该时间受操作系统缓冲和 CPU 占用影响，不适合毫秒级或更高精度计时；需要精确计时时，请在微控制器上记录时间，与 Y 值一同发送，并选择“来自数据”。',
  'Counter: X value is a 0-based counter that increments when a new data point is received.': '计数器：X 值为从 0 开始的计数器，每收到一个新数据点便递增。',
  'In Data: Extract the x value from the data, just like the y-value.': '来自数据：像提取 Y 值一样从数据中提取 X 值。',
  'Comma (,)': '逗号（,）',
  'Space': '空格',
  'Time [s]': '时间 [秒]',
  'Counts': '计数值',

  // General settings
  'Copy/Paste Settings': '复制与粘贴设置',
  'When copying text from the terminal to the clipboard with Ctrl-Shift-C, do not insert LF into clipboard if row was created due to wrapping.': '使用 Ctrl+Shift+C 从终端复制文字时，如果该行由自动换行产生，则不向剪贴板插入 LF。',
  'When pasting text from the clipboard into a terminal with Ctrl-Shift-V, convert CRLF to LF when on Windows.': '在 Windows 上使用 Ctrl+Shift+V 向终端粘贴时，将 CRLF 转换为 LF。',
  'App Updates': '应用更新',
  'Enable automatic updates': '启用自动更新',
  'Check for Updates': '检查更新',
  'NinjaTerm automatically checks for updates on startup. Click the button above to manually check for updates.': 'NinjaTerm 会在启动时自动检查更新，也可点击上方按钮手动检查。',
  'Automatic updates are disabled. Click the button above to manually check for updates.': '自动更新已关闭，可点击上方按钮手动检查更新。',
  'Update check failed. See the application log for details.': '更新检查失败，请稍后重试；详细信息已写入应用日志。',
  'No updates available. You are running the latest version.': '当前已是最新版本。',
  'MCP Server (AI Integration)': 'MCP 服务器（AI 集成）',
  'Expose NinjaTerm as an MCP (Model Context Protocol) server so AI assistants like Claude Code can read serial output and send commands directly — no copy-pasting required.': '将 NinjaTerm 作为 MCP（模型上下文协议）服务器开放，使 Claude Code 等 AI 助手可直接读取串口输出并发送命令，无需复制粘贴。',
  'Enable MCP server': '启用 MCP 服务器',
  'Running on': '运行地址：',
  'Add to Claude Code with:': '添加到 Claude Code：',
  'Copy command': '复制命令',
  'Performance Testing': '性能测试',
  'Run comprehensive performance tests to measure data processing speed, rendering performance, and identify bottlenecks. Tests automatically switch between Terminal and Graphing views for accurate measurements of view-specific rendering performance.': '运行综合性能测试，测量数据处理速度和渲染性能并定位瓶颈。测试会自动切换终端与图表页面，以准确测量各页面的渲染性能。',
  'Run Performance Tests': '运行性能测试',
  'Running Tests...': '正在测试…',
  'Running performance tests... This will take about 30 seconds and will automatically switch between Terminal and Graphing views to measure rendering performance accurately. The Settings dialog will be closed during testing to prevent MUI component render overhead.': '正在运行性能测试……大约需要 30 秒。程序会自动切换终端与图表页面以准确测量渲染性能；测试期间设置窗口会关闭，以避免 MUI 组件带来的额外渲染开销。',
  'Show Current Metrics': '显示当前指标',
  'Performance tests measure view-specific rendering costs by automatically switching between Terminal and Graphing views. Terminal tests measure text rendering and ANSI processing, while Graphing tests measure chart.js performance and data parsing overhead.': '性能测试会自动切换终端和图表页面，以分别测量渲染开销；终端测试涵盖文字渲染与 ANSI 解析，图表测试涵盖 Chart.js 性能与数据解析开销。',
  'Developer Tools': '开发者工具',
  'Open Developer Tools': '打开开发者工具',
  'Open Chrome Developer Tools to inspect the application, debug JavaScript, analyze performance, and examine network requests. The dev tools can also be opened by pressing F12.': '打开 Chrome 开发者工具以检查应用、调试 JavaScript、分析性能和查看网络请求，也可按 F12 打开。',
  'Note: Developer tools are available in both development and production builds. Use them to debug performance issues, inspect React components, and analyze the application.': '说明：开发版和正式版均可使用开发者工具，可用于排查性能问题、检查 React 组件和分析应用。',
  'App Data': '应用数据',
  'Clear app data and reload app': '清除应用数据并重新加载',
  'Confirm Action': '确认操作',
  'This action cannot be undone.': '此操作无法撤销。',
  'Are you sure you want to clear all app data and reload?': '确定要清除全部应用数据并重新加载吗？',
  'You will lose all profiles and all settings will be reset to default. Logged data saved to disk will NOT be deleted.': '所有配置和设置都将恢复默认值，但已保存到磁盘的日志数据不会被删除。',

  // Remaining connection backends and runtime messages
  'Support NinjaTerm on Ko-fi. Opens in your browser.': '在 Ko-fi 上赞助 NinjaTerm（将在浏览器中打开）',
  'Controls': '控制',
  'Separate TX/RX terminals': '分离发送/接收终端',
  'Developer tools closed': '开发者工具已关闭',
  'Socket Connection Settings': '网络套接字连接设置',
  'IP address (e.g. 192.168.1.100) or hostname (e.g. www.example.com) of the TCP socket server to connect to.': '要连接的 TCP 套接字服务器 IP 地址（如 192.168.1.100）或主机名（如 www.example.com）。',
  'IP address or hostname': 'IP 地址或主机名',
  'Port number of the TCP socket server to connect to. Must be between 1 and 65535 (inclusive).': '要连接的 TCP 套接字服务器端口号，必须在 1 至 65535 之间（含端点）。',
  'Port number': '端口号',
  'Connection timeout (ms)': '连接超时（毫秒）',
  'Timeout in milliseconds': '超时时间（毫秒）',
  'Open or close the socket connection.': '打开或关闭网络套接字连接。',

  'NinjaTerm will spawn J-Link Commander (JLink.exe), attach to the target, and connect to RTT channel 0 on TCP port 19021. SEGGER J-Link software must be installed on this machine.': 'NinjaTerm 将启动 J-Link Commander（JLink.exe）、连接目标器件，并通过 TCP 端口 19021 连接 RTT 通道 0。本机必须已安装 SEGGER J-Link 软件。',
  "SEGGER target device identifier, e.g. nRF52832_xxAA, STM32F407VG, RP2040_M0_0. Pick from the suggestions or type any device name accepted by J-Link Commander's `device` command. J-Link's full device list has thousands of entries — if yours isn't in the dropdown just type it in.": 'SEGGER 目标器件标识，例如 nRF52832_xxAA、STM32F407VG、RP2040_M0_0。可从建议中选择，也可输入 J-Link Commander 的 device 命令支持的任意器件名；下拉列表未列出时可直接输入。',
  'Recently used': '最近使用',
  'Target device': '目标器件',
  'SEGGER device name (type to filter)': 'SEGGER 器件名称（输入可筛选）',
  'no device': '未选择器件',
  'No device': '未选择器件',
  'Debug interface used by the J-Link probe. Most modern ARM Cortex-M targets use SWD.': 'J-Link 探针使用的调试接口。多数现代 ARM Cortex-M 目标使用 SWD。',
  'RTT channel': 'RTT 通道',
  'J-Link serial (optional)': 'J-Link 序列号（可选）',
  'Blank = first available': '留空则使用第一个可用探针',
  'Optional J-Link probe serial number. Only needed if multiple J-Link probes are connected to this machine. Leave blank to use the first available probe.': '可选的 J-Link 探针序列号。仅在本机连接多个 J-Link 时需要；留空则使用第一个可用探针。',
  'J-Link Commander path': 'J-Link Commander 路径',
  'Blank = auto-detect': '留空则自动检测',
  'Path to J-Link Commander (JLink.exe on Windows, JLinkExe on macOS/Linux). Leave blank to auto-detect in the standard SEGGER install location.': 'J-Link Commander 路径（Windows 为 JLink.exe，macOS/Linux 为 JLinkExe）。留空则在 SEGGER 标准安装位置自动检测。',
  'Search the standard SEGGER install locations on this machine and fill in the first path found.': '搜索本机 SEGGER 标准安装位置，并填入找到的第一个路径。',
  'J-Link Commander not found in standard install locations. Use Browse... to select it manually.': '在标准安装位置未找到 J-Link Commander，请使用“浏览…”手动选择。',
  'Open or close the RTT connection. Spawns J-Link Commander on open.': '打开或关闭 RTT 连接；打开时会启动 J-Link Commander。',
  'J-Link Commander output': 'J-Link Commander 输出',
  '(no output yet — open the RTT connection to populate this)': '（暂无输出——打开 RTT 连接后将在此显示）',
  'No target device specified.': '未指定目标器件。',
  'No RTT target device specified. Set the device (e.g. nRF52832_xxAA) in Connection Settings.': '未指定 RTT 目标器件，请在连接设置中选择或输入器件名称。',
  'An RTT session is already open. Disconnect first.': '已有 RTT 会话处于打开状态，请先断开。',
  'J-Link install not found. Install SEGGER J-Link software or set the path explicitly.': '未找到 J-Link 安装目录，请安装 SEGGER J-Link 软件或手动设置路径。',
  'No matching RTT session.': '未找到匹配的 RTT 会话。',
  'RTT session is closing.': 'RTT 会话正在关闭。',
  'No emulator (probe) connected on USB.': 'USB 上未连接 J-Link 仿真器（探针）。',
  'No emulator (probe) connected on USB': 'USB 上未连接 J-Link 仿真器（探针）',
  'No emulator (probe) connected': '未连接 J-Link 仿真器（探针）',
  'Unspecified error': '未指定错误',
  'Unspecified error.': '未指定错误。',
  'Connection error': '连接错误',
  'Connection error.': '连接错误。',
  'Unknown device': '未知器件',
  'Unknown device.': '未知器件。',
  'Memory error': '存储器错误',
  'Memory error.': '存储器错误。',
  'No CPU found': '未发现 CPU',
  'No CPU found.': '未发现 CPU。',
  'Too many breakpoints': '断点数量过多',
  'Too many breakpoints.': '断点数量过多。',
  'Connect to target failed': '连接目标失败',
  'Connect to target failed.': '连接目标失败。',
  'RTT disconnected.': 'RTT 已断开。',

  // Runtime notifications and snackbar banners
  'The last session cannot be closed.': '无法关闭最后一个会话。',
  'Auto-updater not available in this version.': '此版本不支持自动更新。',
  'Checking for updates...': '正在检查更新…',
  'Restart & Install': '重启并安装',
  'Developer tools not available in this version.': '此版本不提供开发者工具。',
  'Developer tools opened': '开发者工具已打开',
  'Bluetooth scan started...': '正在扫描蓝牙设备…',
  'Bluetooth scan finished.': '蓝牙设备扫描已完成。',
  'No Bluetooth device selected. Please select a device from the Bluetooth Settings.': '未选择蓝牙设备，请先在蓝牙设置中选择设备。',
  'No Bluetooth device selected (this.selectedBluetoothDevice is null) even though the connection attempt was successful.': '连接尝试虽已成功，但当前没有选中的蓝牙设备。',
  'Bluetooth connection success message was not returned from the main process.': '主进程未返回蓝牙连接成功信息。',
  'Services information was not returned from the main process.': '主进程未返回蓝牙服务信息。',
  'Manual UUIDs not specified. Please enter Service, RX, and TX UUIDs.': '尚未指定手动 UUID，请填写服务、接收和发送 UUID。',
  'Correct service and characteristic UUIDs were not found on connected Bluetooth device.': '在已连接的蓝牙设备上未找到所需的服务和特征 UUID。',
  'No Bluetooth device connected. Cannot send data.': '未连接蓝牙设备，无法发送数据。',
  'Bluetooth device connected.': '蓝牙设备已连接。',
  'Bluetooth device disconnected.': '蓝牙设备已断开。',
  'Automatically reconnected to Bluetooth device.': '已自动重新连接蓝牙设备。',
  'No serial port selected. Please select a port from the Port Settings.': '未选择串口，请先在串口设置中选择端口。',
  'Invalid socket host or port. Please check the Connection Configuration.': '网络套接字的主机或端口无效，请检查连接配置。',
  'Fake serial port opened.': '模拟串口已打开。',
  'Fake serial port closed.': '模拟串口已关闭。',
  'Fake port opened.': '模拟端口已打开。',
  'Fake port closed.': '模拟端口已关闭。',
  'Fake port reopened.': '模拟端口已重新打开。',
  'Serial port opened.': '串口已打开。',
  'Serial port closed.': '串口已关闭。',
  'Socket disconnected.': '网络套接字已断开。',
  'Graphing receive buffer overflowed. Clearing buffer.': '绘图接收缓冲区已溢出，正在清空缓冲区。',
  'Unknown graph command prefix': '未知的图表命令前缀',
  'GPH:ADD_FIG requires id parameter': 'GPH:ADD_FIG 需要 id 参数',
  'GPH:DEL_FIG requires fig parameter': 'GPH:DEL_FIG 需要 fig 参数',
  'GPH:CLR_FIG requires fig parameter': 'GPH:CLR_FIG 需要 fig 参数',
  'GPH:DEL_TRACE requires trace parameter': 'GPH:DEL_TRACE 需要 trace 参数',
  'GPH:ADD_TRACE requires fig and id parameters': 'GPH:ADD_TRACE 需要 fig 和 id 参数',
  'GPH:ADD_DATA requires trace and data parameters': 'GPH:ADD_DATA 需要 trace 和 data 参数',
  'Break signal not yet implemented in Electron version.': 'Electron 版本暂未实现 Break 信号。',
  'Cannot send, the connection is not open.': '连接尚未打开，无法发送。',
  'Settings restored.': '设置已恢复。',
  'Failed to scan for serial ports.': '扫描串口失败。',
  'Serial port re-opened with new settings.': '串口已使用新设置重新打开。',
  'Copied to clipboard': '已复制到剪贴板',
  'Failed to copy to clipboard': '复制到剪贴板失败',

  'Bluetooth LE Serial Protocol': '低功耗蓝牙串行协议',
  'Bluetooth Protocol': '蓝牙协议',
  'The protocol to use for serial communication over Bluetooth LE. This determines the service and TX/RX characteristic UUIDs to use.': '用于低功耗蓝牙串行通信的协议，它决定要使用的服务以及接收/发送特征 UUID。',
  'First detected serial protocol': '首个检测到的串行协议',
  'Nordic Uart Service (NUS)': 'Nordic UART 服务（NUS）',
  'Microchip Transparent Uart Service': 'Microchip 透明 UART 服务',
  'TI Serial Port Service (SPS)': 'TI 串行端口服务（SPS）',
  'u-blox u-connectXpress': 'u-blox u-connectXpress',
  'Silicon Labs SPP over BLE': 'Silicon Labs BLE SPP',
  'Manually Specify': '手动指定',
  'This will check all supported protocols and use the first one that is found. This is generally the best option to use.': '检查所有支持的协议并使用首个检测到的协议，通常建议选择此项。',
  'The Nordic UART Service (NUS) is used by many nRF MCUs and also other vendor MCUs. It is likely the most popular protocol for BLE serial communication.': 'Nordic UART 服务（NUS）被许多 nRF 及其他厂商 MCU 使用，是很常见的 BLE 串行通信协议。',
  'The Microchip Transparent UART Service is used by many Microchip MCUs.': 'Microchip 透明 UART 服务被许多 Microchip MCU 使用。',
  'The TI Serial Port Service (SPP) is a BLE serial protocol used by Texas Instruments.': 'TI 串行端口服务（SPP）是德州仪器使用的 BLE 串行协议。',
  'The u-blox u-connectXpress is a BLE serial protocol used by u-blox.': 'u-blox u-connectXpress 是 u-blox 使用的 BLE 串行协议。',
  'The Silicon Labs SPP is a BLE serial protocol used by Silicon Labs.': 'Silicon Labs SPP 是 Silicon Labs 使用的 BLE 串行协议。',
  'Manually specify the service, RX, and TX UUIDs to use for serial communication. Use this if you have implemented your own custom protocol.': '手动指定串行通信所用的服务、接收和发送 UUID，适用于自定义协议。',
  'Service UUID': '服务 UUID',
  'RX Characteristic UUID': '接收特征 UUID',
  'TX Characteristic UUID': '发送特征 UUID',
  'Bluetooth service UUID containing the TX and RX characteristics': '包含发送和接收特征的蓝牙服务 UUID',
  'Characteristic UUID for BLE peripheral to receive data (RX)': 'BLE 外设接收数据的特征 UUID（RX）',
  'Characteristic UUID for BLE peripheral to transmit data (TX)': 'BLE 外设发送数据的特征 UUID（TX）',
  'The service UUID to use for serial communication over Bluetooth LE. The same service UUID must be used for both the TX and RX characteristics.': '低功耗蓝牙串行通信使用的服务 UUID；发送和接收特征必须使用同一服务 UUID。',
  'The RX characteristic UUID to use. This is named w.r.t. the BLE peripheral, i.e. NinjaTerm (the BLE central device) will write data to this characteristic.': '要使用的 RX 特征 UUID（以 BLE 外设视角命名），NinjaTerm 作为 BLE 中心设备会向此特征写入数据。',
  'The TX characteristic UUID to use. This is named w.r.t. the BLE peripheral, i.e. NinjaTerm (the BLE central device) will read data from this characteristic.': '要使用的 TX 特征 UUID（以 BLE 外设视角命名），NinjaTerm 作为 BLE 中心设备会从此特征读取数据。',
  'Scan duration (ms)': '扫描时长（毫秒）',
  'Hide unconnectable devices': '隐藏不可连接的设备',
  'When checked, devices that do not advertise themselves as connectable will be hidden from the device list below.': '勾选后，下方列表将隐藏未声明为可连接的设备。',
  'Start scanning for Bluetooth devices. Discovered devices will be displayed in the table below.': '开始扫描蓝牙设备，发现的设备将显示在下方表格中。',
  'Stop scanning': '停止扫描',
  'Scan': '扫描',
  'Connect to the selected Bluetooth LE device, make sure the service, RX, and TX UUIDs are present, and start listening to the TX characteristic.': '连接选定的低功耗蓝牙设备，确认服务及接收/发送 UUID 存在，然后开始监听 TX 特征。',
  'Available Bluetooth LE Devices': '可用低功耗蓝牙设备',
  'Click on a column header to sort by that column. Sorted by RSSI by default.': '单击列标题可按该列排序，默认按 RSSI 排序。',
  'Address': '地址',
  'Advertisement Name': '广播名称',
  'Mfg Data': '厂商数据',
  'Connectable': '可连接',
  'Advertised Protocols': '广播协议',
  'No Bluetooth devices found. Click "Scan" to search for devices.': '未发现蓝牙设备，请单击“扫描”搜索设备。',
  'The duration to scan for BLE devices.': '扫描 BLE 设备的时长。',

  // Serial modem control tooltips
  'Request To Send. Manual control is disabled because "Let driver/OS manage RTS/CTS signals" is enabled in Connection Settings.': '请求发送（RTS）。由于已在连接设置中启用“由驱动程序/系统管理 RTS/CTS 信号”，手动控制已禁用。',
  'Request To Send. Write only. Traditionally asserted by the DTE (e.g. computer) to the DCE (e.g. modem) to indicate that it is ready to send data. Commonly used for hardware flow control. 0 is inactive, 1 is active. If this is connected to a UART, then 0 is 5V (inactive) and a 1 is 0V (active). You can disable manual control and let the driver/OS manage it by enabling "Let driver/OS manage RTS/CTS signals" in Connection Settings.': '请求发送（RTS），只写。DTE（如计算机）通常用它通知 DCE（如调制解调器）已准备发送数据，常用于硬件流控制。0 为无效，1 为有效；连接 UART 时通常 0 对应 5V、1 对应 0V。可在连接设置中启用“由驱动程序/系统管理 RTS/CTS 信号”以交由驱动管理。',
  'Clear To Send. Manual control is disabled because "Let driver/OS manage RTS/CTS signals" is enabled in Connection Settings.': '允许发送（CTS）。由于已在连接设置中启用“由驱动程序/系统管理 RTS/CTS 信号”，手动控制已禁用。',
  'Clear To Send. Read/write. Commonly used for hardware flow control. You can not usually set this from NinjaTerm (the computer NinjaTerm is running on normally acts as the DTE), and if you set this and it quickly changes, it means the other end is driving the signal. 0 is inactive, 1 is active. If this is connected to a UART, then 0 is 5V (inactive) and a 1 is 0V (active). You can disable manual control and let the driver/OS manage it by enabling "Let driver/OS manage RTS/CTS signals" in Connection Settings.': '允许发送（CTS），可读写，常用于硬件流控制。NinjaTerm 所在计算机通常作为 DTE，因此一般无法主动设置；若设置后立即变化，表示对端正在驱动该信号。0 为无效，1 为有效；连接 UART 时通常 0 对应 5V、1 对应 0V。',
  'Data Terminal Ready. Write only. Traditionally asserted by the DTE when it was ready to receive data. Not as commonly used for flow control as RTS/CTS. Some older devices used DTR and RTS as a source of power.': '数据终端就绪（DTR），只写。DTE 准备接收数据时通常置位；用于流控制的情况少于 RTS/CTS，部分旧设备还会利用 DTR 和 RTS 供电。',
  'Data Set Ready. Read/write. Traditionally sent by the DCE (e.g. modem) to the DTE (e.g. computer) to indicate that the DCE is ready to receive data. If you set this and it quickly changes, it means the other end is driving the signal.': '数据设备就绪（DSR），可读写。DCE（如调制解调器）通常用它通知 DTE（如计算机）已准备接收数据；若设置后立即变化，表示对端正在驱动该信号。',
  'Data Carrier Detect. Read only. Was traditionally driven high (asserted, 1) by the modem (DCE) when it detected a carrier signal, which meant it was connected to another modem on the other end.': '载波检测（DCD），只读。调制解调器（DCE）检测到载波、确认已连接对端时通常将其置高（有效，1）。',

  // RX settings tooltips
  'Interpret RX data as ASCII characters.': '将接收数据按 ASCII 字符解析。',
  'Interpret RX data as a type of number.': '将接收数据按指定数值类型解析。',
  'If enabled, ANSI escape codes will be parsed. At present, CSI color codes and some of the move cursor commands are supported.': '启用后解析 ANSI 转义序列。目前支持 CSI 颜色代码和部分光标移动命令。',
  'The max. length of escape code allowed (in characters). Certain malformed escape codes (or data interruptions) could cause the escape code parser to get stuck thinking the incoming data stream is part of an escape code. This limit is so that at a certain length the parser rejects the partial code and goes back to the idle state. This includes all characters in the escape code, including the starting \\x1B byte. Must be a least 2 chars.': '允许的转义序列最大长度（字符数）。格式错误或中断的序列可能使解析器一直等待后续数据；达到此限制后会丢弃不完整序列并恢复空闲状态。长度包含起始的 \\x1B 字节，至少为 2。',
  'If enabled, CSI escape sequences that are received but not supported by NinjaTerm (or that are malformed) are shown inline in the terminal as a highlighted marker, instead of being silently discarded. Useful for troubleshooting ANSI escape sequences. Requires ANSI escape code parsing to be enabled.': '启用后，收到但 NinjaTerm 不支持或格式错误的 CSI 序列会在终端中以高亮标记显示，而不是静默丢弃，便于排查 ANSI 转义序列；需要先启用 ANSI 转义序列解析。',
  'Open the NinjaTerm manual in your browser, at the section listing all supported ANSI escape codes.': '在浏览器中打开 NinjaTerm 手册的 ANSI 转义序列支持列表。',
  'If enabled, transmitted data will be treated as received data. Useful in ASCII mode when the device on the other end of the serial port does not echo back characters. Disable this if you see two of every character appear.': '启用后，发送数据也会按接收数据显示。适用于 ASCII 模式下对端不回显字符的情况；若每个字符出现两次，请关闭此项。',
  "Don't move the cursor at all when a new line character is received.": '收到换行符时不移动光标。',
  'Move the cursor directly down one line. A separate carriage return is required if you want to move the cursor to the start of the new line.': '光标直接下移一行；若还要移到新行行首，需要另行收到回车符。',
  'Move the cursor back to the start of the line and then down one line. This is the most common behavior for receiving a new line character.': '光标先回到行首再下移一行，这是接收换行符时最常用的行为。',
  'If enabled, new line characters will not be printed to the terminal display. If disabled, new line characters will be printed before any cursor movement occurs because of the new line, such that the new line character will be printed at the end of the existing line, not the start of the new line.': '启用后不在终端中显示换行符。关闭后，会先在当前行末显示换行符，再执行由换行符引起的光标移动。',
  "Don't move the cursor at all when a carriage return character is received.": '收到回车符时不移动光标。',
  'Move the cursor to the start of the current line. A separate new line character is required if you want to move the cursor down one line.': '光标移到当前行行首；若还要下移一行，需要另行收到换行符。',
  'Move the cursor back to the start of the line and then down one line.': '光标先回到行首，再下移一行。',
  'If enabled, carriage return characters will not be printed to the terminal display. If disabled, carriage return characters will be printed before any cursor movement occurs because of the carriage return, such that the carriage return character will be printed at the end of the row, not the start of the row.': '启用后不在终端中显示回车符。关闭后，会先在当前行末显示回车符，再执行由回车符引起的光标移动。',
  "Don't interpret backspace bytes. They are displayed as a control glyph (or swallowed) just like any other non-visible character, per the setting below.": '不解析退格字节，按下方设置将其显示为控制字符图形或忽略。',
  'Move the cursor one column left without deleting anything. This is the strict ANSI/VT backspace behavior (a well-behaved device erases by sending the 3-byte sequence \\b \\b).': '光标左移一列但不删除字符。这是严格的 ANSI/VT 退格行为（规范设备会发送 3 字节序列“退格、空格、退格”来擦除）。',
  'Move the cursor one column left and delete the character there (destructive backspace). This erases the previous character, which is usually what you want when typing into a serial console with local echo.': '光标左移一列并删除该字符（破坏性退格），通常适合启用本地回显的串口控制台。',
  "Don't interpret form feed bytes. They are displayed as a control glyph (or swallowed) just like any other non-visible character, per the setting below. This is the standards-correct behavior (ECMA-48/VT100 do not clear the screen on form feed).": '不解析换页字节，按下方设置将其显示为控制字符图形或忽略。这符合 ECMA-48/VT100 标准（换页不会清屏）。',
  'Erase the visible screen but keep the scrollback buffer (equivalent to the ANSI ESC[2J sequence). Useful for embedded devices that send a bare form feed to clear the terminal.': '清除当前可见屏幕但保留回滚缓冲区（等同 ANSI ESC[2J），适用于用单独换页符清屏的嵌入式设备。',
  'Erase the visible screen and the scrollback buffer (equivalent to the ANSI ESC[3J sequence).': '清除当前可见屏幕和回滚缓冲区（等同 ANSI ESC[3J）。',
  'Bytes 0x80 and above are not treated as text. They are displayed as hex glyphs (or swallowed) per the non-visible character setting below. Best for general debugging, where seeing the raw byte value matters more than reading it as text.': '不把 0x80 及以上字节视为文本，而按下方设置显示为十六进制图形或忽略。适合更关注原始字节值的常规调试。',
  'Decode bytes 0x80 and above as UTF-8. Multi-byte characters split across separate reads from the port are handled. Bytes that are not valid UTF-8 fall back to hex glyphs so they stay visible.': '将 0x80 及以上字节按 UTF-8 解码，支持跨多次读取的多字节字符；无效 UTF-8 字节会回退为十六进制图形，确保仍然可见。',
  'Decode bytes 0x80 and above as Code Page 437, the original IBM PC / MS-DOS character set. This is what DOS-style text-mode applications use to draw frames and borders (e.g. byte 0xDA is the top-left corner and 0xC4 the horizontal line). Pair with a DOS terminal font in Settings > Display.': '将 0x80 及以上字节按代码页 437（IBM PC/MS-DOS 字符集）解码。DOS 文本界面用它绘制边框；建议在“设置 > 显示”中配合 DOS 终端字体。',
  'Do not display bytes that are not visible ASCII characters.': '不显示不可见的 ASCII 字节。',
  'Convert bytes that are control chars into control char glyphs, and all other bytes that are not valid ASCII characters ([0x80-0xFF]) into hex code glyphs.': '将控制字符显示为控制字符图形，其他非 ASCII 字节（0x80–0xFF）显示为十六进制图形。',
  'Convert all non-visible ASCII characters into hex code glyphs.': '将所有不可见 ASCII 字符显示为十六进制图形。',
  'The type of number of interpret data as. Some types require only one byte, others are multi-byte which will buffer data and require the endianness to be set correctly.': '接收数据的数值解析类型。有些类型只需一个字节，多字节类型会缓存数据并要求正确设置字节序。',
  'The order in which multi-byte numbers are sent on the serial port. Little endian is when the LSB is sent first, big endian is when the MSB is sent first. Most MCUs use little endian for their memory layout, so if you are sending the lowest memory address first of a multi-byte type, you are probably using little endian.': '多字节数值在串口上的字节顺序。小端先发送最低有效字节，大端先发送最高有效字节；多数 MCU 内存采用小端。',
  'This string is append to every displayed numerical value. For example, use " " to separate values with a space, or "," to create CSV-like data. You can also use an empty string to have no separator at all.': '在每个显示的数值后追加此字符串。例如用空格分隔数值，用逗号形成类似 CSV 的数据；留空则不添加分隔符。',
  'If enabled, numerical values will not be broken into two to wrap to the next row if the terminal reaches the last column. A new row will be created when a whole value cannot fit onto the existing row. This has no effect if a hex value cannot fit into a single row even when starting from the first column (e.g. small column count).': '启用后，数值不会在终端行末被拆开换行；当前行放不下完整数值时会新建一行。若数值从行首开始仍放不下，此设置无效。',
  'Check this if you want to insert new lines when specific bytes arrive from the serial port. Handy when you have specific start-of-packet/end-of-packet delimiters and you want to display one packet per row.': '若希望收到特定字节时插入新行，请启用此项。适用于按包头/包尾分隔并希望每行显示一个数据包的场景。',
  'The hex value to look for in the RX stream. If found, a new line will be inserted either before or after the value (depending on the setting). Must be a valid hex value, e.g. "0A" or "FF". This is always a hex value, no matter what the selected number type is. It is compared against the raw bytes received that make up the number, not the interpreted number value. For example, if you were displaying uint16 and wanted to create a new line on the value 1000, you would enter "3E8". If you were displaying int16 and wanted a new line on -10, you would enter "FFF6".': '在接收流中查找的十六进制值。找到后会按设置在该值之前或之后插入新行。必须输入有效十六进制值（如“0A”或“FF”），并始终与组成数值的原始接收字节比较，而不是与解析后的数值比较。',
  'Insert new line before the detected value. Useful if the value indicates the start of a packet.': '在检测值之前插入新行，适合该值表示数据包起始的情况。',
  'Insert new line after the detected value. Useful if the value indicates the end of a packet.': '在检测值之后插入新行，适合该值表示数据包结束的情况。',
  'Enable this to left-pad values to a consistent character width for integer and float types. Zeroes style padding is always applied to hex values.': '启用后对整数和浮点数左侧补齐，使字符宽度一致；十六进制值始终使用补零方式。',
  'Pad with 0\'s, e.g. "-003".': '用 0 补齐，例如“-003”。',
  'Pad with 0&apos;s, e.g. "-003".': '用 0 补齐，例如“-003”。',
  'Pad with whitespace, e.g. "  -3".': '用空格补齐，例如“  -3”。',
  'The width to pad numbers out to. Set to -1 if you want to automatically pad the value to the width of the largest possible number of the selected type (e.g. 2 chars for a 1-byte hex value, 3 chars for a uint8, 5 for a uint16). For floats, -1 equals 6 chars.': '数值补齐后的宽度。设为 -1 时按所选类型可能的最大宽度自动补齐（例如 1 字节十六进制为 2 字符、uint8 为 3 字符、uint16 为 5 字符）；浮点数设为 -1 时为 6 字符。',
  'The number of received bytes to convert into a single hex. number. For example, setting this to 1 will result in terminal display like 8E FF 05 33. Setting this to 2 will result in FF8E 3305 (if little endian). Uses the endianness setting above.': '合并为一个十六进制数的接收字节数。例如设为 1 时显示“8E FF 05 33”，设为 2 且采用小端时显示“FF8E 3305”；使用上方字节序设置。',
  'Use uppercase A-F when printing hex values.': '十六进制值使用大写 A–F。',
  'Use lowercase a-f when printing hex values.': '十六进制值使用小写 a–f。',
  'If enabled, "0x" will be prefixed to all hex values displayed in the terminal. Normally this just adds more clutter to the data, but might be useful in some cases!': '启用后，终端中的所有十六进制值都会添加“0x”前缀。通常会增加视觉干扰，但某些场景可能有用。',
  'Control how the float gets converted into a string. toString() converts the number to the smallest string representation which uniquely identifies the float. toFixed() creates the string representation with a fixed number of decimal places (settable in the input below).': '控制浮点数转换为字符串的方式。toString() 使用能唯一表示该浮点数的最短字符串；toFixed() 使用固定小数位数（可在下方设置）。',
  'The number of decimal places to round the float to if using toFixed().': '使用 toFixed() 时保留的小数位数。',
  "If enabled, timestamps will be added to the terminal. Timestamps are added to the start of each new line of received data. The time shown is when the first visible character of the line is received (i.e. ASCII control codes don't count). Timestamps are not added if the line was created due to wrapping of the line above it.": '启用后，终端会显示时间戳。时间戳添加在每一行新接收数据的开头；所示时间为该行首个可见字符到达的时刻（ASCII 控制字符不计入）。如果该行由上一行自动换行产生，则不会添加时间戳。',
  'Display timestamps in the ISO8601 format with millisecond precision and no timezone (e.g. "2025-06-04T12:04:45.832").': '以 ISO8601 格式显示时间戳，精确到毫秒且不含时区（例如“2025-06-04T12:04:45.832”）。',
  'Display timestamps in the ISO8601 format with millisecond precision and no timezone (e.g. &quot;2025-06-04T12:04:45.832&quot;).': '以 ISO8601 格式显示时间戳，精确到毫秒且不含时区（例如“2025-06-04T12:04:45.832”）。',
  'Display timestamps in the ISO8601 format with millisecond precision and timezone (e.g. "2025-06-04T12:04:45.832+12:00").': '以 ISO8601 格式显示时间戳，精确到毫秒并包含时区（例如“2025-06-04T12:04:45.832+12:00”）。',
  'Display timestamps in the ISO8601 format with millisecond precision and timezone (e.g. &quot;2025-06-04T12:04:45.832+12:00&quot;).': '以 ISO8601 格式显示时间戳，精确到毫秒并包含时区（例如“2025-06-04T12:04:45.832+12:00”）。',
  'Display timestamps in local time (e.g. "2025-06-04 12:04:45.832").': '以本地时间显示时间戳（例如“2025-06-04 12:04:45.832”）。',
  'Display timestamps in local time (e.g. &quot;2025-06-04 12:04:45.832&quot;).': '以本地时间显示时间戳（例如“2025-06-04 12:04:45.832”）。',
  'Display timestamps as a Unix time with seconds precision (e.g. "1678886400").': '以 Unix 时间显示时间戳，精确到秒（例如“1678886400”）。',
  'Display timestamps as a Unix time with seconds precision (e.g. &quot;1678886400&quot;).': '以 Unix 时间显示时间戳，精确到秒（例如“1678886400”）。',
  'Display timestamps as a Unix time with in seconds with millisecond precision (e.g. "1678886400.123").': '以 Unix 时间显示时间戳，精确到毫秒（例如“1678886400.123”）。',
  'Display timestamps as a Unix time with in seconds with millisecond precision (e.g. &quot;1678886400.123&quot;).': '以 Unix 时间显示时间戳，精确到毫秒（例如“1678886400.123”）。',
  'Display timestamps using a custom Moment.js format string.': '使用自定义 Moment.js 格式字符串显示时间戳。',
  "Enter a Moment.js format string. E.g., 'YYYY-MM-DD HH:mm:ss.SSS' for local time, 'X' for Unix timestamp (seconds), 'x' for Unix timestamp (milliseconds).": '请输入 Moment.js 格式字符串。例如，本地时间可用“YYYY-MM-DD HH:mm:ss.SSS”，Unix 秒时间戳用“X”，Unix 毫秒时间戳用“x”。',
  'If enabled, a warning "snackbar" will be shown when a break signal is received. It it recommended to enable this if you do not usually expect break signals. It is recommended to disable this if break signals are expected (e.g. to frame raw data).': '启用后，收到 Break 信号时会显示警告横幅。如果通常不应收到 Break，建议启用；如果 Break 是预期信号（例如用于原始数据分帧），建议关闭。',

  // Connection and serial-port tooltips
  'On startup, if NinjaTerm can find the last used connection it will reselect it. If it was previously in the connected state, the connection will also be re-opened.': '启动时，如果 NinjaTerm 能找到上次使用的连接，会自动重新选择；若上次处于已连接状态，还会自动重新打开连接。',
  'The baud rate (bits/second) to use on the serial port. You can select one of the popular pre-defined options or enter in a custom rate. Custom value must be a integer in the range [1, 2000000 (2M)]. Most OSes/hardware will accept values outside their valid range without erroring, but will just not work properly. Common baud rates include 9600, 56700 and 115200. If you receive garbage data, it might be because you have the wrong baud rate selected.': '串口使用的波特率（位/秒）。可选择常用预设值或输入自定义值；自定义值必须为 1–2,000,000 的整数。部分系统或硬件会接受超出有效范围的值但无法正常通信。若收到乱码，请先检查波特率是否正确。',
  'The number of bits in each frame of data. This is typically set to 8 bits (i.e. 1 byte).': '每个数据帧的数据位数，通常设为 8 位（1 字节）。',
  'The parity is an extra bit of data in a frame which is set to make the total number of 1s in the frame equal to the parity setting. If "none", no parity bit is used or expected. If "odd", an odd number of 1s is expected, if "even" an even number of 1s is expected. "none" is the most common setting.': '校验位是数据帧中的附加位，用于使帧内 1 的总数满足奇偶校验要求。“无”表示不使用校验位；“奇”要求 1 的数量为奇数；“偶”要求为偶数。最常用的是“无”。',
  'The num. of stop bits is the number of bits used to mark the end of the frame. "1" is the most common setting.': '停止位用于标记数据帧结束，最常用设置为 1 位。',
  'Enable the underlying driver/OS to manage hardware flow control using RTS/CTS signals. When enabled, you will no longer be able to manually control the RTS signal using the RTS button in the terminal window. You must not enable this if you want to control them manually. When disabled, you can toggle RTS manually and view the state of the CTS signal in the terminal right-hand drawer.': '让底层驱动程序/系统使用 RTS/CTS 管理硬件流控制。启用后无法再通过终端中的 RTS 按钮手动控制；关闭后可手动切换 RTS，并在右侧抽屉查看 CTS 状态。',
  'Software flow control using XON character (ASCII 17, Ctrl+Q). When enabled, receiving an XON character resumes transmission.': '使用 XON 字符（ASCII 17、Ctrl+Q）进行软件流控制；收到 XON 后恢复发送。',
  'Software flow control using XOFF character (ASCII 19, Ctrl+S). When enabled, receiving an XOFF character pauses transmission.': '使用 XOFF 字符（ASCII 19、Ctrl+S）进行软件流控制；收到 XOFF 后暂停发送。',
  'Any character can restart output which was paused by XOFF. Normally only XON can restart transmission. This allows the user to override the software flow control and restart output with a key press. For more info, see IXANY on https://www.man7.org/linux/man-pages/man3/termios.3.html.': '允许任意字符恢复被 XOFF 暂停的输出。通常只有 XON 能恢复发送；启用后可按任意键覆盖软件流控制并恢复输出。',
  'Drop DTR (Data Terminal Ready) signal when the port is closed. This can be useful for triggering resets on connected devices like Arduino boards.': '关闭端口时撤销 DTR（数据终端就绪）信号，可用于触发 Arduino 等连接设备复位。',
  'Port number (1-65535)': '端口号（1–65535）',
  'Check this if you want to be able to quickly change serial port settings when the port is open. If a serial port setting is changed when the port is open, the port will be quickly closed and opened again.': '启用后可在串口打开时快速修改设置；修改后端口会立即关闭并重新打开。',
  'Click this to send the break signal for 200ms to the serial port.': '单击可向串口发送持续 200 毫秒的 Break 信号。',

  // Display and application tooltips
  'The amount of vertical padding to apply (in pixels) to apply above and below the characters in each row. The char size plus this row padding determines the total row height. Decrease for a denser display of data. Set this to 0 when using a DOS font, otherwise the gap between rows breaks up the vertical strokes of box-drawing characters.': '每行字符上下的垂直留白（像素）。字符大小与留白共同决定行高；减小可提高显示密度。使用 DOS 字体时应设为 0，否则行间空隙会切断边框字符的竖线。',
  'The font used to display data in the terminal. The bundled NinjaTerm font covers ASCII only; pick "IBM VGA (DOS/CP437)" for the box-drawing characters that text-mode applications draw frames and borders with, or "Custom..." to name any monospace font installed on your computer. Characters missing from the selected font fall back to a system monospace font, so the character grid always lines up.': '终端数据显示字体。内置 NinjaTerm 字体只覆盖 ASCII；文本模式边框请选择“IBM VGA（DOS/CP437）”，也可用“自定义…”指定已安装的等宽字体。缺失字符会回退到系统等宽字体，以保持字符网格对齐。',
  'The font family name to use, exactly as the font is named on your system (e.g. "Perfect DOS VGA 437"). The font has to already be installed on this computer. If it cannot be found, the terminal falls back to the default font.': '输入系统中的准确字体族名称（例如“Perfect DOS VGA 437”）。字体必须已安装；找不到时终端会回退到默认字体。',
  'The max. number of characters to display per line in the terminal before wrapping to the next line. Must be a positive integer. New line characters also cause text to jump to the next line.': '终端每行最多显示的字符数，超过后自动换行。必须为正整数；换行符也会使文本跳到下一行。',
  'Determines how the terminal height is set (excluding scrollback). When set to auto, the terminal height will be automatically set to the max. number of whole rows that can fit in the terminal height (and it will change as the window height changes). When set to fixed, the terminal height will be set to the number of rows specified in the terminal height field below. Sometimes fixed is needed for compatibility with certain terminal applications. This setting has implications for ASCII escape codes just as Erase in Display.': '设置终端可见高度（不含回滚区）。自动模式会根据窗口高度容纳尽可能多的完整行；固定模式使用下方指定的行数。某些终端应用需要固定高度，此设置也会影响“清除显示”等 ANSI 转义命令。',
  'Sets the terminal height (in terms of number of chars a.k.a. rows) when the terminal height mode is set to fixed. Must be a positive integer between 1 and 100.': '固定高度模式下的终端行数，必须为 1–100 的正整数。',
  'The number of spaces for each tab stop. When a tab character is received, the cursor will move to the next tab stop. Must be an integer between 1 and 16. A line will not wrap due to receiving tab characters, the cursor will stay at the end of the line.': '每个制表位的空格数。收到 Tab 字符时光标移到下一个制表位；必须为 1–16 的整数。Tab 不会触发换行，超过行尾时光标停在行末。',
  'The max. number of rows to store in any terminal scrollback buffer (TX, RX, TX/RX). Increasing this will give you more history but decrease performance and increase memory usage. Must be a positive non-zero integer.': '各终端回滚缓冲区（TX、RX、TX/RX）最多保存的行数。增大可保留更多历史，但会降低性能并增加内存占用；必须为大于 0 的整数。',
  'Automatically jump to the bottom of the terminal and scroll lock when you type TX data into a terminal.': '在终端输入发送数据时自动跳到底部并锁定滚动。',
  'Enable or disable tooltips globally throughout the application. Disabling them might be useful if you know what you are doing and you find they are just getting in the way.': '全局启用或关闭应用内提示气泡。熟悉功能后若觉得提示妨碍操作，可以将其关闭。',
  'The delay time (in milliseconds) before tooltips are shown when hovering over elements. Must be between 0 and 5000ms. You can increase this if you find the tooltips are appearing too soon and getting in the way. Another option is to disable tooltips entirely.': '鼠标悬停后显示提示气泡的延迟（毫秒），范围 0–5000。若提示出现过快影响操作，可增大此值或彻底关闭提示。',
  'Control whether a combined TX/RX terminal or two separate terminals are displayed.': '选择显示合并的 TX/RX 终端，还是分别显示两个终端。',
  "The two common ways of new terminal rows being created is either by receiving a LF char, or by running out of columns in the terminal, and the text wrapping onto a new row. When enabled, LF will not be added to the clipboard if the row was created due to wrapping. You generally want this enabled so that you can paste large chunks of received data into an external program without getting new lines inserted where they weren't in the original data.": '终端新行通常由收到 LF 或文本到达行尾自动换行产生。启用后，复制由自动换行产生的行时不会向剪贴板插入 LF，可避免粘贴到其他程序时出现原数据中不存在的换行。',
  'You usually want this enabled, as when copying text to the clipboard on Windows, LF is automatically replaced with CRLF. So this will undo that operation when pasting, meaning you can copy terminal text and then paste it and get the same data.': '通常建议启用。Windows 复制文本时会将 LF 自动替换为 CRLF，此选项会在粘贴时撤销该转换，使复制后再粘贴得到相同数据。',
  'When enabled, NinjaTerm will automatically check for updates on startup. When disabled, you can still manually check for updates using the button below.': '启用后 NinjaTerm 会在启动时自动检查更新；关闭后仍可用下方按钮手动检查。',
  'When enabled, NinjaTerm starts a local HTTP server that AI tools can connect to. The server only accepts connections from 127.0.0.1 (this machine).': '启用后 NinjaTerm 会启动供 AI 工具连接的本地 HTTP 服务器，并且只接受来自本机 127.0.0.1 的连接。',

  // Rules, search and terminal actions
  'JavaScript regex source. Matches are evaluated per finalised row (i.e. once the newline arrives). Catastrophic regexes — e.g. nested quantifiers — can hang the renderer; you supply the pattern, so write it sensibly.': 'JavaScript 正则表达式。每行结束（收到换行）后执行匹配。灾难性正则（如嵌套量词）可能卡住界面，请谨慎编写。',
  'Pick background color': '选择背景颜色',
  '"Matched text only" paints the background just over the characters the regex captured. "Entire line" paints every character of the matched line, including wrap segments — useful for rules like \\bERROR\\b where the whole row should read as red.': '“仅匹配文本”只给正则匹配到的字符着色；“整行”会给匹配行的所有字符（含自动换行段）着色，适合 ERROR 等需要整行高亮的规则。',
  'Match case': '区分大小写',
  'Use regular expression': '使用正则表达式',
  'Previous match (Shift+Enter)': '上一个匹配项（Shift+Enter）',
  'Next match (Enter)': '下一个匹配项（Enter）',
  'Close (Esc)': '关闭（Esc）',
  'Copy all the text in this terminal (including the scrollback buffer) to the clipboard.': '将此终端中的全部文本（含回滚缓冲区）复制到剪贴板。',
  'Type a line, press Enter to send': '输入一行内容，按 Enter 发送',
  'Switch language / 切换语言': '切换语言 / Switch language',

  // TX settings tooltips
  'Send each keystroke the moment it is pressed. This is how a traditional terminal behaves, and is what you want when talking to something with a shell or command-line interface.': '按键时立即逐字符发送。这是传统终端的行为，适合与 Shell 或命令行界面交互。',
  'Compose a line in the bar below the terminal and send the whole thing as a single write when you press Enter. Some devices - SCPI instruments over TCP being the common case - only accept a command that arrives in one piece, and will ignore one split across a write per character.': '先在终端下方编辑完整一行，按 Enter 后一次性写出。某些设备（常见于 TCP 上的 SCPI 仪器）只接受一次完整到达的命令，会忽略逐字符分次写入的命令。',
  'Open the NinjaTerm manual in your browser, at the section explaining the difference between character and line mode.': '在浏览器中打开 NinjaTerm 手册中字符模式与行模式的说明。',
  'Send the line feed (LF, "\\n") char (0x0A) when the enter key is pressed.': '按 Enter 时发送换行符 LF（\\n，0x0A）。',
  'Send the carriage return (CR, "\\r") char (0x0D) when the enter key is pressed.': '按 Enter 时发送回车符 CR（\\r，0x0D）。',
  'Send both the carriage return and line feed chars (0x0D 0x0A) when the enter key is pressed.': '按 Enter 时依次发送回车和换行符（0x0D 0x0A）。',
  'Send a break signal when the enter key is pressed.': '按 Enter 时发送 Break 信号。',
  'Send the backspace control char (0x08) when the backspace key is pressed.': '按 Backspace 时发送退格控制字符（0x08）。',
  'Send the delete control char (0x7F) when the delete key is pressed.': '按 Delete 时发送删除控制字符（0x7F）。',
  'Send the backspace control char (0x08) when the delete key is pressed.': '按 Delete 时发送退格控制字符（0x08）。',
  'Send the VT sequence [ESC][3~ when the delete key is pressed. This is probably what you want if you are interacting with something that expects a terminal, such as the Zephyr shell. This is also what PuTTY and the nRF Serial Terminal send by default.': '按 Delete 时发送 VT 序列 [ESC][3~。与 Zephyr Shell 等终端交互时通常应选此项，PuTTY 和 nRF Serial Terminal 默认也发送该序列。',
  'Send ASCII control characters 0x01 through 0x1A when Ctrl+A through Ctrl+Z key combinations are pressed. This enables standard terminal control sequences.': '按 Ctrl+A 至 Ctrl+Z 时发送 ASCII 控制字符 0x01–0x1A，以启用标准终端控制序列。',
  "This emulates terminal meta key behavior. Some key presses like Alt-F (move cursor forward by 1 word) and Alt-B (move cursor backwards by 1 word) are supported by Zephyr and other shells. Unfortunately a few key combos get caught by the browser and not passed to NinjaTerm so we can't catch them. This includes Alt-F.": '模拟终端 Meta 键行为。Zephyr 等 Shell 支持 Alt-F（前移一个单词）、Alt-B（后移一个单词）等组合键；部分组合键会被浏览器截获而无法传给 NinjaTerm，其中包括 Alt-F。',
  "When enabled (default): Ctrl+C copies selected text to clipboard; if nothing is selected, Ctrl+C sends 0x03 as normal (requires 'Send 0x01-0x1A when Ctrl+A thru Ctrl+Z is pressed' to also be enabled). Ctrl+V always pastes clipboard text to the serial port. This matches the behavior of Windows Terminal and iTerm2. When disabled: Ctrl+C/V always send control codes (0x03/0x16); use Ctrl+Shift+C/V for copy/paste.": '启用时（默认）：Ctrl+C 在有选中文本时复制，否则照常发送 0x03（还需启用 Ctrl+A–Z 控制字符）；Ctrl+V 始终把剪贴板文本发送到端口，行为与 Windows Terminal 和 iTerm2 一致。关闭后 Ctrl+C/V 始终发送控制码，复制粘贴请用 Ctrl+Shift+C/V。',
  'When enabled (default): Ctrl+F opens the find bar over the focused terminal pane. When disabled: Ctrl+F passes through to the Ctrl+A-Z handler, sending the ACK control byte (0x06) to the connected device — useful if your target firmware listens for it. The on-screen find magnifier buttons next to each terminal still open find regardless of this setting.': '启用时（默认），Ctrl+F 打开当前终端的查找栏。关闭后，Ctrl+F 交给 Ctrl+A–Z 处理并向设备发送 ACK 控制字节（0x06）；屏幕上的放大镜按钮仍可随时打开查找。',

  // Macro tooltips and labels
  'The selected data type for this macro. A = ASCII, H = Hex.': '此宏选用的数据类型：A 表示 ASCII，H 表示十六进制。',
  'The data to send for this macro.': '此宏要发送的数据。',
  'Send the data to the serial port.': '将数据发送到端口。',
  'send-macro-data': '发送宏数据',
  'More settings for this macro.': '此宏的更多设置。',
  'more-settings-for-macro': '宏的更多设置',
  'Treat data as': '数据解析方式',
  'Treat the data as ASCII.': '将数据按 ASCII 解析。',
  'Treat the data as hex.': '将数据按十六进制解析。',
  'ASCII settings': 'ASCII 设置',
  'If enabled, and the data type is ASCII, the text will be processed for escape characters (by calling JSON.parse()). This means you can use things like "\\n" to insert a LF character (0x0A) and "\\r" to insert a CR character (0x0D).': '启用后，ASCII 文本会通过 JSON.parse() 处理转义字符，因此可用“\\n”插入 LF（0x0A），用“\\r”插入 CR（0x0D）。',
  'Hex settings': '十六进制设置',
  'If ticked, a break signal will be sent at the end of every line of hex in the macro data. This can be useful if the device you are talking to uses the break signal to frame raw data.': '勾选后，宏数据中每行十六进制内容末尾都会发送 Break 信号，适用于用 Break 对原始数据分帧的设备。',
  'Macro data': '宏数据',
  'Triggers': '触发器',
  'Send this macro automatically every time the serial port transitions to opened.': '每次端口进入已打开状态时自动发送此宏。',
  "When enabled, every finalised line of received data is tested against the pattern below (interpreted as a JavaScript regex). The macro fires for each line that matches. TX echo is ignored, so a macro can't trigger itself via its own response.": '启用后，每一行完整的接收数据都会用下方 JavaScript 正则表达式匹配；每个匹配行都会触发一次宏。发送回显会被忽略，因此宏不会通过自身响应触发自己。',
  'When enabled, the macro is sent every N milliseconds for as long as the serial port is open. The timer pauses on disconnect and resumes (from zero) on the next connect.': '启用后，只要端口保持打开，就每隔 N 毫秒发送一次宏。断开时计时暂停，下次连接后从零重新计时。',

  // Accessibility landmarks that otherwise surface in screen readers
  'main': '主内容',

  // Remaining visible JSX copy found by the full UI audit
  'Select fake port to connect to.': '选择要连接的模拟端口。',
  'No fake ports match "': '没有与“',
  ' | Plots:': ' | 曲线：',
  'Directory status:&nbsp;': '目录状态：&nbsp;',
  'Move left': '向左移动',
  'Move right': '向右移动',
  'Rename session': '重命名会话',
  'Check this if you want to be able to quickly change settings when the serial port is open. If a serial port setting is changed when the port is open, the port will be quickly closed and opened again.': '启用后可在串口打开时快速修改设置；修改后端口会立即关闭并重新打开。',
  'This setting is more relevant for the quick connection settings in the right-hand drawer on the terminal view.': '此设置主要用于终端视图右侧抽屉中的快速连接设置。',
  'No serial ports found. Click "Rescan" to search for ports.': '未发现串口，请单击“重新扫描”搜索端口。',
  'Running on http://127.0.0.1:': '运行地址：http://127.0.0.1:',
  'Tools:': '工具：',
  'Resources:': '资源：',
  '— subscribe for push notifications when new serial data arrives; read to get buffered data since last read': '— 可订阅新串口数据的推送通知；读取时获取自上次读取以来的缓冲数据',
  'Apply preset &quot;': '应用预设“',
  '&quot;?': '”？',
  'Edit Highlight Rule': '编辑高亮规则',
  'Background color:': '背景颜色：',
  'Highlight scope': '高亮范围',
  'Entire line (incl. wraps)': '整行（含自动换行）',
  'Ding (pass)': '提示音（通过）',
  'Buzzer (fail)': '蜂鸣声（失败）',
  'Test Ding': '测试提示音',
  'Test Buzzer': '测试蜂鸣声',
  'Macro Settings': '宏设置',
  'If enabled, the "On Enter" sequence will be appended to every line in the macro data. This is useful if you want each line of ASCII macro data to behave to same in this text box as it would if typed in the terminal.': '启用后，会在宏数据的每一行末尾追加“按 Enter 时”的序列，使 ASCII 宏数据的每一行与在终端中逐行输入时行为一致。',
  'You can also change the "On Enter" sequence below.': '也可以在下方修改“按 Enter 时”的序列。',
  'What to send at the end of every line in the macro data text box, if the above checkbox is ticked.': '勾选上方选项后，宏数据文本框每一行末尾要发送的内容。',
  'This is the same setting as in the TX settings view.': '此项与“发送设置”中的对应设置相同。',
  'On Enter value': '按 Enter 时的值',
  'If ASCII, all printable characters are allowed. If the "Send on enter sequence at the end of every line" checkbox is ticked, there will be additional bytes sent at the end of every line.': 'ASCII 模式允许所有可打印字符。若勾选“每行末尾发送 Enter 序列”，每一行末尾还会发送额外字节。',
  'If hex, only the characters 0-9 and A-F, spaces and new lines are allowed. There must be an even number of characters as to make up a complete number of bytes (e.g. 08 A2 FF). If the "Send break at end of every line of hex" checkbox is ticked, each line has to contain an even number of characters rather than just the whole textbox.': '十六进制模式只允许 0–9、A–F、空格和换行。字符数必须为偶数，才能组成完整字节（例如 08 A2 FF）。若勾选“每行十六进制末尾发送 Break”，则每一行都必须包含偶数个字符，而不只是整个文本框总数为偶数。',
};

// MUI commonly applies `text-transform: uppercase` in CSS while the DOM still
// contains title-case text. A case-insensitive fallback keeps button variants
// such as "Show Side Panel" and "SHOW SIDE PANEL" in sync without duplicating
// every spelling in the table.
const zhCNCaseInsensitive = new Map(
  Object.entries(zhCN).map(([source, target]) => [source.toLocaleLowerCase('en-US'), target]),
);

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
let language: UiLanguage =
  (localStorage.getItem(STORAGE_KEY) as UiLanguage | null) ?? 'zh-CN';
let observer: MutationObserver | undefined;

function excluded(node: Node): boolean {
  const element = node.nodeType === Node.ELEMENT_NODE
    ? node as Element
    : node.parentElement;
  if (element?.closest('[data-i18n-localize="true"]')) return false;
  return Boolean(element?.closest('.terminal-row, pre, code'));
}

function translated(value: string): string {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const core = value.slice(leading.length, value.length - trailing.length);
  let replacement: string | undefined = zhCN[core];

  // JSX paragraphs are often formatted over several source lines. Browsers
  // collapse that whitespace visually, so use the same collapsed form as a
  // dictionary fallback while preserving leading/trailing layout whitespace.
  if (replacement === undefined) {
    replacement = zhCN[core.replace(/\s+/g, ' ')];
  }

  if (replacement === undefined) {
    replacement = zhCNCaseInsensitive.get(core.replace(/\s+/g, ' ').toLocaleLowerCase('en-US'));
  }

  if (replacement === undefined) {
    const session = core.match(/^Session (\d+)$/);
    if (session) replacement = `会话 ${session[1]}`;
  }

  if (replacement === undefined) {
    const graphStats = core.match(/^Data:\s*(\d+)\s*\|\s*Plots:\s*(\d+)$/);
    if (graphStats) replacement = `数据：${graphStats[1]} | 图表：${graphStats[2]}`;
  }

  if (replacement === undefined) {
    const bufferBytes = core.match(/^Num\. bytes in buffer:\s*(\d+)$/);
    if (bufferBytes) replacement = `缓冲区字节数：${bufferBytes[1]}`;
  }

  if (replacement === undefined) {
    const selectedDirectory = core.match(/^Selected directory:\s*(.+)$/);
    if (selectedDirectory) replacement = `已选目录：${selectedDirectory[1]}`;
  }

  if (replacement === undefined) {
    const applyPreset = core.match(/^Apply "(.+)" to your current settings\.$/);
    if (applyPreset) replacement = `将“${applyPreset[1]}”应用到当前设置。`;
  }

  if (replacement === undefined) {
    const existingPreset = core.match(/^A preset called "(.+)" already exists and will be replaced\.$/);
    if (existingPreset) replacement = `名为“${existingPreset[1]}”的预设已存在，将被替换。`;
  }

  if (replacement === undefined) {
    const status = core.match(/^Status:\s*(.+)$/);
    if (status) {
      const states: Record<string, string> = {
        CLOSED: '已关闭',
        OPENED: '已打开',
        'CLOSED (will reopen)': '已关闭（将重连）',
      };
      replacement = `状态：${states[status[1]] ?? status[1]}`;
    }
  }

  if (replacement === undefined) {
    const connectionStatus = core.match(/^(Port|Socket|Bluetooth|RTT) (NOT CONN \(will reopen\)|NOT CONN|CONN|UNKNOWN)$/);
    if (connectionStatus) {
      const connectionNames: Record<string, string> = {
        Port: '串口',
        Socket: '网络套接字',
        Bluetooth: '低功耗蓝牙',
        RTT: 'RTT',
      };
      const states: Record<string, string> = {
        'NOT CONN (will reopen)': '未连接（等待重连）',
        'NOT CONN': '未连接',
        CONN: '已连接',
        UNKNOWN: '状态未知',
      };
      replacement = `${connectionNames[connectionStatus[1]]}${states[connectionStatus[2]]}`;
    }
  }

  if (replacement === undefined && core.startsWith('NinjaTerm - ')) {
    const suffix = core.slice('NinjaTerm - '.length);
    replacement = `NinjaTerm 中文版 - ${translated(suffix)}`;
  }

  if (replacement === undefined) {
    const update = core.match(/^Update v(.+) is available and will be downloaded in the background\.$/);
    if (update) replacement = `发现新版本 v${update[1]}，将在后台下载。`;
  }

  if (replacement === undefined && core.includes('Performance Report:')) {
    replacement = core
      .replace('Performance Report:', '性能报告：')
      .replace('- Frame Rate:', '- 帧率：')
      .replace('- Data Throughput:', '- 数据吞吐量：')
      .replace('- Avg Data Processing:', '- 平均数据处理耗时：')
      .replace('- Avg Terminal Render:', '- 平均终端渲染耗时：')
      .replace('- Avg Graphing Processing:', '- 平均绘图处理耗时：')
      .replace('- Health Status: Healthy', '- 健康状态：良好')
      .replace('- Health Status: Degraded', '- 健康状态：欠佳')
      .replace('- Samples:', '- 样本数：');
  }

  if (replacement === undefined) {
    const performanceFailure = core.match(/^Error running performance tests:\s*(.+)$/s);
    if (performanceFailure) replacement = `运行性能测试失败：${translated(performanceFailure[1])}`;
  }

  if (replacement === undefined) {
    const foundJLink = core.match(/^Found J-Link Commander at (.+)$/);
    if (foundJLink) replacement = `已找到 J-Link Commander：${foundJLink[1]}`;
  }

  // Connection snackbars combine a generic prefix with a backend-specific
  // message. Translate the nested RTT/J-Link error as well as the prefix.
  if (replacement === undefined) {
    const openError = core.match(/^Error opening connection:\s*(.+)$/s);
    if (openError) replacement = `打开连接失败：${translated(openError[1])}`;
  }

  if (replacement === undefined) {
    const probeMissing = core.match(/^J-Link probe not found while attempting to attach to "(.+)"\.\s*(.+)$/s);
    if (probeMissing) replacement = `连接目标“${probeMissing[1]}”时未找到 J-Link 探针：${translated(probeMissing[2])}`;
  }

  if (replacement === undefined) {
    const probeSerial = core.match(/^Could not select probe with S\/N (.+?):\s*(.+)$/s);
    if (probeSerial) replacement = `无法选择序列号为 ${probeSerial[1]} 的 J-Link 探针：${translated(probeSerial[2])}`;
  }

  if (replacement === undefined) {
    const unknownTarget = core.match(/^Unknown target device "(.+)"\. J-Link does not recognise this name\. Check the "Target device" field in Connection Settings\.$/);
    if (unknownTarget) replacement = `未知目标器件“${unknownTarget[1]}”。J-Link 无法识别该名称，请检查连接设置中的“目标器件”。`;
  }

  if (replacement === undefined) {
    const setDevice = core.match(/^Setting device to "(.+)" failed:\s*(.+)$/s);
    if (setDevice) replacement = `设置目标器件“${setDevice[1]}”失败：${translated(setDevice[2])}`;
  }

  if (replacement === undefined) {
    const selectInterface = core.match(/^Failed to select interface (.+?):\s*(.+)$/s);
    if (selectInterface) replacement = `选择调试接口 ${selectInterface[1]} 失败：${translated(selectInterface[2])}`;
  }

  if (replacement === undefined) {
    const attachTarget = core.match(/^Failed to attach to target "(.+)":\s*(.+)$/s);
    if (attachTarget) replacement = `连接目标“${attachTarget[1]}”失败：${translated(attachTarget[2])}`;
  }

  if (replacement === undefined) {
    const startRtt = core.match(/^Failed to start RTT:\s*(.+)$/s);
    if (startRtt) replacement = `启动 RTT 失败：${translated(startRtt[1])}`;
  }

  if (replacement === undefined) {
    const commanderMissing = core.match(/^J-Link Commander not found at "(.+)"\. Click Locate to auto-detect or Browse to pick a different file\.$/);
    if (commanderMissing) replacement = `在“${commanderMissing[1]}”未找到 J-Link Commander。请单击“自动查找”，或使用“浏览”选择其他文件。`;
  }

  if (replacement === undefined) {
    const rttWrite = core.match(/^RTT write failed:\s*(.+)$/s);
    if (rttWrite) replacement = `RTT 写入失败：${translated(rttWrite[1])}`;
  }

  if (replacement === undefined) {
    const partialWrite = core.match(/^Partial RTT write \((\d+)\/(\d+) bytes\) — target down-buffer is full\.$/);
    if (partialWrite) replacement = `RTT 仅写入 ${partialWrite[1]}/${partialWrite[2]} 字节——目标下行缓冲区已满。`;
  }

  if (replacement === undefined) {
    const rttError = core.match(/^RTT error:\s*(.+)$/s);
    if (rttError) replacement = `RTT 错误：${translated(rttError[1])}`;
  }

  if (replacement === undefined) {
    const probeDisconnected = core.match(/^J-Link probe disconnected \(cable unplugged\?\)\. Was attached to "(.+)"\.$/);
    if (probeDisconnected) replacement = `J-Link 探针已断开（线缆是否被拔出？），此前连接的目标为“${probeDisconnected[1]}”。`;
  }

  if (replacement === undefined) {
    const rttConnected = core.match(/^RTT connected \((.+)\)\.$/);
    if (rttConnected) replacement = `RTT 已连接（${rttConnected[1]}）。`;
  }

  if (replacement === undefined) {
    const rttReconnected = core.match(/^Automatically reconnected RTT to "(.+)"\.$/);
    if (rttReconnected) replacement = `已自动重新连接 RTT 目标“${rttReconnected[1]}”。`;
  }

  if (replacement === undefined) {
    const downloadedUpdate = core.match(/^Update v(.+) has been downloaded\. Restart NinjaTerm to install\.$/);
    if (downloadedUpdate) replacement = `版本 v${downloadedUpdate[1]} 已下载，重启 NinjaTerm 即可安装。`;
  }

  if (replacement === undefined) {
    const updateFailure = core.match(/^Update check failed:\s*(.+)$/s);
    if (updateFailure) replacement = `检查更新失败：${translated(updateFailure[1])}`;
  }

  if (replacement === undefined) {
    const developerToolsFailure = core.match(/^Failed to (open|close|toggle) developer tools:\s*(.+)$/s);
    if (developerToolsFailure) {
      const actions: Record<string, string> = { open: '打开', close: '关闭', toggle: '切换' };
      replacement = `${actions[developerToolsFailure[1]]}开发者工具失败：${translated(developerToolsFailure[2])}`;
    }
  }

  if (replacement === undefined) {
    const developerToolsAction = core.match(/^Developer tools (opened|closed)$/);
    if (developerToolsAction) replacement = `开发者工具已${developerToolsAction[1] === 'opened' ? '打开' : '关闭'}`;
  }

  if (replacement === undefined) {
    const installUpdateFailure = core.match(/^Failed to install update:\s*(.+)$/s);
    if (installUpdateFailure) replacement = `安装更新失败：${translated(installUpdateFailure[1])}`;
  }

  if (replacement === undefined) {
    const serialError = core.match(/^Serial port error:\s*(.+)$/s);
    if (serialError) replacement = `串口错误：${translated(serialError[1])}`;
  }

  if (replacement === undefined) {
    const socketError = core.match(/^Socket error:\s*(.+)$/s);
    if (socketError) replacement = `网络套接字错误：${translated(socketError[1])}`;
  }

  if (replacement === undefined) {
    const serialReconnect = core.match(/^Automatically reconnected to port:\s*(.+)$/s);
    if (serialReconnect) replacement = `已自动重新连接串口：${serialReconnect[1]}`;
  }

  if (replacement === undefined) {
    const socketConnected = core.match(/^Socket connected to (.+):(\d+)\.$/);
    if (socketConnected) replacement = `已连接网络套接字 ${socketConnected[1]}:${socketConnected[2]}。`;
  }

  if (replacement === undefined) {
    const socketReconnect = core.match(/^Automatically reconnected to socket:\s*(.+):(\d+)$/);
    if (socketReconnect) replacement = `已自动重新连接网络套接字：${socketReconnect[1]}:${socketReconnect[2]}`;
  }

  if (replacement === undefined) {
    const bluetoothFailure = core.match(/^Failed to (start|stop) Bluetooth scan\. Error:\s*(.+)\.$/s);
    if (bluetoothFailure) replacement = `${bluetoothFailure[1] === 'start' ? '启动' : '停止'}蓝牙扫描失败：${translated(bluetoothFailure[2])}`;
  }

  if (replacement === undefined) {
    const bluetoothConnectFailure = core.match(/^Failed to (start connection attempt to|connect to|disconnect from) Bluetooth device\. Error:\s*(.+)\.$/s);
    if (bluetoothConnectFailure) {
      const actions: Record<string, string> = {
        'start connection attempt to': '开始连接',
        'connect to': '连接',
        'disconnect from': '断开',
      };
      replacement = `${actions[bluetoothConnectFailure[1]]}蓝牙设备失败：${translated(bluetoothConnectFailure[2])}`;
    }
  }

  if (replacement === undefined) {
    const bluetoothSetupFailure = core.match(/^Failed to setup read and write on connected Bluetooth device\. Error:\s*(.+)\.$/s);
    if (bluetoothSetupFailure) replacement = `配置蓝牙设备读写失败：${translated(bluetoothSetupFailure[1])}`;
  }

  if (replacement === undefined) {
    const bluetoothConnected = core.match(/^Bluetooth device connected:\s*(.+) \((.+)\)\.$/s);
    if (bluetoothConnected) replacement = `蓝牙设备已连接：${bluetoothConnected[1]}（${bluetoothConnected[2]}）。`;
  }

  if (replacement === undefined) {
    const bluetoothDisconnected = core.match(/^Bluetooth device disconnected( unexpectedly)?:\s*(.+) \((.+)\)\.$/s);
    if (bluetoothDisconnected) {
      replacement = `蓝牙设备${bluetoothDisconnected[1] ? '意外' : '已'}断开：${bluetoothDisconnected[2]}（${bluetoothDisconnected[3]}）。`;
    }
  }

  if (replacement === undefined) {
    const writeFailure = core.match(/^(Failed to write to|Error writing to) log file:\s*(.+)$/s);
    if (writeFailure) replacement = `写入日志文件失败：${translated(writeFailure[2])}`;
  }

  if (replacement === undefined) {
    const dataWriteFailure = core.match(/^Error writing data:\s*(.+)$/s);
    if (dataWriteFailure) replacement = `写入数据失败：${translated(dataWriteFailure[1])}`;
  }

  if (replacement === undefined) {
    const copiedChars = core.match(/^(\d+) chars copied to clipboard\.$/);
    if (copiedChars) replacement = `已将 ${copiedChars[1]} 个字符复制到剪贴板。`;
  }

  if (replacement === undefined) {
    const presetChanged = core.match(/^Preset "(.+)" (saved|updated)\.$/s);
    if (presetChanged) replacement = `预设“${presetChanged[1]}”已${presetChanged[2] === 'saved' ? '保存' : '更新'}。`;
  }

  if (replacement === undefined) {
    const presetDeleted = core.match(/^Deleted preset "(.+)"\.$/s);
    if (presetDeleted) replacement = `预设“${presetDeleted[1]}”已删除。`;
  }

  if (replacement === undefined) {
    const presetApplied = core.match(/^Applied the "(.+)" preset\.(?:\s*\nConnected to (.+)\.)?$/s);
    if (presetApplied) {
      replacement = `已应用预设“${presetApplied[1]}”。${presetApplied[2] ? `\n已连接到 ${presetApplied[2]}。` : ''}`;
    }
  }

  if (replacement === undefined) {
    const graphNaN = core.match(/^Graphing received NaN value for ([xy])-axis\. Skipping data point\. rxDataBuffer:\s*(.*)$/s);
    if (graphNaN) replacement = `绘图收到 ${graphNaN[1].toUpperCase()} 轴的 NaN 值，已跳过该数据点。接收缓冲区：${graphNaN[2]}`;
  }

  if (replacement === undefined) {
    const graphNoY = core.match(/^Graphing: No valid Y values found in line\. rxDataBuffer:\s*(.*)$/s);
    if (graphNoY) replacement = `绘图：本行未找到有效的 Y 值。接收缓冲区：${graphNoY[1]}`;
  }

  if (replacement === undefined) {
    const graphParseFailure = core.match(/^Error parsing plot command(s)?:\s*(.+)$/s);
    if (graphParseFailure) replacement = `解析绘图命令失败：${translated(graphParseFailure[2])}`;
  }

  if (replacement === undefined) {
    const unknownGraphCommand = core.match(/^Unknown graph command:\s*(.+)$/s);
    if (unknownGraphCommand) replacement = `未知的图表命令：${unknownGraphCommand[1]}`;
  }

  if (replacement === undefined) {
    const missingGraphObject = core.match(/^(Plot|Trace) (.+) does not exist$/s);
    if (missingGraphObject) replacement = `${missingGraphObject[1] === 'Plot' ? '图表' : '曲线'} ${missingGraphObject[2]} 不存在`;
  }

  if (replacement === undefined) {
    const invalidXType = core.match(/^Invalid xtype: (.+)\. Must be data, counter, or timestamp$/s);
    if (invalidXType) replacement = `无效的 xtype：${invalidXType[1]}。必须为 data、counter 或 timestamp`;
  }

  if (replacement === undefined) {
    const socketTimeout = core.match(/^The timeout for the socket connection in milliseconds\. If the connection is not established within this time, the attempt will be aborted\. Must be between (\d+) and (\d+) \(inclusive\)\.$/);
    if (socketTimeout) replacement = `网络套接字连接超时时间（毫秒）。若未在此时间内建立连接，本次尝试将中止；取值必须在 ${socketTimeout[1]} 至 ${socketTimeout[2]} 之间（含端点）。`;
  }

  if (replacement === undefined) {
    const rttSpeed = core.match(/^Debug interface clock speed in kHz\. Typical values: 1000-50000\. Must be between (\d+) and (\d+) \(inclusive\)\.$/);
    if (rttSpeed) replacement = `调试接口时钟频率（kHz），常用值为 1000–50000；取值必须在 ${rttSpeed[1]} 至 ${rttSpeed[2]} 之间（含端点）。`;
  }

  if (replacement === undefined) {
    const rttChannel = core.match(/^RTT up\/down channel index \((\d+)-(\d+)\)\. Almost all firmwares use channel 0 \(Terminal\) — leave at 0 unless you know your firmware uses a different RTT channel\.$/);
    if (rttChannel) replacement = `RTT 上下行通道索引（${rttChannel[1]}–${rttChannel[2]}）。几乎所有固件都使用通道 0（终端）；除非固件明确使用其他通道，否则保持为 0。`;
  }

  if (replacement === undefined) {
    const bleDuration = core.match(/^The duration \(in milliseconds\) to scan for Bluetooth LE devices\. After this time, the scan will automatically stop\. You can always stop the scan prior to this timeout by clicking the 'Stop scanning' button\. Must be between (\d+) and (\d+) \(inclusive\)\.$/);
    if (bleDuration) replacement = `扫描低功耗蓝牙设备的时长（毫秒）。到时会自动停止，也可提前单击“停止扫描”；取值必须在 ${bleDuration[1]} 至 ${bleDuration[2]} 之间（含端点）。`;
  }

  return replacement === undefined ? value : `${leading}${replacement}${trailing}`;
}

function localizeTextNode(node: Text): void {
  if (excluded(node)) return;
  const previous = originalText.get(node);
  if (previous === undefined) {
    originalText.set(node, node.data);
  } else {
    const previousTranslation = translated(previous);
    // React may reuse a text node for a changing status/label.  Treat a value
    // that is neither the source nor our translation as new application text.
    if (node.data !== previous && node.data !== previousTranslation) {
      originalText.set(node, node.data);
    }
  }
  const source = originalText.get(node) ?? node.data;
  const next = language === 'zh-CN' ? translated(source) : source;
  if (node.data !== next) node.data = next;
}

function localizeElement(element: Element): void {
  if (excluded(element)) return;
  for (const name of ['title', 'aria-label', 'placeholder']) {
    const current = element.getAttribute(name);
    if (current === null) continue;
    let attrs = originalAttributes.get(element);
    if (!attrs) {
      attrs = new Map<string, string>();
      originalAttributes.set(element, attrs);
    }
    if (!attrs.has(name)) attrs.set(name, current);
    const previous = attrs.get(name) ?? current;
    if (current !== previous && current !== translated(previous)) {
      attrs.set(name, current);
    }
    const source = attrs.get(name) ?? current;
    const next = language === 'zh-CN' ? translated(source) : source;
    if (current !== next) element.setAttribute(name, next);
  }
}

function localizeTree(root: Node): void {
  if (root.nodeType === Node.TEXT_NODE) {
    localizeTextNode(root as Text);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  const element = root as Element;
  if (excluded(element)) return;
  localizeElement(element);
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
  );
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (node.nodeType === Node.TEXT_NODE) localizeTextNode(node as Text);
    else localizeElement(node as Element);
  }
}

export function installLocalization(): void {
  document.documentElement.lang = language;
  observer?.disconnect();
  observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'characterData') localizeTree(mutation.target);
      for (const node of mutation.addedNodes) localizeTree(node);
      if (mutation.type === 'attributes') localizeElement(mutation.target as Element);
    }
  });
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ['title', 'aria-label', 'placeholder'],
  });
  localizeTree(document.documentElement);
}

/** Stops DOM observation. Primarily useful for tests and hot reload. */
export function disconnectLocalization(): void {
  observer?.disconnect();
  observer = undefined;
}

export function getUiLanguage(): UiLanguage {
  return language;
}

export function setUiLanguage(next: UiLanguage): void {
  language = next;
  localStorage.setItem(STORAGE_KEY, next);
  document.documentElement.lang = next;
  localizeTree(document.documentElement);
}

export function toggleUiLanguage(): void {
  setUiLanguage(language === 'zh-CN' ? 'en' : 'zh-CN');
}

