import { n2br, strReplace } from '../src';

describe('n2br', () => {
  it('should convert \\n to <br/>', () => {
    const input = 'Hello\nWorld';
    const expected = 'Hello<br/>World';
    const result = n2br(input);
    expect(result).toEqual(expected);
  });

  it('should handle multiple occurrences of \\n', () => {
    const input = 'Line 1\nLine 2\nLine 3';
    const expected = 'Line 1<br/>Line 2<br/>Line 3';
    const result = n2br(input);
    expect(result).toEqual(expected);
  });

  it('should return the same string if no \\n is present', () => {
    const input = 'No line breaks';
    const result = n2br(input);
    expect(result).toEqual(input);
  });
});

describe('strReplace', () => {
  it('should replace the specified part of the string', () => {
    const input = 'Hello, World!';
    const startIndex = 7;
    const length = 5;
    const replacement = 'Friend';
    const expected = 'Hello, FriendFriendFriendFriendFriend!';
    const result = strReplace(input, startIndex, length, replacement);
    expect(result).toEqual(expected);
  });

  it('should handle replacement at the beginning of the string', () => {
    const input = 'Hello, World!';
    const startIndex = 0;
    const length = 5;
    const replacement = 'Hi';
    const expected = 'HiHiHiHiHi, World!';
    const result = strReplace(input, startIndex, length, replacement);
    expect(result).toEqual(expected);
  });

  it('should handle replacement at the end of the string', () => {
    const input = 'Hello, World!';
    const startIndex = 7;
    const length = 6;
    const replacement = 'Everyone';
    const expected = 'Hello, EveryoneEveryoneEveryoneEveryoneEveryoneEveryone';
    const result = strReplace(input, startIndex, length, replacement);
    expect(result).toEqual(expected);
  });

  it('should handle empty string', () => {
    const input = '';
    const startIndex = 0;
    const length = 0;
    const replacement = 'Hello';
    const expected = '';
    const result = strReplace(input, startIndex, length, replacement);
    expect(result).toEqual(expected);
  });

  it('should replace the specified part of the number', () => {
    const input = '12345678910';
    const startIndex = 4;
    const length = 4;
    const replacement = '*';
    const expected = '1234****910';
    const result = strReplace(input, startIndex, length, replacement);
    expect(result).toEqual(expected);
  });
});
