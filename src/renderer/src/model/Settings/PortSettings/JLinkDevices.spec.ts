import { describe, expect, it } from 'vitest';

import { COMMON_JLINK_DEVICES } from './JLinkDevices';

describe('J-Link target device suggestions', () => {
  it('contains the HPM6750 device identifier used by J-Link V9.90', () => {
    expect(COMMON_JLINK_DEVICES).toContain('HPM6750xVMx');
  });

  it('does not contain duplicate device identifiers', () => {
    expect(new Set(COMMON_JLINK_DEVICES).size).toBe(COMMON_JLINK_DEVICES.length);
  });
});
