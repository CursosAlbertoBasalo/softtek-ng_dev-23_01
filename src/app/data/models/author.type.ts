import { Id } from "src/app/data/models/id.type";

export type Author = {
  id: Id;
  name: string;
  twitter: string;
  www: string;
  github: string;
  linkedIn: string;
  userId: Id;
};
