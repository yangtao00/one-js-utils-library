# 验证类


## 格式化时间戳
```ts
import { timestamp2Date } from 'one-utils'
const timestamp = 1687267792619;
timestamp2Date(timestamp) // 2023-06-20
timestamp2Date(timestamp, 'YYYY-MM-DD') // 2023-06-20
timestamp2Date(timestamp, 'YYYY/MM/DD HH:mm:ss') // 2023/06/20 21:29:52
timestamp2Date(123456, '') // undefined
```