export function urlSearch2Object(url: string): Record<string, string> {
  const params: Record<string, string> = {};

  let queryString = url.split('?')[1];
  queryString = decodeURIComponent(queryString);
  if (queryString) {
    const paramPairs = queryString.split('&');

    for (const pair of paramPairs) {
      const [key, value] = pair.split('=');
      params[key] = value;
    }
  }

  return params;
}

export function object2UrlSearch(params: Record<string, string>): string {
  const paramPairs: string[] = [];
  const hasOwnProperty = Object.prototype.hasOwnProperty;

  for (const key in params) {
    if (hasOwnProperty.call(params, key)) {
      const value = encodeURIComponent(params[key]);
      paramPairs.push(`${key}=${value}`);
    }
  }

  return paramPairs.join('&');
}
