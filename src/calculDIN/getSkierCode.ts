import { indexToLetter, letterToIndex } from "./convertLetterIndex";
import { heightCode, weightCode } from "./skierCode";

export default function getBaseCode(weight: string, height: string) {
  const weightLetter = weightCode[weight as keyof typeof weightCode];
  const heightLetter = heightCode[height as keyof typeof heightCode];

  const w = letterToIndex(weightLetter);
  const h = letterToIndex(heightLetter);

  const minIndex = Math.max(w, h);

  return indexToLetter(minIndex);
}
