import Cookies from 'js-cookie';

export function getCookie(key: string): string | undefined {
  return Cookies.get(key);
}

export function setCookie(key: string, value: string) {
  if (!key || !value) {
    return;
  }
  return Cookies.set(key, value);
}

export function removeCookie(key: string) {
  return Cookies.remove(key);
}
