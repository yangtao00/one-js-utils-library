# 字符串处理

## 字符串替换

::: code-group

```ts [demo]
import { strReplace } from 'one-js-utils-library';
strReplace('12345678910', 4, 4, '*'); // 1234****910
```

```ts [code]
const strReplace = (
  str: string,
  startIndex: number,
  length: number,
  replacement: string,
): string => {
  const prefix = str.slice(0, startIndex);
  const suffix = str.slice(startIndex + length);
  const masked = replacement.repeat(length);
  return `${prefix}${masked}${suffix}`;
};
```

:::

## \n 转换为 &lt;br&gt;

::: code-group

```ts [demo]
import { n2br } from 'one-js-utils-library';
const result = n2br('Hello\nWorld'); // Hello<br/>World
```

```ts [code]
const n2br = (str: string) => {
  const t = str.replace(/\n/g, '<br/>');
  return t;
};
```

:::
