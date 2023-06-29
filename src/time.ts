import dayjs from 'dayjs';

// 格式化时间戳
export const timestamp2Date = (
  timestamp: number,
  format = 'YYYY-MM-DD',
): string | undefined => {
  if (timestamp.toString().length < 13) {
    return undefined;
  }
  return dayjs(timestamp).format(format);
};
