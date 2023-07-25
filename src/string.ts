// \n转换成<br/>
export const n2br = (str: string) => {
  const t = str.replace(/\n/g, '<br/>');
  return t;
};

// 字符串替换
export const strReplace = (
  str: string,
  startIndex: number,
  length: number,
  replacement: string,
): string => {
  const prefix = str.slice(0, startIndex);
  const suffix = str.slice(startIndex + length);
  const masked = replacement.repeat(length);
  return `${prefix}${masked}${suffix}`;
};
