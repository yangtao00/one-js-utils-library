import { urlSearch2Object, object2UrlSearch, http2https } from '../src'; // 导入你的模块

// url search 转化为对象
describe('urlSearch2Object', () => {
  test('no parameters', () => {
    const url = 'https://example.com';
    expect(urlSearch2Object(url)).toEqual({});
  });

  test('single parameter', () => {
    const url = 'https://example.com?param1=value1';
    expect(urlSearch2Object(url)).toEqual({ param1: 'value1' });
  });

  test('multiple parameters', () => {
    const url = 'https://example.com?param1=value1&param2=value2&param3=value3';
    expect(urlSearch2Object(url)).toEqual({
      param1: 'value1',
      param2: 'value2',
      param3: 'value3',
    });
  });

  test('parameters with special characters', () => {
    const url =
      'https://example.com?param1=hello%20world&param2=%40openai&param3=%241234%21';
    expect(urlSearch2Object(url)).toEqual({
      param1: 'hello world',
      param2: '@openai',
      param3: '$1234!',
    });
  });

  test('parameters with duplicate keys', () => {
    const url = 'https://example.com?param1=value1&param1=value2&param1=value3';
    expect(urlSearch2Object(url)).toEqual({ param1: 'value3' });
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
