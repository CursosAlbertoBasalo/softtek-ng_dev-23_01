import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Notification } from "../data/models/notification.type";

@Injectable({
  providedIn: "root",
})
export class NotificationsService {
  private notification$ = new BehaviorSubject<Notification>({
    message: "",
    type: "success",
  });

  notify(notification: Notification) {
    this.notification$.next(notification);
  }

  getNotification$() {
    return this.notification$.asObservable();
  }

  getSnapshot(): Notification {
    return this.notification$.value;
  }
}
