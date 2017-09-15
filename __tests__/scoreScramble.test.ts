import Score from '../src/Score';
import scoreScramble, { isHard, isNot, isPoor } from '../src/scoreScramble';

describe('scoreScramble', () => {
  it('returns a score', () => {
    const result = scoreScramble('ABC', 'BAC');

    expect(result in Score).toBe(true);
  });

  it('throws if input string lengths are not equal', () => {
    expect(() => scoreScramble('ABC', 'ABCD')).toThrow();
  });
});

describe('isNot', () => {
  it('returns true if inputs are equal', () => {
    expect(isNot('ABC', 'ABC')).toEqual(true);
  });

  it('returns false if inputs are not equal', () => {
    expect(isNot('ABC', 'CAB')).toEqual(false);
  });
});

describe('isPoor', () => {
  let looksReal;

  describe('scramble looks real', () => {
    beforeEach(() => {
      looksReal = jest.fn((scramble: string) => true);
    });

    it('returns false', () => {
      expect(isPoor('ABC', 'ACB', looksReal)).toEqual(false);
    });
  });

  describe("scramble doesn't look real", () => {
    beforeEach(() => {
      looksReal = jest.fn((scramble: string) => false);
    });

    it('calls looksReal', () => {
      isPoor('ABC', 'CAB', looksReal);
      expect(looksReal).toHaveBeenCalledWith('ABC');
    });

    it('returns true if first letters are equal', () => {
      expect(isPoor('ABC', 'ACB', looksReal)).toEqual(true);
    });

    it('returns true if two consecutive letters are in the right place', () => {
      expect(isPoor('NGAAI', 'AGAIN', looksReal)).toEqual(true);
    });

    it('returns false otherwise', () => {
      expect(isPoor('NIAGA', 'AGAIN', looksReal)).toEqual(false);
    });
  });
});

describe('isHard', () => {
  let looksReal;

  describe('scramble looks real', () => {
    beforeEach(() => {
      looksReal = jest.fn((scramble: string) => true);
    });

    it('calls looksReal', () => {
      isHard('ABC', 'CAB', looksReal);
      expect(looksReal).toHaveBeenCalledWith('ABC');
    });

    it('returns true if no letter is in the right place', () => {
      expect(isHard('NAIGA', 'AGAIN', looksReal)).toEqual(true);
    });

    it('returns false otherwise', () => {
      expect(isHard('ANIAG', 'AGAIN', looksReal)).toEqual(false);
    });
  });

  describe("scramble doesn't look real", () => {
    beforeEach(() => {
      looksReal = jest.fn((scramble: string) => false);
    });

    it('returns false', () => {
      expect(isHard('ABC', 'ACB', looksReal)).toEqual(false);
    });
  });
});
