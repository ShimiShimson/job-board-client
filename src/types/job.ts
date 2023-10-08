export type TTypeOfHiring = "Onsite" | "Remote" | "Hybrid";

export type TJobLocation = {
  city: string;
  country: string;
};

export type TStackItem = string;

export interface IJob {
  id: string;
  title: string;
  location: TJobLocation;
  typeOfHiring: TTypeOfHiring[];
  shortDesc: string;
  longDesc: string;
  requiredStack: TStackItem[];
  salary: string;
  added: string;
}
