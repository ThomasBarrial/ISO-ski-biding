"use client";

import { useDataSkierStore } from "@/store/dataskier";
import ExpectedResult from "./ExpectedResult";

function Result() {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);

  return (
    <div className="bg-gray-800 p-6 w-full rounded-md space-y-2">
      <h2 className="font-bold text-lg">{`RESULT`}</h2>
      <div className="flex justify-between items-end">
        <div>
          <h3>{`Weight: ${dataSkier.weight} kg`}</h3>
          <h3>{`Height: ${dataSkier.height} cm`}</h3>
          <h3>{`Boots Length: ${dataSkier.bootsLength} mm`}</h3>
          <h3>{`Ski Level: ${dataSkier.skiLevel}`}</h3>
          <h3>{`Age: ${dataSkier.age} years`}</h3>
        </div>
        <ExpectedResult />
      </div>
    </div>
  );
}

export default Result;
