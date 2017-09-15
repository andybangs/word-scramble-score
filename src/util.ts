export function isConsonant(str: string): boolean {
  return /^[b-df-hj-np-tv-xz]+$/i.test(str);
}

export function isVowel(str: string): boolean {
  return /^[aeiouy]+$/i.test(str);
}
