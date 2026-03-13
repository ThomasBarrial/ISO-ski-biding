import AgeForm from "@/components/AgeForm";
import BootsLenghtForm from "@/components/BootsLenghtForm";
import HeightForm from "@/components/HeightForm";
import Result from "@/components/Result";
import SkiLevelForm from "@/components/SkiLevelForm";
import WeightForm from "@/components/WeightForm";
import {
  ageVariable,
  bootsLengthVariable,
  heightVariable,
  skiLevelVariable,
  weightVariable,
} from "@/data/varaibles";

export default function Home() {
  return (
    <div className="flex py-14 items-center justify-center bg-gray-900 text-white min-h-screen">
      <main className="space-y-3 w-[90%] md:max-w-[90%]">
        <h1 className="font-bold text-2xl text-center md:text-left">
          CACULATE DIN
        </h1>
        <div className="flex flex-col md:flex-row md:space-x-5">
          <div className="space-y-3 w-full md:w-8/12">
            <WeightForm weightVariable={weightVariable} />
            <HeightForm heightVariable={heightVariable} />
            <BootsLenghtForm bootsLengthVariable={bootsLengthVariable} />
          </div>
          <div className="space-y-3 w-full md:w-4/12">
            <SkiLevelForm skiLevelVariable={skiLevelVariable} />
            <AgeForm ageVariable={ageVariable} />
            <div className="hidden md:block">
              <Result />
            </div>
          </div>
          <div className="md:hidden sticky bottom-10 left-0 flex justify-center">
            <Result />
          </div>
        </div>
      </main>
    </div>
  );
}
