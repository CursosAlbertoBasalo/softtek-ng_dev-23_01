import { Id } from "src/app/data/models/id.type";

export type Participant = {
  activityId: Id;
  id: Id;
  joinedAt: string;
  payedAt: string;
  paymentMethod: string;
  places: number;
  reason: string;
  status: string;
  userId: Id;
};
