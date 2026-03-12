"use client";

import { SkiLevelVariable } from "@/app/page";
import { useDataSkierStore } from "@/store/dataskier";

interface IProps {
  skiLevelVariable: SkiLevelVariable[];
}

function SkiLevelForm({ skiLevelVariable }: IProps) {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const setDataSkier = useDataSkierStore((state) => state.setDataSkier);
  return (
    <div className="bg-gray-800 p-6 w-full rounded-md space-y-2">
      <h2 className="font-bold text-lg">{`SKI LEVEL`}</h2>
      <div className="flex space-x-3 space-y-3 flex-wrap">
        {skiLevelVariable.map((skiLevel) => (
          <div key={skiLevel.id}>
            <button
              className={` p-5 rounded-md min-w-25  ${dataSkier.skiLevel === skiLevel.value ? "bg-blue-500" : "bg-gray-600"}`}
              type="button"
              onClick={() =>
                setDataSkier({ ...dataSkier, skiLevel: skiLevel.value })
              }
            >
              <label htmlFor={skiLevel.name}>{skiLevel.value}</label>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkiLevelForm;
