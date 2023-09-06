import { getUrlSearch, object2UrlSearch, http2https } from '../src'; // 导入你的模块

/* eslint-disable @typescript-eslint/no-explicit-any */
// url search 转化为对象
describe('getUrlSearch', () => {
  it('should return an empty object when there is no query string', () => {
    const url = 'http://example.com';
    Object.defineProperty(window, 'location', {
      value: new URL(url),
    });

    window.location.href = url;
    expect(getUrlSearch()).toEqual({});
  });

  it('should return a single key-value pair when there is one parameter', () => {
    const url = 'http://example.com/?key1=value1';
    Object.defineProperty(window, 'location', {
      value: new URL(url),
    });

    window.location.href = url;
    expect(getUrlSearch()).toEqual({ key1: 'value1' });
  });

  it('should return all key-value pairs when there are multiple parameters', () => {
    const url = 'http://example.com/?key1=value1&key2=value2';
    Object.defineProperty(window, 'location', {
      value: new URL(url),
    });

    window.location.href = url;
    expect(getUrlSearch()).toEqual({
      key1: 'value1',
      key2: 'value2',
    });
  });
});

// 对象转化为url search
describe('object2UrlSearch', () => {
  test('encode parameter values by default', () => {
    const params = {
      param1: 'hello world',
      param2: '@openai',
      param3: '$1234!',
    };
    expect(object2UrlSearch(params)).toBe(
      'param1=hello%20world&param2=%40openai&param3=%241234!',
    );
  });
});

describe('http2https', () => {
  test('convert HTTP URL to HTTPS', () => {
    expect(http2https('http://example.com')).toBe('https://example.com');
    expect(http2https('http://www.google.com')).toBe('https://www.google.com');
    expect(http2https('http://sub.domain.com/path')).toBe(
      'https://sub.domain.com/path',
    );
  });

  test('keep HTTPS URL unchanged', () => {
    expect(http2https('https://example.com')).toBe('https://example.com');
    expect(http2https('https://www.google.com')).toBe('https://www.google.com');
    expect(http2https('https://sub.domain.com/path')).toBe(
      'https://sub.domain.com/path',
    );
  });

  test('do not convert other protocols', () => {
    expect(http2https('ftp://example.com')).toBe('ftp://example.com');
    expect(http2https('ws://www.google.com')).toBe('ws://www.google.com');
    expect(http2https('ftp://sub.domain.com/path')).toBe(
      'ftp://sub.domain.com/path',
    );
  });
});
