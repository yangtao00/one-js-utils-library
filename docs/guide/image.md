# 图片处理

## 验证图片类型

```ts
import { validateImageType } from 'one-utils';

validateImageType('image/png', ['png', 'jpg', 'jpeg']); // true
validateImageType('image/gif', ['png', 'jpg', 'jpeg']); // false
```

## 验证图片资源大小

```ts
import { validateImageSize } from 'one-utils';

validateImageSize(1024, 1, 'kb'); // true
validateImageSize(2048, 1, 'kb'); // false
validateImageSize(2048, 1, 'mb'); // true
validateImageSize(1024 * 1025, 1, 'mb'); // false
validateImageSize(1024 * 1025, 1, 'gb'); // true
validateImageSize(1024 * 1024 * 1025, 1, 'gb'); // false
```
