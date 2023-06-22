import { timestamp2Date } from '../src';


describe('timestamp2Date', () => {
  it('should format timestamp to default format', () => {
    const timestamp = 1687267792619;
    const formattedDate = timestamp2Date(timestamp);
    expect(formattedDate).toBe('2023-06-20');
  });

  it('should format timestamp to custom format (YYYY-MM-DD)', () => {
    const timestamp = 1687267792619;
    const format = 'YYYY-MM-DD';
    const formattedDate = timestamp2Date(timestamp, format);
    expect(formattedDate).toBe('2023-06-20');
  });

  it('should format timestamp to custom format (YYYY/MM/DD HH:mm:ss)', () => {
    const timestamp = 1687267792619;
    const format = 'YYYY/MM/DD HH:mm:ss';
    const formattedDate = timestamp2Date(timestamp, format);
    expect(formattedDate).toBe('2023/06/20 21:29:52');
  });

  it('should format timestamp to custom format (YYYY年MM月DD日 HH:mm:ss)', () => {
    const timestamp = 1687267792619;
    const format = 'YYYY年MM月DD日 HH:mm:ss';
    const formattedDate = timestamp2Date(timestamp, format);
    expect(formattedDate).toBe('2023年06月20日 21:29:52');
  });

  it('should format timestamp to custom format (YYYY-MM-DD HH:mm:ss)', () => {
    const timestamp = 1687267792619;
    const format = 'YYYY-MM-DD HH:mm:ss';
    const formattedDate = timestamp2Date(timestamp, format);
    expect(formattedDate).toBe('2023-06-20 21:29:52');
  });

  it('should return undefined for timestamp with length < 13', () => {
    const timestamp = 123456;
    const formattedDate = timestamp2Date(timestamp);
    expect(formattedDate).toBeUndefined();
  });

  it('should return undefined for timestamp with length < 13 (custom format)', () => {
    const timestamp = 123456;
    const format = 'YYYY-MM-DD';
    const formattedDate = timestamp2Date(timestamp, format);
    expect(formattedDate).toBeUndefined();
  });
});

