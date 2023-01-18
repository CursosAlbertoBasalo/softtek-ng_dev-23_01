import { Component } from "@angular/core";
import { DATA } from "src/app/data.repository";

@Component({
  selector: "lab-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = "Activity bookings";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-enero";
  year = new Date().getFullYear();
  activities = DATA.activities.filter((a) => a.status === "published");
}
