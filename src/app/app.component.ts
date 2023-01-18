import { Component } from "@angular/core";

@Component({
  selector: "lab-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent {
  title = "Activity bookings";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-enero";
  year = new Date().getFullYear();
}
