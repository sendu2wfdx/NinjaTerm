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
});
