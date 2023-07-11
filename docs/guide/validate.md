# 验证

## 验证手机号

::: code-group

```ts [demo]
import { validatePhone } from 'one-js-utils-library';

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

## 验证邮箱

::: code-group

```ts [demo]
import { validateEmail } from 'one-js-utils-library';

validateEmail('example@example.com'); // true
validateEmail('john.doe@example.co.uk'); // true
validateEmail('user@example'); // false
validateEmail('test@example..com'); // false
```

```ts [code]
const validateEmail = (email: string) => {
  const reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,}/;
  return reg.test(email);
};
```

:::
