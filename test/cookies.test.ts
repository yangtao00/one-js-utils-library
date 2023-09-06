// cookieUtils.test.ts
import Cookies from 'js-cookie';
import { getCookie, setCookie, removeCookie } from '../src';

// Mock the 'js-cookie' library to control its behavior in tests
jest.mock('js-cookie', () => ({
  get: jest.fn(),
  set: jest.fn(),
  remove: jest.fn(),
}));

describe('getCookie', () => {
  it('should call Cookies.get with the provided key', () => {
    // Arrange
    const key = 'testKey';

    // Act
    getCookie(key);

    // Assert
    expect(Cookies.get).toHaveBeenCalledWith(key);
  });
});

describe('setCookie', () => {
  it('should call Cookies.set with the provided key and value', () => {
    // Arrange
    const key = 'testKey';
    const value = 'testValue';

    // Act
    setCookie(key, value);

    // Assert
    expect(Cookies.set).toHaveBeenCalledWith(key, value);
  });

  it('should not call Cookies.set if key or value is not provided', () => {
    // Act
    setCookie('', 'testValue');
    setCookie('testKey', '');

    // Assert
    expect(Cookies.set).not.toHaveBeenCalledWith('', 'testValue');
    expect(Cookies.set).not.toHaveBeenCalledWith('testKey', '');
  });
});

describe('removeCookie', () => {
  it('should call Cookies.remove with the provided key', () => {
    // Arrange
    const key = 'testKey';

    // Act
    removeCookie(key);

    // Assert
    expect(Cookies.remove).toHaveBeenCalledWith(key);
  });
});
