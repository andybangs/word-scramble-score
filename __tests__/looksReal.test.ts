import looksReal, { isDoubleConsonant, parseScramble } from '../src/looksReal';

describe('looksReal', () => {
  it('returns a function', () => {
    expect(looksReal(new Set())).toBeInstanceOf(Function);
  });

  it('returns true for input alternating between vowels and consonants', () => {
    expect(looksReal(new Set())('ABABA')).toEqual(true);
  });

  it('allows double consonants', () => {
    expect(looksReal(new Set())('BUZZ')).toEqual(true);
  });

  it('returns true for valid inputs', () => {
    expect(looksReal(new Set(['XKCD']))('XKCD')).toEqual(true);
    expect(looksReal(new Set(['FL', 'CK']))('FLOCK')).toEqual(true);
  });

  it('returns false for invalid inputs', () => {
    expect(looksReal(new Set(['XKCD']))('KCD')).toEqual(false);
    expect(looksReal(new Set(['FL', 'CK']))('PLUCK')).toEqual(false);
  });
});

describe('isDoubleConsonant', () => {
  it('returns true for double consonant string', () => {
    expect(isDoubleConsonant('XX')).toEqual(true);
  });

  it('returns false for strings not length 2', () => {
    expect(isDoubleConsonant('X')).toEqual(false);
    expect(isDoubleConsonant('XXX')).toEqual(false);
  });

  it('returns false for non duplicate consonant string', () => {
    expect(isDoubleConsonant('XZ')).toEqual(false);
  });
});

describe('parseScramble', () => {
  it('returns an array of alternating vowel and consonant sequences', () => {
    expect(parseScramble('IRONY')).toEqual(['I', 'R', 'O', 'N', 'Y']);
    expect(parseScramble('RIONY')).toEqual(['R', 'IO', 'N', 'Y']);
    expect(parseScramble('IOYRN')).toEqual(['IOY', 'RN']);
  });
});
