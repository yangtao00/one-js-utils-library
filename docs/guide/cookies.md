# cookies 设置

## 版本对比

::: code-group

```ts [demo]
import { getCookie, setCookie, removeCookie } from 'one-js-utils-library';

setCookie('token', '1234');
getCookie('token'); // '1234'
removeCookie('token');
getCookie('token'); // undefined
```

```ts [code]
import Cookies from 'js-cookie';

export function getCookie(key: string): string | undefined {
  return Cookies.get(key);
}

export function setCookie(key: string, value: string) {
  if (!key || !value) {
    return;
  }
  return Cookies.set(key, value);
}

export function removeCookie(key: string) {
  return Cookies.remove(key);
}
```

:::
