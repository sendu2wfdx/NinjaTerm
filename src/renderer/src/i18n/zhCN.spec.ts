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
});
