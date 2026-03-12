import adjustBootLength from "./ajustBootsLenght";
import adjustSkierCode from "./ajustSkierCode";
import { bootsIndex } from "./bootsIndex";
import { dinTable } from "./dinTable";
import getBaseCode from "./getSkierCode";

export function calculateDIN(data: {
  weight: string;
  height: string;
  age: string;
  bootsLength: string;
  skiLevel: string;
}) {
  const baseCode = getBaseCode(data.weight, data.height);

  console.log(
    "Base Code:",
    baseCode,
    "weight",
    data.weight,
    "height",
    data.height,
  );

  const adjustedCode = adjustSkierCode(baseCode, data.skiLevel, data.age);

  const column = bootsIndex[data.bootsLength as keyof typeof bootsIndex];

  const din = dinTable[adjustedCode as keyof typeof dinTable][column];

  return adjustBootLength(din, data.bootsLength);
}
