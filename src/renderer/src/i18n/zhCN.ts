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
  'Presets': '预设',
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
  'Serial Port': '串口',
  'Socket': '网络套接字',
  'Bluetooth LE': '低功耗蓝牙',
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
  'Port NOT CONN': '端口未连接',
  'HEX': '十六进制',
  'Data': '数据',
  'Name': '名称',
  'More settings': '更多设置',
  'Send on connect': '连接时发送',
  'Send on RX match': '接收匹配时发送',
  'Send on interval': '定时发送',
  'Interval (ms)': '间隔（ms）',
  'Process escape characters': '解析转义字符',

  // TX/RX settings
  'TX Mode': '发送模式',
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
  'After': '之后',
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
  'Other RX Settings': '其他接收设置',
  'Show a warning when break signals are received.': '收到 Break 信号时显示警告。',
  'ASCII Control Characters': 'ASCII 控制字符',
  'ANSI Escape Codes': 'ANSI 转义序列',
  'Enable ANSI escape code parsing': '启用 ANSI 转义序列解析',
  'Show unknown escape codes': '显示未知转义序列',
  'Add timestamps': '添加时间戳',
  'Timestamp format': '时间戳格式',
  'Line ending': '行结束符',
  'Carriage Return (CR)': '回车（CR）',
  'Line Feed (LF)': '换行（LF）',
  'CR + LF': 'CR + LF',

  // Display, rules and presets
  'Terminal Font': '终端字体',
  'Font Size': '字体大小',
  'Terminal Width': '终端宽度',
  'Terminal Height': '终端高度',
  'Scrollback Buffer': '回滚缓冲区',
  'Theme': '主题',
  'Dark': '深色',
  'Light': '浅色',
  'Tooltip delay': '工具提示延迟',
  'Highlight Rules': '高亮规则',
  'Add Rule': '添加规则',
  'Background Color': '背景颜色',
  'Enabled': '启用',
  'Sound': '声音',
  'Matched text only': '仅匹配文字',
  'Entire line': '整行',
  'Built-in presets': '内置预设',
  'Saved presets': '已保存预设',
  'Save current settings as preset': '将当前设置保存为预设',
  'Preset name': '预设名称',
  'Apply preset': '应用预设',
  'Delete preset': '删除预设',
  'Zephyr / RTOS shell': 'Zephyr / RTOS 命令行',
  'Plain-text log capture': '纯文本日志采集',
  'Hex dump': '十六进制转储',

  // Logging and graphing
  'Logging': '日志记录',
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
  'Start Graphing': '开始绘图',
  'Stop Graphing': '停止绘图',
  'Clear Graph': '清空图表',
  'X Axis': 'X 轴',
  'Y Axis': 'Y 轴',
  'Minimum': '最小值',
  'Maximum': '最大值',

  // General settings
  'Copy/Paste Settings': '复制与粘贴设置',
  'App Updates': '应用更新',
  'Enable automatic updates': '启用自动更新',
  'Check for Updates': '检查更新',
  'Update check failed. See the application log for details.': '更新检查失败，请稍后重试；详细信息已写入应用日志。',
  'No updates available. You are running the latest version.': '当前已是最新版本。',
  'MCP Server (AI Integration)': 'MCP 服务器（AI 集成）',
  'Enable MCP server': '启用 MCP 服务器',
  'Copy command': '复制命令',
  'Performance Testing': '性能测试',
  'Run Performance Tests': '运行性能测试',
  'Running Tests...': '正在测试…',
  'Show Current Metrics': '显示当前指标',
  'Developer Tools': '开发者工具',
  'Open Developer Tools': '打开开发者工具',
  'App Data': '应用数据',
  'Clear app data and reload app': '清除应用数据并重新加载',
  'Confirm Action': '确认操作',
  'This action cannot be undone.': '此操作无法撤销。',
};

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
let language: UiLanguage =
  (localStorage.getItem(STORAGE_KEY) as UiLanguage | null) ?? 'zh-CN';
let observer: MutationObserver | undefined;

function excluded(node: Node): boolean {
  const element = node.nodeType === Node.ELEMENT_NODE
    ? node as Element
    : node.parentElement;
  return Boolean(element?.closest('.terminal-row, pre, code'));
}

function translated(value: string): string {
  const leading = value.match(/^\s*/)?.[0] ?? '';
  const trailing = value.match(/\s*$/)?.[0] ?? '';
  const core = value.slice(leading.length, value.length - trailing.length);
  let replacement = zhCN[core];

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

  if (replacement === undefined && core.startsWith('NinjaTerm - ')) {
    replacement = `NinjaTerm 中文版 - ${core.slice('NinjaTerm - '.length)}`;
  }

  if (replacement === undefined) {
    const update = core.match(/^Update v(.+) is available and will be downloaded in the background\.$/);
    if (update) replacement = `发现新版本 v${update[1]}，将在后台下载。`;
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

