import { Id } from "src/app/data/models/id.type";

export type Activity = {
  id: Id;
  name: string;
  description: string;
  date: Date;
  price?: number;
};
