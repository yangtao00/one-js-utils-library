import { compareVersions } from '../src';

describe('compareVersions', () => {
  it('should correctly compare versions', () => {
    expect(compareVersions('1.2.3', '1.2.3')).toBe(0);
    expect(compareVersions('1.2.3', '1.2.4')).toBe(-1);
    expect(compareVersions('1.2.4', '1.2.3')).toBe(1);
    expect(compareVersions('1.10.0', '1.2.0')).toBe(1);
    expect(compareVersions('1.2.0', '1.10.0')).toBe(-1);
    expect(compareVersions('1.2.4', '1.2')).toBe(1);
    expect(compareVersions('1.2.0', '1.2')).toBe(0);
  });
});
