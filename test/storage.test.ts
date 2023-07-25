import { StorageManager, StorageType } from '../src';

describe('StorageManager', () => {
  let storageManager: StorageManager;
  const storageType: StorageType = 'localStorage';

  beforeEach(() => {
    storageManager = new StorageManager(storageType);
  });

  afterEach(() => {
    storageManager.clearStorage();
  });

  it('should set and get an item from storage', () => {
    storageManager.setItem('name', 'John Doe');
    const name = storageManager.getItem('name');
    expect(name).toBe('John Doe');
  });

  it('should append a value to an existing array or object in storage', () => {
    storageManager.setItem('favoriteFruits', ['apple']);
    storageManager.setItem('favoriteBooks', {
      genre: 'Sci-Fi',
    });
    storageManager.pushValue('favoriteFruits', 'banana');
    storageManager.pushValue('favoriteBooks', {
      title: 'Dune',
    });

    const favoriteFruits = storageManager.getItem('favoriteFruits');
    const favoriteBooks = storageManager.getItem('favoriteBooks');

    expect(favoriteFruits).toEqual(['apple', 'banana']);
    expect(favoriteBooks).toEqual({ genre: 'Sci-Fi', title: 'Dune' });
  });

  it('should remove a value from an existing array or object in storage', () => {
    storageManager.setItem('favoriteFruits', ['apple']);
    storageManager.pushValue('favoriteFruits', 'banana');

    storageManager.removeValue('favoriteFruits', 'apple');
    const favoriteFruits = storageManager.getItem('favoriteFruits');

    expect(favoriteFruits).toEqual(['banana']);
  });

  it('should remove an item from storage', () => {
    storageManager.setItem('name', 'John Doe');
    storageManager.removeItem('name');
    const name = storageManager.getItem('name');
    expect(name).toBeNull();
  });

  it('should not add an item with an invalid key', () => {
    storageManager.setItem('', 'Invalid key');
    const data = storageManager.getItem('');
    expect(data).toBeNull();
  });

  it('should handle invalid data when setting an item in storage', () => {
    // Circular reference that cannot be stringified
    const circularReference: any = { data: null };
    circularReference.data = circularReference;

    // Setting circular reference in storage should not throw an error
    storageManager.setItem('circularData', circularReference);
    const data = storageManager.getItem('circularData');

    expect(data).toBeNull();
  });
});
