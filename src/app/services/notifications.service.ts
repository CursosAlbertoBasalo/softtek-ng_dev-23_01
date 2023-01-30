import { Injectable } from "@angular/core";
import { Notification } from "../data/models/notification.type";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  notification!: Notification;

  constructor() {}
}
