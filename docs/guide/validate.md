# 验证

## 验证手机号

::: code-group

```ts [demo]
import { validatePhone } from 'one-utils';

validatePhone('12345678901'); // true
validatePhone('1234567890'); // false
```

```ts [code]
export const validatePhone = (phone: string) => {
  const reg = /^1[3456789]\d{9}$/;
  return reg.test(phone);
};
```

:::
