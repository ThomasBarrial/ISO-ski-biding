"use client";
import { useDataSkierStore } from "@/store/dataskier";

interface IProps {
  weightVariable: {
    id: number;
    name: string;
    value: string;
  }[];
}

function WeightForm({ weightVariable }: IProps) {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const setDataSkier = useDataSkierStore((state) => state.setDataSkier);

  return (
    <div className="bg-gray-800 p-3 md:p-6 w-full rounded-md space-y-2">
      <h2 className="font-bold text-lg">{`WEIGHT (kg)`}</h2>
      <div className="flex space-x-2 md:space-x-3 space-y-3 flex-wrap w-full justify-center md:justify-start">
        {weightVariable.map((weight) => (
          <div key={weight.id}>
            <button
              className={`w-full p-5 rounded-md min-w-25  ${dataSkier.weight === weight.value ? "bg-blue-500" : "bg-gray-600"}`}
              type="button"
              onClick={() =>
                setDataSkier({ ...dataSkier, weight: weight.value })
              }
            >
              <p>{weight.value}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeightForm;
