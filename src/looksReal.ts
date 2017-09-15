import { isConsonant, isVowel } from './util';

export function isDoubleConsonant(combo: string): boolean {
  if (combo.length !== 2) return false;
  return isConsonant(combo) && combo[0] === combo[1];
}

export function parseScramble(scramble: string): string[] {
  return scramble.split('').reduce((acc: string[], char: string) => {
    const lastIndex = acc.length - 1;

    if (acc.length > 0 && isVowel(acc[lastIndex]) === isVowel(char)) {
      acc[lastIndex] = acc[lastIndex].concat(char);

      return acc;
    }

    return acc.concat([char]);
  }, []);
}

export default function looksReal(
  validCombos: Set<string>
): (scramble: string) => boolean {
  return scramble =>
    parseScramble(scramble)
      .filter(p => p.length > 1)
      .map(combo => validCombos.has(combo) || isDoubleConsonant(combo))
      .reduce((a, b) => a && b, true);
}
