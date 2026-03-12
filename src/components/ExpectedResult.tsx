"use client";
import { useDataSkierStore } from "@/store/dataskier";
import { useEffect, useState } from "react";
import { getSkierSettings } from "../../skierSettings";

function ExpectedResult() {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const [expectedValue, setExpectedValue] = useState(0);
  const expectedResult = {
    dataSkier: dataSkier,
    expectedValue: expectedValue,
  };

  const [calcultedResult, setCalculatedResult] = useState(0);

  useEffect(() => {
    const storageValue = localStorage.getItem("expectedResult");

    console.log("storageValue", storageValue);
    if (!storageValue) {
      localStorage.setItem("expectedResult", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    const calculatedDIN = getSkierSettings(dataSkier);
    console.log("Calculated DIN:", calculatedDIN);
  }, [dataSkier]);

  const onClick = () => {
    const storageValue = localStorage.getItem("expectedResult");
    localStorage.setItem(
      "expectedResult",
      JSON.stringify([...JSON.parse(storageValue || "[]"), expectedResult]),
    );
  };

  return (
    <div className="flex flex-col  space-y-2">
      <input
        className="bg-gray-500 rounded-md p-2 outline-none"
        type="number"
        onChange={(e) => setExpectedValue(Number(e.target.value))}
      />
      <button
        className="bg-gray-600 rounded-md p-2 outline-none"
        onClick={onClick}
      >
        Submit
      </button>

      <button
        className="bg-gray-600 rounded-md p-2 outline-none"
        onClick={() => {
          localStorage.removeItem("expectedResult");
          console.log("expectedResult removed from localStorage");
        }}
      >
        Clear Storage
      </button>
    </div>
  );
}

export default ExpectedResult;
