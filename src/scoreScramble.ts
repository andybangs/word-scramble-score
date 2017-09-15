import { VALID_COMBOS } from './constants';
import looksReal from './looksReal';
import Score from './Score';

export function isNot(scramble: string, word: string): boolean {
  return scramble === word;
}

export function isPoor(
  scramble: string,
  word: string,
  scrambleLooksReal: (str: string) => boolean
): boolean {
  if (scrambleLooksReal(scramble)) return false;

  let meetsCriteria = scramble[0] === word[0];

  if (meetsCriteria === false) {
    for (let i = 1; i < scramble.length - 1; i++) {
      const currentInPlace = scramble[i] === word[i];
      const nextInPlace = scramble[i + 1] === word[i + 1];

      if (currentInPlace && nextInPlace) {
        meetsCriteria = true;
        break;
      }
    }
  }

  return meetsCriteria;
}

export function isHard(
  scramble: string,
  word: string,
  scrambleLooksReal: (str: string) => boolean
): boolean {
  if (!scrambleLooksReal(scramble)) return false;

  for (let i = 0; i < scramble.length; i++) {
    if (scramble[i] === word[i]) return false;
  }

  return true;
}

export default function scoreScramble(scramble: string, word: string): Score {
  if (scramble.length !== word.length) throw new Error();
  if (isNot(scramble, word)) return Score.Not;
  if (isPoor(scramble, word, looksReal(VALID_COMBOS))) return Score.Poor;
  if (isHard(scramble, word, looksReal(VALID_COMBOS))) return Score.Hard;
  return Score.Fair;
}
