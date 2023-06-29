import { validatePhone } from '../src';

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
