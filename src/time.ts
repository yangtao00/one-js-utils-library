import dayjs from 'dayjs';

// 时间戳转化为日期
export const timestamp2Date = (
  timestamp: number,
  format = 'YYYY-MM-DD',
): string | undefined => {
  if (timestamp < 0 || !dayjs(timestamp).isValid()) {
    return undefined;
  }
  return dayjs(timestamp).format(format);
};

// 时间戳转化为周几
export const timestamp2WeekDay = (timestamp: number) => {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  if (timestamp < 0 || !dayjs(timestamp).isValid()) {
    return week[dayjs().day()];
  }
  return week[dayjs(timestamp).day()];
};
