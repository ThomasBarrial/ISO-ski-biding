export default function adjustBootLength(codeIndex: number, boots: string) {
  if (boots === "-230" || boots === "231-250") {
    return codeIndex - 1;
  }

  if (boots === "311-330" || boots === "331-350" || boots === "+351") {
    return codeIndex + 1;
  }

  return codeIndex;
}
