import { isConsonant, isVowel } from '../src/util';

describe('isConsonant', () => {
  it('returns true if input is a single consonant', () => {
    expect(isConsonant('B')).toEqual(true);
    expect(isConsonant('b')).toEqual(true);
  });

  it('returns true if input is a consonant string', () => {
    expect(isConsonant('XKCD')).toEqual(true);
    expect(isConsonant('xkcd')).toEqual(true);
  });

  it('returns false if input is not a consonant', () => {
    expect(isConsonant('A')).toEqual(false);
    expect(isConsonant('$')).toEqual(false);
    expect(isConsonant('nope')).toEqual(false);
  });
});

describe('isVowel', () => {
  it('returns true if input is a single vowel', () => {
    expect(isVowel('A')).toEqual(true);
    expect(isVowel('a')).toEqual(true);
  });

  it('returns true if input is a vowel string', () => {
    expect(isVowel('AIOYUY')).toEqual(true);
    expect(isVowel('aeiouy')).toEqual(true);
  });

  it('returns false if input is not a consonant', () => {
    expect(isVowel('B')).toEqual(false);
    expect(isConsonant('$')).toEqual(false);
    expect(isVowel('nope')).toEqual(false);
  });
});
