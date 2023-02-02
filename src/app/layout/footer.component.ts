import { Component } from "@angular/core";
import { NotificationsService } from "src/app/services/notifications.service";
import { Notification } from "../data/models/notification.type";

@Component({
  selector: "lab-footer",
  template: `
    <footer>
      <nav>
        <ul>
          <li>
            <a [href]="repoUrl" target="_blank"> 🧑🏼‍💻 Repository on gitHub </a>
          </li>
          <li> ©️ {{ year }} </li>
        </ul>
        <ul>
          <li>
            <a routerLink="about"> ℹ️ About us </a>
          </li>
          <li>
            <a routerLink="contact"> 📧 Get in contact </a>
          </li>
        </ul>
      </nav>
      <pre *ngIf="notification"> {{ notification | json }} </pre>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  title = "Activity bookings";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-enero";
  year = new Date().getFullYear();
  notification!: Notification;

  constructor(public notifications: NotificationsService) {
    // notifications.notification$.next();
    notifications
      .getNotification$()
      .subscribe((notification) => (this.notification = notification));
  }
}
