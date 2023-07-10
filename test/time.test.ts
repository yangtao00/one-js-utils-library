import { timestamp2Date, timestamp2WeekDay } from '../src';

// 时间戳转化为日期
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
    expect(formattedDate).toBe('1970-01-01');
  });

  it('should return undefined for timestamp with length < 13 (custom format)', () => {
    const timestamp = 123456;
    const format = 'YYYY-MM-DD';
    const formattedDate = timestamp2Date(timestamp, format);
    expect(formattedDate).toBe('1970-01-01');
  });
});

// 时间戳转化为周几
describe('timestamp2WeekDay', () => {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

  test('with valid timestamp', () => {
    const timestamp = new Date('2023-07-10').valueOf();
    expect(timestamp2WeekDay(timestamp)).toBe('周一');
  });

  test('with invalid timestamp', () => {
    const timestamp = -1; // 无效的时间戳
    const currentDay = new Date().getDay();
    const expectedWeekDay = week[currentDay];
    expect(timestamp2WeekDay(timestamp)).toBe(expectedWeekDay);
  });
});
