import { validateImageType, validateImageSize } from '../src';

// 图片类型
describe('validateImageType', () => {
  test('should return true when fileType matches limitFileType', () => {
    const result = validateImageType('image/png', ['png', 'jpg', 'jpeg']);
    expect(result).toBe(true);
  });

  test('should return false when fileType does not match limitFileType', () => {
    const result = validateImageType('image/gif', ['png', 'jpg', 'jpeg']);
    expect(result).toBe(false);
  });

  test('should handle empty fileType', () => {
    const result = validateImageType('', ['png', 'jpg', 'jpeg']);
    expect(result).toBe(false);
  });

  test('should handle empty limitFileType', () => {
    const result = validateImageType('image/png', []);
    expect(result).toBe(false);
  });
});

// 图片资源
describe('validateImageSize', () => {
  test('should return true when size is within the limit kb', () => {
    const result = validateImageSize(512, 1, 'kb');
    expect(result).toBe(true);
  });

  test('should return true when size is equal to the limit', () => {
    const result = validateImageSize(1024, 1, 'kb');
    expect(result).toBe(true);
  });

  test('should return false when size exceeds the limit', () => {
    const result = validateImageSize(2048, 1, 'kb');
    expect(result).toBe(false);
  });

  test('should handle size in different units', () => {
    const result = validateImageSize(1, 1, 'mb');
    expect(result).toBe(true);
  });
});
