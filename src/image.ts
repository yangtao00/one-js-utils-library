// 判断图片类型
export const validateImageType = (
  fileType: string,
  limitFileType: string[],
): boolean => {
  const fileExtension = fileType.split('/').pop()?.toLowerCase() || '';
  return limitFileType.indexOf(fileExtension) >= 0;
};

// 判断图片资源大小验证
export const validateImageSize = (
  size: number,
  limit: number,
  unit: 'kb' | 'mb' | 'gb' = 'kb',
) => {
  const Unit = {
    kb: 1024,
    mb: 1024 * 1024,
    gb: 1024 * 1024 * 1024,
  };
  const sizeF = size / Unit[unit];
  return limit >= sizeF;
};
