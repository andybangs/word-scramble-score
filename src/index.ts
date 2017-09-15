import * as fs from 'fs';
import { createInterface } from 'readline';
import Score from './Score';
import scoreScramble from './scoreScramble';

if (process.argv.length < 3) {
  console.log(`Usage: node ${process.argv[1]} FILENAME`);
  process.exit(1);
}

const filename = process.argv[2];
const readLine = createInterface({
  input: fs.createReadStream(filename)
});

readLine.on('line', (line: string) => {
  const [scramble, word] = line.split(' ');
  let score: string;

  switch (scoreScramble(scramble, word)) {
    case Score.Not:
      score = 'not a';
      break;
    case Score.Poor:
      score = 'a poor';
      break;
    case Score.Hard:
      score = 'a hard';
      break;
    case Score.Fair:
    default:
      score = 'a fair';
  }

  console.log(`${scramble} is ${score} scramble of ${word}`);
});
