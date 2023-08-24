/* eslint-disable @typescript-eslint/no-explicit-any */

export type StorageType = 'sessionStorage' | 'localStorage';

export class StorageManager {
  storage: Storage;

  constructor(storageType: StorageType) {
    this.storage =
      storageType === 'sessionStorage' ? sessionStorage : localStorage;
  }

  private validateKey(key: string): boolean {
    // Add any key validation logic here if needed
    return key !== '';
  }

  getItem(key: string): any {
    if (!this.validateKey(key)) {
      console.error('Invalid key provided.');
      return null;
    }

    const item = this.storage.getItem(key);
    try {
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return item;
    }
  }

  setItem(key: string, value: any): void {
    if (!this.validateKey(key)) {
      console.error('Invalid key provided.');
      return;
    }

    try {
      const serializedValue = JSON.stringify(value);
      this.storage.setItem(key, serializedValue);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }

  removeItem(key: string): void {
    if (!this.validateKey(key)) {
      console.error('Invalid key provided.');
      return;
    }

    this.storage.removeItem(key);
  }

  appendItemValue(key: string, value: any): void {
    if (!this.validateKey(key)) {
      console.error('Invalid key provided.');
      return;
    }

    const existingData = this.getItem(key);

    if (Array.isArray(existingData)) {
      existingData.push(value);
      this.setItem(key, existingData);
    } else if (typeof existingData === 'object' && existingData !== null) {
      if (Array.isArray(value)) {
        console.error('Cannot push an array into an object.');
        return;
      }
      this.setItem(key, { ...existingData, ...value });
    } else {
      console.error(
        'The data with the specified key is neither an array nor an object.',
      );
    }
  }

  removeItemValue(key: string, value: any): void {
    if (!this.validateKey(key)) {
      console.error('Invalid key provided.');
      return;
    }

    const existingData = this.getItem(key);

    if (Array.isArray(existingData)) {
      const updatedData = existingData.filter(item => item !== value);
      this.setItem(key, updatedData);
    } else if (typeof existingData === 'object' && existingData !== null) {
      if (Array.isArray(value)) {
        console.error('Cannot remove an array from an object.');
        return;
      }
      delete existingData[value];
      this.setItem(key, existingData);
    } else {
      console.error(
        'The data with the specified key is neither an array nor an object.',
      );
    }
  }

  clearStorage(): void {
    this.storage.clear();
  }
}
