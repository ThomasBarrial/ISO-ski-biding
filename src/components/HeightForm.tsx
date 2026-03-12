"use client";
import { HeightVariable } from "@/app/page";
import { useDataSkierStore } from "@/store/dataskier";

interface IProps {
  heightVariable: HeightVariable[];
}

function HeightForm({ heightVariable }: IProps) {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const setDataSkier = useDataSkierStore((state) => state.setDataSkier);

  return (
    <div className="bg-gray-800 p-6 w-full rounded-md space-y-2">
      <h2 className="font-bold text-lg">{`HEIGHT (cm)`}</h2>
      <div className="flex space-x-3 space-y-3 flex-wrap">
        {heightVariable.map((height) => (
          <div key={height.id}>
            <button
              className={` p-5 rounded-md min-w-25  ${dataSkier.height === height.value ? "bg-blue-500" : "bg-gray-600"}`}
              type="button"
              onClick={() =>
                setDataSkier({ ...dataSkier, height: height.value })
              }
            >
              <label htmlFor={height.name}>{height.value}</label>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeightForm;
