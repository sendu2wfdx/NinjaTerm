import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import {
  disconnectLocalization,
  installLocalization,
  setUiLanguage,
  toggleUiLanguage,
} from './zhCN';

describe('Simplified-Chinese UI overlay', () => {
  beforeEach(() => {
    disconnectLocalization();
    localStorage.clear();
    document.body.innerHTML = '';
    setUiLanguage('zh-CN');
  });

  afterEach(() => {
    disconnectLocalization();
    document.body.innerHTML = '';
  });

  it('translates visible labels and accessibility attributes', () => {
    document.body.innerHTML = '<button aria-label="Show the terminal">Connect</button>';
    installLocalization();

    const button = document.querySelector('button');
    expect(button?.textContent).toBe('连接');
    expect(button?.getAttribute('aria-label')).toBe('显示终端');
    expect(document.documentElement.lang).toBe('zh-CN');
  });

  it('never translates terminal or diagnostic output', () => {
    document.body.innerHTML = '<div class="terminal-row">Connect</div><pre>Reset</pre>';
    installLocalization();

    expect(document.querySelector('.terminal-row')?.textContent).toBe('Connect');
    expect(document.querySelector('pre')?.textContent).toBe('Reset');
  });

  it('translates UI inserted after startup', async () => {
    installLocalization();
    const label = document.createElement('span');
    label.textContent = 'Connection';
    document.body.append(label);
    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(label.textContent).toBe('连接');
  });

  it('can switch back to the original English text', () => {
    document.body.innerHTML = '<span>General</span>';
    installLocalization();
    expect(document.body.textContent).toBe('常规');

    toggleUiLanguage();
    expect(document.body.textContent).toBe('General');
    expect(document.documentElement.lang).toBe('en');
  });

  it('translates dynamic status text and the window title', () => {
    document.title = 'NinjaTerm - Session 1';
    document.body.innerHTML = '<span>Status: CLOSED</span>';
    installLocalization();

    expect(document.title).toBe('NinjaTerm 中文版 - 会话 1');
    expect(document.body.textContent).toBe('状态：已关闭');
  });

  it('translates status labels split into separate React text nodes', () => {
    document.body.innerHTML = '<span><i>Status: </i><b>CLOSED</b></span><span>OPENED</span><span>CLOSED_BUT_WILL_REOPEN</span><span>RTT NOT CONN</span><span>Socket NOT CONN</span><span>Bluetooth CONN</span><span>Port UNKNOWN</span>';
    installLocalization();

    expect(document.querySelector('i')?.textContent).toBe('状态： ');
    expect(document.querySelector('b')?.textContent).toBe('已关闭');
    expect(document.querySelectorAll('span')[1]?.textContent).toBe('已打开');
    expect(document.querySelectorAll('span')[2]?.textContent).toBe('已关闭（等待重连）');
    expect(document.querySelectorAll('span')[3]?.textContent).toBe('RTT 未连接');
    expect(document.querySelectorAll('span')[4]?.textContent).toBe('网络套接字未连接');
    expect(document.querySelectorAll('span')[5]?.textContent).toBe('低功耗蓝牙已连接');
    expect(document.querySelectorAll('span')[6]?.textContent).toBe('串口状态未知');
  });

  it('translates default session names and multiline JSX paragraphs', () => {
    document.body.innerHTML = `
      <span>Session 12</span>
      <p>Rules paint the background of matching characters in the terminal scrollback and can
      optionally play a sound when a matching line completes. Rules are evaluated per
      finalised row.</p>`;
    installLocalization();

    expect(document.querySelector('span')?.textContent).toBe('会话 12');
    expect(document.querySelector('p')?.textContent).toContain('每一完整行都会执行规则匹配');
  });

  it('matches title-case button text and translates dynamic graphing text', () => {
    document.body.innerHTML = `
      <button>Show Side Panel</button>
      <span>Data: 12 | Plots: 3</span>
      <span>Num. bytes in buffer: 48</span>`;
    installLocalization();

    expect(document.querySelector('button')?.textContent).toBe('显示侧边栏');
    expect(document.querySelectorAll('span')[0]?.textContent).toBe('数据：12 | 图表：3');
    expect(document.querySelectorAll('span')[1]?.textContent).toBe('缓冲区字节数：48');
  });

  it('translates dynamic preset and logging descriptions', () => {
    document.body.innerHTML = `
      <span>A preset called "Board setup" already exists and will be replaced.</span>
      <span>Selected directory: C:\\logs</span>`;
    installLocalization();

    expect(document.querySelectorAll('span')[0]?.textContent).toBe('名为“Board setup”的预设已存在，将被替换。');
    expect(document.querySelectorAll('span')[1]?.textContent).toBe('已选目录：C:\\logs');
  });

  it('localizes explicitly opted-in preformatted UI reports without touching diagnostics', () => {
    document.body.innerHTML = `
      <pre data-i18n-localize="true">Performance Report:
- Frame Rate: 240.0 fps
- Health Status: Healthy
- Samples: 0</pre>
      <pre>Performance Report:</pre>`;
    installLocalization();

    const reports = document.querySelectorAll('pre');
    expect(reports[0]?.textContent).toContain('性能报告：');
    expect(reports[0]?.textContent).toContain('健康状态：良好');
    expect(reports[1]?.textContent).toBe('Performance Report:');
  });

  it('translates connection backend labels and dynamic RTT discovery messages', () => {
    document.body.innerHTML = `
      <span>Separate TX/RX terminals</span>
      <span>Socket Connection Settings</span>
      <span>First detected serial protocol</span>
      <span>Bluetooth</span>
      <span>no device</span>
      <span>Found J-Link Commander at C:\\SEGGER\\JLink.exe</span>`;
    installLocalization();

    const labels = document.querySelectorAll('span');
    expect(labels[0]?.textContent).toBe('分离发送/接收终端');
    expect(labels[1]?.textContent).toBe('网络套接字连接设置');
    expect(labels[2]?.textContent).toBe('首个检测到的串行协议');
    expect(labels[3]?.textContent).toBe('低功耗蓝牙');
    expect(labels[4]?.textContent).toBe('未选择器件');
    expect(labels[5]?.textContent).toBe('已找到 J-Link Commander：C:\\SEGGER\\JLink.exe');
  });

  it('translates parameterized RTT and J-Link snackbar errors', () => {
    document.body.innerHTML = `
      <span>Error opening connection: J-Link probe not found while attempting to attach to "HPM6750xVMx". No emulator (probe) connected on USB.</span>
      <span>Error opening connection: Unknown target device "HPM6750". J-Link does not recognise this name. Check the "Target device" field in Connection Settings.</span>
      <span>Error opening connection: Failed to attach to target "HPM6750xVMx": Connect to target failed.</span>`;
    installLocalization();

    const messages = document.querySelectorAll('span');
    expect(messages[0]?.textContent).toBe('打开连接失败：连接目标“HPM6750xVMx”时未找到 J-Link 探针：USB 上未连接 J-Link 仿真器（探针）。');
    expect(messages[1]?.textContent).toBe('打开连接失败：未知目标器件“HPM6750”。J-Link 无法识别该名称，请检查连接设置中的“目标器件”。');
    expect(messages[2]?.textContent).toBe('打开连接失败：连接目标“HPM6750xVMx”失败：连接目标失败。');
  });

  it('translates common runtime snackbar notifications', () => {
    document.body.innerHTML = `
      <span>Serial port error: Access denied</span>
      <span>Socket connected to 192.168.1.10:5000.</span>
      <span>Bluetooth device connected: Sensor (AA:BB:CC).</span>
      <span>Failed to write to log file: Disk full</span>
      <span>Preset "HPM6750" updated.</span>
      <span>24 chars copied to clipboard.</span>`;
    installLocalization();

    const messages = document.querySelectorAll('span');
    expect(messages[0]?.textContent).toBe('串口错误：Access denied');
    expect(messages[1]?.textContent).toBe('已连接网络套接字 192.168.1.10:5000。');
    expect(messages[2]?.textContent).toBe('蓝牙设备已连接：Sensor（AA:BB:CC）。');
    expect(messages[3]?.textContent).toBe('写入日志文件失败：Disk full');
    expect(messages[4]?.textContent).toBe('预设“HPM6750”已更新。');
    expect(messages[5]?.textContent).toBe('已将 24 个字符复制到剪贴板。');
  });

  it('translates graphing warnings without altering their diagnostic values', () => {
    document.body.innerHTML = `
      <span>Graphing received NaN value for y-axis. Skipping data point. rxDataBuffer: y=oops</span>
      <span>Plot scope does not exist</span>
      <span>Invalid xtype: sample. Must be data, counter, or timestamp</span>`;
    installLocalization();

    const messages = document.querySelectorAll('span');
    expect(messages[0]?.textContent).toBe('绘图收到 Y 轴的 NaN 值，已跳过该数据点。接收缓冲区：y=oops');
    expect(messages[1]?.textContent).toBe('图表 scope 不存在');
    expect(messages[2]?.textContent).toBe('无效的 xtype：sample。必须为 data、counter 或 timestamp');
  });

  it('translates settings tooltips and remaining action labels', () => {
    document.body.innerHTML = `
      <button title="Match case">Move left</button>
      <button aria-label="Previous match (Shift+Enter)">Macro Settings</button>
      <span title="Display timestamps in the ISO8601 format with millisecond precision and no timezone (e.g. &quot;2025-06-04T12:04:45.832&quot;).">Timestamp Format</span>
      <span title="Control whether a combined TX/RX terminal or two separate terminals are displayed.">Display</span>`;
    installLocalization();

    const buttons = document.querySelectorAll('button');
    const labels = document.querySelectorAll('span');
    expect(buttons[0]?.textContent).toBe('向左移动');
    expect(buttons[0]?.getAttribute('title')).toBe('区分大小写');
    expect(buttons[1]?.textContent).toBe('宏设置');
    expect(buttons[1]?.getAttribute('aria-label')).toBe('上一个匹配项（Shift+Enter）');
    expect(labels[0]?.getAttribute('title')).toContain('精确到毫秒且不含时区');
    expect(labels[1]?.getAttribute('title')).toBe('选择显示合并的 TX/RX 终端，还是分别显示两个终端。');
  });
});
