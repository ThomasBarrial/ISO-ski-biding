"use client";

import { useDataSkierStore } from "@/store/dataskier";
import { getSkierDIN } from "@/calculDIN/getSkierDIN";

function Result() {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const calculatedResult = getSkierDIN(dataSkier);

  return (
    <div className="bg-gray-700 p-5 w-[98%] md:w-full rounded-md space-y-2 flex justify-between items-center shadow-2xl">
      <h2 className="font-bold text-center md:text-left text-lg">{`RESULT`}</h2>
      <div className="flex justify-between items-end">
        <p className="text-white  text-center md:text-left w-full text-3xl font-bold">
          {calculatedResult}
        </p>
      </div>
    </div>
  );
}

export default Result;
