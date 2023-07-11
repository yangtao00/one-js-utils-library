import { validatePhone, validateEmail } from '../src';

// 验证手机号
describe('validatePhone', () => {
  it('should return true for valid phone number', () => {
    const phoneNumber = '13812345678';
    const isValid = validatePhone(phoneNumber);
    expect(isValid).toBe(true);
  });

  it('should return false for invalid phone number (less than 11 digits)', () => {
    const phoneNumber = '1381234567';
    const isValid = validatePhone(phoneNumber);
    expect(isValid).toBe(false);
  });

  it('should return false for invalid phone number (more than 11 digits)', () => {
    const phoneNumber = '138123456789';
    const isValid = validatePhone(phoneNumber);
    expect(isValid).toBe(false);
  });

  it('should return false for invalid phone number (starts with 0)', () => {
    const phoneNumber = '01381234567';
    const isValid = validatePhone(phoneNumber);
    expect(isValid).toBe(false);
  });

  it('should return false for invalid phone number (starts with 2)', () => {
    const phoneNumber = '23812345678';
    const isValid = validatePhone(phoneNumber);
    expect(isValid).toBe(false);
  });
});

// 验证邮箱
describe('validateEmail', () => {
  test('valid email', () => {
    expect(validateEmail('example@example.com')).toBe(true);
    expect(validateEmail('john.doe@example.co.uk')).toBe(true);
    expect(validateEmail('jane+smith@example.net')).toBe(true);
  });

  test('invalid email', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('user@example')).toBe(false);
    expect(validateEmail('test@.com')).toBe(false);
    expect(validateEmail('test@example..com')).toBe(false);
  });
});
