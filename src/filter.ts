type ObjectWithValues<T> = {
  [K in keyof T]: T[K];
};

export const filterObjectValues = <T>(obj: T): ObjectWithValues<T> => {
  const filtered: Partial<ObjectWithValues<T>> = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      if (value !== null && value !== undefined && value !== '') {
        filtered[key] = value;
      }
    }
  }
  return filtered as ObjectWithValues<T>;
};
