# 时间处理

## 时间戳转化为日期

::: code-group

```ts [demo]
import { timestamp2Date } from 'one-js-utils-library';
const timestamp = 1687267792619;
timestamp2Date(timestamp); // 2023-06-20
timestamp2Date(timestamp, 'YYYY-MM-DD'); // 2023-06-20
timestamp2Date(timestamp, 'YYYY/MM/DD HH:mm:ss'); // 2023/06/20 21:29:52
timestamp2Date(123456); // 1970-01-01
```

```ts [code]
import dayjs from 'dayjs';

export const timestamp2Date = (
  timestamp: number,
  format = 'YYYY-MM-DD',
): string | undefined => {
  if (timestamp < 0 || !dayjs(timestamp).isValid()) {
    return undefined;
  }
  return dayjs(timestamp).format(format);
};
```

:::

## 时间戳转化为周几

::: code-group

```ts [demo]
import { timestamp2WeekDay } from 'one-js-utils-library';
const timestamp = new Date('2023-07-10').valueOf();
timestamp2WeekDay(timestamp); // 周一

// 无效的时间戳，返回当前时间是周几
const timestamp = -1;
const currentDay = new Date().getDay();
timestamp2WeekDay(-1) === timestamp2WeekDay(currentDay); // true
```

```ts [code]
import dayjs from 'dayjs';

const timestamp2WeekDay = (timestamp: number) => {
  const week = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  if (timestamp < 0 || !dayjs(timestamp).isValid()) {
    return week[dayjs().day()];
  }
  return week[dayjs(timestamp).day()];
};
```

:::
