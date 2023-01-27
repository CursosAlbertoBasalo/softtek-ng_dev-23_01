import { Id } from "src/app/data/models/id.type";

export type Option = {
  caption: string;
  icon: string;
  id: string;
  userId: Id;
};

export type ActivityStatus = Option;

export type AgeCategory = Option;

export type ParticipantStatus = Option;

export type PaymentMethod = Option;
