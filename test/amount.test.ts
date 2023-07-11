import { amountSplit, amountFormat } from '../src';

describe('amountSplit', () => {
  test('integer amount', () => {
    expect(amountSplit(1234)).toEqual(['1234']);
  });

  test('decimal amount', () => {
    expect(amountSplit('5678.9')).toEqual(['5678', '9']);
  });

  test('amount as string', () => {
    expect(amountSplit('1234.5678')).toEqual(['1234', '5678']);
  });
});

describe('amountFormat', () => {
  test('integer amount', () => {
    expect(amountFormat(1234)).toBe('1,234');
  });

  test('larger integer amount', () => {
    expect(amountFormat(123456)).toBe('123,456');
  });

  test('decimal amount', () => {
    expect(amountFormat('1234.4567')).toBe('1,234.4567');
  });

  test('larger decimal amount', () => {
    expect(amountFormat('123456.789')).toBe('123,456.789');
  });

  test('amount as string', () => {
    expect(amountFormat('56789')).toBe('56,789');
  });
});
