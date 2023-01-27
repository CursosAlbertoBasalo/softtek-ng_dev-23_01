import { Id } from "src/app/data/models/id.type";

export type Contact = {
  address: string;
  id: Id;
  country: string;
  phone: string;
  userId: Id;
};
