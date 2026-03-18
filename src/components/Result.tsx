"use client";

import { useDataSkierStore } from "@/store/dataskier";
import { getSkierDIN } from "@/calculDIN/getSkierDIN";

function Result() {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const calculatedResult = getSkierDIN(dataSkier);

  return (
    <div className="bg-gray-700 p-4 w-[95%] md:w-full md:rounded-md rounded-xl space-y-2 flex justify-between items-center shadow-2xl">
      <div className="w-10/12">
        <h2 className="font-bold text-lg">{`RESULT`}</h2>
        <h3 className="text-xs">Provide your informations to get a result</h3>
      </div>
      <p></p>
      <div className="flex justify-between items-end">
        <p className="text-white  text-center md:text-left w-full text-3xl font-bold">
          {calculatedResult}
        </p>
      </div>
    </div>
  );
}

export default Result;
