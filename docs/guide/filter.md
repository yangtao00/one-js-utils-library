# 过滤

## 过滤对象中的`null`, `undefined`, `''`

```ts
import { filterObjectValues } from 'one-utils';
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
