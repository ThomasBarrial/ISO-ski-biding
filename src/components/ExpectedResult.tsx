"use client";
import { getSkierSettings } from "@/calculDIN/v2/getSkierSettings";
import { useDataSkierStore } from "@/store/dataskier";

function ExpectedResult() {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);

  const calculatedResult = getSkierSettings(dataSkier);

  return (
    <p className="text-white  text-center md:text-left w-full text-6xl font-bold">
      {calculatedResult}
    </p>
  );
}

export default ExpectedResult;
