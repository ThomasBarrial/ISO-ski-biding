const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
];

export const letterToIndex = (letter: string) => letters.indexOf(letter);

export const indexToLetter = (index: number) =>
  letters[Math.max(0, Math.min(index, letters.length - 1))];
