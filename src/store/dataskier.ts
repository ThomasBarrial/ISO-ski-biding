import { create } from "zustand";

type DataSkier = {
  weight: string;
  height: string;
  age: string;
  bootsLength: string;
  skiLevel: string;
};

type DataSkierStore = {
  dataSkier: DataSkier;
  setDataSkier: (data: Partial<DataSkier>) => void;
};

export const useDataSkierStore = create<DataSkierStore>((set) => ({
  dataSkier: {
    weight: "",
    height: "",
    age: "",
    bootsLength: "",
    skiLevel: "",
  },
  setDataSkier: (data) =>
    set((state) => ({ dataSkier: { ...state.dataSkier, ...data } })),
}));
