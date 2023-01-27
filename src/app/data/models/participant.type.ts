import { Id } from "src/app/data/models/id.type";

export type PaymentMethodValue = "cash" | "transfer" | "card";
export type ParticipantStatusValue =
  | "pending"
  | "accepted"
  | "rejected"
  | "cancelled";
export type Participant = {
  activityId: Id;
  id: Id;
  joinedAt: string;
  payedAt: string;
  paymentMethod: PaymentMethodValue;
  places: number;
  reason: string;
  status: ParticipantStatusValue;
  userId: Id;
  acceptConditions: boolean;
};
