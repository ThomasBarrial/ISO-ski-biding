"use client";
import { BootsLengthVariable } from "@/app/page";
import { useDataSkierStore } from "@/store/dataskier";

interface IProps {
  bootsLengthVariable: BootsLengthVariable[];
}

function BootsLenghtForm({ bootsLengthVariable }: IProps) {
  const dataSkier = useDataSkierStore((state) => state.dataSkier);
  const setDataSkier = useDataSkierStore((state) => state.setDataSkier);

  return (
    <div className="bg-gray-800 p-3 md:p-6 w-full rounded-md space-y-2">
      <h2 className="font-bold text-lg">{`BOOTS LENGTH (mm)`}</h2>
      <div className="flex space-x-2 md:space-x-3 space-y-3 flex-wrap w-full justify-center md:justify-start">
        {bootsLengthVariable.map((bootsLength) => (
          <div key={bootsLength.id}>
            <button
              className={`w-full p-5 rounded-md min-w-25  ${dataSkier.bootsLength === bootsLength.value ? "bg-blue-500" : "bg-gray-600"}`}
              type="button"
              onClick={() =>
                setDataSkier({ ...dataSkier, bootsLength: bootsLength.value })
              }
            >
              <p>{bootsLength.value}</p>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BootsLenghtForm;
