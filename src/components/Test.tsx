"use client";

import { useEffect, useState } from "react";
import sample from "../../expectedValue";
import { calculateDIN } from "@/calculDIN/calculateDIN";

function Test() {
  const [result, setResult] = useState<typeof sample>([]);
  useEffect(() => {
    sample.forEach((item) => {
      const res = calculateDIN(item.dataSkier);
      setResult((prev) => [
        ...prev,
        { dataSkier: item.dataSkier, expectedValue: res },
      ]);
    });
  }, []);
  return (
    <div className="w-full flex justify-between space-x-2 px-10 mt-10">
      <div className="flex flex-col space-y-2 w-1/2">
        {sample.map((item, index) => (
          <div className="p-5 bg-gray-600" key={index}>
            <h3>{`Weight: ${item.dataSkier.weight} kg`}</h3>
            <h3>{`Height: ${item.dataSkier.height} cm`}</h3>
            <h3>{`Boots Length: ${item.dataSkier.bootsLength} mm`}</h3>
            <h3>{`Ski Level: ${item.dataSkier.skiLevel}`}</h3>
            <h3>{`Age: ${item.dataSkier.age} years`}</h3>
            <h2>{`Expected DIN: ${item.expectedValue}`}</h2>
          </div>
        ))}
      </div>
      <div className="flex flex-col space-y-2 w-1/2">
        {result.map((item, index) => (
          <div className="p-5 bg-gray-600" key={index}>
            <h3>{`Weight: ${item.dataSkier.weight} kg`}</h3>
            <h3>{`Height: ${item.dataSkier.height} cm`}</h3>
            <h3>{`Boots Length: ${item.dataSkier.bootsLength} mm`}</h3>
            <h3>{`Ski Level: ${item.dataSkier.skiLevel}`}</h3>
            <h3>{`Age: ${item.dataSkier.age} years`}</h3>
            <h2>{`Expected DIN: ${item.expectedValue}`}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Test;
