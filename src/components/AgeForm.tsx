"use client";

import { AgeVariable } from "@/data/varaibles";
import { useDataSkierStore } from "@/store/dataskier";

function AgeForm({ ageVariable }: { ageVariable: AgeVariable[] }) {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const setDataSkier = useDataSkierStore((state) => state.setDataSkier);

  return (
    <div className="bg-gray-800 p-3 md:p-6 w-full rounded-md space-y-2">
      <h2 className="font-bold text-lg">{`AGE`}</h2>
      <div className="flex space-x-2 md:space-x-3 space-y-3 md:space-y-0 flex-wrap w-full justify-center md:justify-start">
        {ageVariable.map((age) => (
          <div key={age.id}>
            <button
              className={`w-full p-5 rounded-md min-w-25  ${dataSkier.age === age.value ? "bg-blue-500" : "bg-gray-600"}`}
              type="button"
              onClick={() => setDataSkier({ ...dataSkier, age: age.value })}
            >
              <p>{age.value}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgeForm;
