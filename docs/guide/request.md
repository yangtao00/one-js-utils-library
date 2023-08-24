# request 工具

::: code-group

```ts [demo]
import request from 'request';

const ApiGetXxx = (data: xx) => {
  return request<Req, Res>({
    url: 'xxx',
    method: 'post',
    data,
  });
};
```

```ts [code]
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface Response<T = any> {
  code: number;
  success: boolean;
  msg?: string;
  message?: string;
  data?: T;
}

const serivce = axios.create({
  baseURL: '',
  timeout: 50000,
});

// 请求拦截器
serivce.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// 响应拦截器
serivce.interceptors.response.use(
  res => res,
  err => Promise.reject(err),
);

interface ExtraOption {
  autoMessage?: boolean; // 自动触发错误提示
  unwrap?: boolean; // 解构
}

function request<P, R>(
  params: AxiosRequestConfig<P>,
  opt?: ExtraOption,
): Promise<R>;
function request<P, R>(
  params: AxiosRequestConfig<P>,
  opt?: ExtraOption,
): Promise<Response<R>>;
function request<P, R>(params: AxiosRequestConfig<P>, opt?: ExtraOption) {
  const { unwrap = true, autoMessage = true } = opt || {};
  return serivce
    .request<R, AxiosResponse<Response<R>>, P>(params)
    .then(res => {
      const { code, msg, message } = res.data;
      if (code === 200 || code === 0) {
        return unwrap ? res.data.data : res.data;
      } else {
        return Promise.reject({
          message: msg || message || '服务异常，请稍后重试！',
        });
      }
    })
    .catch(err => {
      if (autoMessage) {
        console.log(err.message || '服务开小车了，请稍后重试~');
      }
      return Promise.reject(err);
    });
}
export default request;
```

:::
