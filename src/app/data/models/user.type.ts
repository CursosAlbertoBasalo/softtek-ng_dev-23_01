import { Id } from "src/app/data/models/id.type";

export type User = {
  email: string;
  id: Id;
  name: string;
  password: string;
};
