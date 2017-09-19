# Word Scramble Score

#### Table of Contents

- [Instructions](#instructions)
- [Solution](#solution)

## Instructions

A popular item in the local paper is the word scramble. In this puzzle, a reader is presented with a series of letters that are for a scrambled word, e.g. "rwod" can be unscrambled to "word". Your job is to write a program that will score the difficulty of any particular scrambling of a word. The scores can be not, poor, fair or hard, depending on whether or not the scramble is not scrambled, easy to solve, a reasonable difficulty to solve or hard to solve, respectively.

Your solution will be evaluated for correctness, code quality, design & extensibility, and its testability.

Word scrambles can be judged by a set of heuristics including if the word looks real or if the scramble has letters in the correct place. *A scramble looks like a real word if the letters alternate between vowels and consonants (with "Y" being a vowel for this purpose). However, certain combinations of vowels and consonants are allowed:*

|       |       |       |       |       |       |       |       |       |       |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| AI    | AY    | EA    | EE    | EO    | IO    | OA    | OO    | OY    | YA    |
| YO    | YU    | BL    | BR    | CH    | CK    | CL    | CR    | DR    | FL    |
| FR    | GH    | GL    | GR    | KL    | KR    | KW    | PF    | PL    | PR    |
| SC    | *SCH* | *SCR* | SH    | *SHR* | SK    | SL    | SM    | SN    | SP    |
| SQ    | ST    | SW    | TH    | *THR* | TR    | TW    | WH    | WR    |       |

Also, all double consonants are allowed, and, no other combinations are allowed. *For instance, SWR doesn’t look real even though both SW and WR are independently looking real.*

Word classifications:

- Not – if the word is not scrambled at all
- Poor – if the first letter or any two consecutive letters are in the correct place and the word doesn't look real
- Hard – if none of the letters are in the correct place and the word looks real
- Fair – for all other cases

#### INPUT

A list where each element is a scramble followed by a space followed by the actual word. The characters are expected to be in upper case.

#### OUTPUT

- For not – "\<scrambled\> is not a scramble of \<word\>"
- For poor – "\<scrambled\> is a poor scramble of \<word\>"
- For fair – "\<scrambled\> is a fair scramble of \<word\>"
- For hard – "\<scrambled\> is a hard scramble of \<word\>"

#### SAMPLE INPUT:

```
MAPS SPAM
RIONY IRONY
ONYRI IRONY
IRONY IRONY
INOYR IRONY
IOYRN IRONY
```

#### EXPECTED OUTPUT:

```
MAPS is a fair scramble of SPAM
RIONY is a fair scramble of IRONY
ONYRI is a hard scramble of IRONY
IRONY is not a scramble of IRONY
INOYR is a fair scramble of IRONY
IOYRN is a poor scramble of IRONY
```

## Solution

### Prerequisites

[Node.js](https://nodejs.org/en/download/)

### Setup

#### 1. Install dependencies

```npm install```

#### 2. Compile TypeScript files

```npm run build```

#### 3. Run with sample input

```node dist sample-input.txt```

### Tests

```npm test```
