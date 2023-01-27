import { Id } from "src/app/data/models/id.type";

export type Activity = {
  ageCategory: string;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  status: string;
  title: string;
  userId: Id;
};
