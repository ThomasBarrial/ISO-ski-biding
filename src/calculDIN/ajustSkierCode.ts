import { indexToLetter, letterToIndex } from "./convertLetterIndex";

export default function adjustSkierCode(
  code: string,
  skiLevel: string,
  age: string,
) {
  let index = letterToIndex(code);

  if (skiLevel === "Beginner") index -= 1;
  if (skiLevel === "Advanced") index += 1;

  if (age === "<10 - >=50") index -= 1;

  return indexToLetter(index);
}
