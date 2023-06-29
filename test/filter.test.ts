import { filterObjectValues } from '../src';

describe('filterObjectValues', () => {
  test('should keep non-null, non-undefined, and non-empty string values', () => {
    const obj = {
      id: 1,
      name: 'John',
      age: 25,
      email: 'john@example.com',
      address: '',
    };

    const filteredObj = filterObjectValues(obj);
    expect(filteredObj).toEqual({
      id: 1,
      name: 'John',
      age: 25,
      email: 'john@example.com',
    });
  });

  test('should handle an object with all values filtered out', () => {
    const obj = {
      name: '',
      age: null,
      email: undefined,
      address: '',
    };

    const filteredObj = filterObjectValues(obj);
    expect(filteredObj).toEqual({});
  });
});
