# 时间处理

## 格式化时间戳

::: code-group

```ts [demo]
import { timestamp2Date } from 'one-utils';
const timestamp = 1687267792619;
timestamp2Date(timestamp); // 2023-06-20
timestamp2Date(timestamp, 'YYYY-MM-DD'); // 2023-06-20
timestamp2Date(timestamp, 'YYYY/MM/DD HH:mm:ss'); // 2023/06/20 21:29:52
timestamp2Date(123456, ''); // undefined
```

```ts [code]
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
```

:::
