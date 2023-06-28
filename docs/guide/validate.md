# 验证类


## 验证手机号
```ts
import { validatePhone } from 'one-utils'

validatePhone('12345678901') // true
validatePhone('1234567890') // false
```