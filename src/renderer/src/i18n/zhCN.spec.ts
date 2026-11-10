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
});
