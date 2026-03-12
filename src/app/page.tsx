import AgeForm from "@/components/AgeForm";
import BootsLenghtForm from "@/components/BootsLenghtForm";
import HeightForm from "@/components/HeightForm";
import Result from "@/components/Result";
import SkiLevelForm from "@/components/SkiLevelForm";
import WeightForm from "@/components/WeightForm";

export type WeightVariable = {
  id: number;
  name: string;
  value: string;
};

export type HeightVariable = {
  id: number;
  name: string;
  value: string;
};

export type BootsLengthVariable = {
  id: number;
  name: string;
  value: string;
};

export type SkiLevelVariable = {
  id: number;
  name: string;
  value: string;
};

export type AgeVariable = {
  id: number;
  name: string;
  value: string;
};

export default function Home() {
  const weightVariable: WeightVariable[] = [
    { id: 1, name: "weight1", value: "10-13" },
    { id: 2, name: "weight2", value: "14-17" },
    { id: 3, name: "weight3", value: "18-21" },
    { id: 4, name: "weight4", value: "22-25" },
    { id: 5, name: "weight5", value: "26-30" },
    { id: 6, name: "weight6", value: "31-35" },
    { id: 7, name: "weight7", value: "36-41" },
    { id: 8, name: "weight8", value: "42-48" },
    { id: 9, name: "weight9", value: "49-57" },
    { id: 10, name: "weight10", value: "58-66" },
    { id: 11, name: "weight11", value: "67-78" },
    { id: 12, name: "weight12", value: "79-94" },
    { id: 13, name: "weight13", value: "+95" },
  ];

  const heightVariable: HeightVariable[] = [
    { id: 1, name: "height1", value: "-148" },
    { id: 2, name: "height2", value: "149-157" },
    { id: 3, name: "height3", value: "158-166" },
    { id: 4, name: "height4", value: "167-178" },
    { id: 5, name: "height5", value: "179-194" },
    { id: 6, name: "height6", value: "+195" },
  ];

  const bootsLengthVariable: BootsLengthVariable[] = [
    { id: 1, name: "bootsLength1", value: "<230" },
    { id: 2, name: "bootsLength2", value: "231-250" },
    { id: 3, name: "bootsLength3", value: "251-270" },
    { id: 4, name: "bootsLength4", value: "271-290" },
    { id: 5, name: "bootsLength5", value: "291-310" },
    { id: 6, name: "bootsLength6", value: "311-330" },
    { id: 7, name: "bootsLength7", value: "331-350" },
    { id: 8, name: "bootsLength8", value: "+351" },
  ];

  const skiLevelVariable: SkiLevelVariable[] = [
    { id: 1, name: "skiLevel1", value: "Beginner" },
    { id: 2, name: "skiLevel2", value: "Intermediate" },
    { id: 3, name: "skiLevel3", value: "Advanced" },
  ];

  const ageVariable: AgeVariable[] = [
    { id: 1, name: "age1", value: "<=10" },
    { id: 2, name: "age2", value: "11-49" },
    { id: 3, name: "age3", value: ">=50" },
  ];

  return (
    <div className="flex py-14 items-center justify-center bg-gray-900 text-white">
      <main className="space-y-3 max-w-[90%]">
        <h1 className="font-bold text-2xl text-center md:text-left">
          CACULATE DIN
        </h1>
        <WeightForm weightVariable={weightVariable} />
        <HeightForm heightVariable={heightVariable} />
        <BootsLenghtForm bootsLengthVariable={bootsLengthVariable} />
        <div className="flex flex-col  md:space-x-5 md:flex-row">
          <SkiLevelForm skiLevelVariable={skiLevelVariable} />
          <AgeForm ageVariable={ageVariable} />
          <Result />
        </div>
      </main>
    </div>
  );
}
