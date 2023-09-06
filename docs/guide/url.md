# url 处理

## url search 参数转化为对象

::: code-group

```ts [demo]
import { getUrlSearch } from 'one-js-utils-library';

const url1 = 'https://example.com';
getUrlSearch(url1); // {}

const url2 = 'https://example.com?param1=value1';
getUrlSearch(url2); // { param1: 'value1' }

const url3 = 'https://example.com?param1=value1&param2=value2&param3=value3';
getUrlSearch(url3);
// {
//   param1: 'value1',
//   param2: 'value2',
//   param3: 'value3',
// };

const url4 = 'https://example.com?param1=value1&param1=value2&param1=value3';
getUrlSearch(url4); // { param1: 'value3' }
```

```ts [code]
const getUrlSearch = (): Record<string, string> => {
  const params: Record<string, string> = {};

  let queryString = window.location.search.substring(1);
  queryString = decodeURIComponent(queryString);

  if (queryString) {
    const paramPairs = queryString.split('&');

    for (const pair of paramPairs) {
      const [key, value] = pair.split('=');
      params[key] = value;
    }
  }

  return params;
};
```

:::

## 对象转化为 url search

::: code-group

```ts [demo]
import { object2UrlSearch } from 'one-js-utils-library';

const params = {
  param1: 'hello world',
  param2: '@openai',
  param3: '$1234!',
};
object2UrlSearch(params); // param1=hello%20world&param2=%40openai&param3=%241234!,
```

```ts [code]
const object2UrlSearch = (params: Record<string, string>) => {
  const paramPairs: string[] = [];
  const hasOwnProperty = Object.prototype.hasOwnProperty;

  for (const key in params) {
    if (hasOwnProperty.call(params, key)) {
      const value = encodeURIComponent(params[key]);
      paramPairs.push(`${key}=${value}`);
    }
  }

  return paramPairs.join('&');
};
```

:::

## http 转化为 https

::: code-group

```ts [demo]
import { http2https } from 'one-js-utils-library';

http2https('http://example.com'); // https://example.com
http2https('https://example.com'); // https://example.com
http2https('ftp://example.com'); // ftp://example.com
```

```ts [code]
const http2https = (url: string) => {
  const httpsUrl = url.replace(/^http:/i, 'https:');
  return httpsUrl;
};
```

:::
