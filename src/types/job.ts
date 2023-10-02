
export type TypeOfHiring = "Onsite" | "Remote" | "Hybrid";

export type JobLocation = {
  city: string;
  country: string;
};

export type StackItem = string;

export interface Job {
  title: string;
  location: JobLocation;
  typeOfHiring: TypeOfHiring[];
  shortDesc: string;
  longDesc: string;
  requiredStack: StackItem[];
  salary: string;
  added: string;
}
