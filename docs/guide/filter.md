# 过滤

## 过滤对象中的`null`, `undefined`, `''`

::: code-group

```ts [demo]
import { filterObjectValues } from 'one-js-utils-library';
const obj = {
  id: 1,
  name: 'John',
  age: 25,
  email: 'john@example.com',
  address: '',
};
filterObjectValues(obj);
// 输出
// {
//   id: 1,
//   name: 'John',
//   age: 25,
//   email: 'john@example.com',
// }

const obj2 = {
  name: '',
  age: null,
  email: undefined,
  address: '',
};
filterObjectValues(obj2);
// 输出 {}
```

```ts [code]
type ObjectWithValues<T> = {
  [K in keyof T]: T[K];
};

export const filterObjectValues = <T>(obj: T): ObjectWithValues<T> => {
  const filtered: Partial<ObjectWithValues<T>> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && value !== undefined && value !== '') {
        filtered[key] = value;
      }
    }
  }

  return filtered as ObjectWithValues<T>;
};
```

:::
