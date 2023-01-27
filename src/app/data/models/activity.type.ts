import { Id } from "src/app/data/models/id.type";

export type AgeCategoryValue = "adult" | "child" | "family";

export type ActivityStatusValue =
  | "draft"
  | "published"
  | "cancelled"
  | "confirmed"
  | "finished";

export type Activity = {
  ageCategory: AgeCategoryValue;
  currency: string;
  date: string;
  description: string;
  id: Id;
  location: string;
  maxParticipants: number;
  minParticipants: number;
  price: number;
  slug: string;
  status: ActivityStatusValue;
  title: string;
  userId: Id;
};
