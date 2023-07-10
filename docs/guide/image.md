# 图片处理

## 验证图片类型

::: code-group

```ts [demo]
import { validateImageType } from 'one-js-utils-library';

validateImageType('image/png', ['png', 'jpg', 'jpeg']); // true
validateImageType('image/gif', ['png', 'jpg', 'jpeg']); // false
```

```ts [code]
// 判断图片类型
export const validateImageType = (
  fileType: string,
  limitFileType: string[],
): boolean => {
  const fileExtension = fileType.split('/').pop()?.toLowerCase() || '';
  return limitFileType.indexOf(fileExtension) >= 0;
};
```

:::

## 验证图片资源大小

::: code-group

```ts [demo]
import { validateImageSize } from 'one-js-utils-library';

validateImageSize(1024, 1, 'kb'); // true
validateImageSize(2048, 1, 'kb'); // false
validateImageSize(2048, 1, 'mb'); // true
validateImageSize(1024 * 1025, 1, 'mb'); // false
validateImageSize(1024 * 1025, 1, 'gb'); // true
validateImageSize(1024 * 1024 * 1025, 1, 'gb'); // false
```

```ts [code]
export const validateImageSize = (
  size: number,
  limit: number,
  unit: 'kb' | 'mb' | 'gb' = 'kb',
) => {
  const Unit = {
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
  };
  const sizeF = size / Unit[unit];
  return limit >= sizeF;
};
```

:::
