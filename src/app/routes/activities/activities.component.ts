import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Activity } from "src/app/data/models/activity.type";

@Component({
  selector: "lab-activities",
  template: `
    <h2> List of all the activities </h2>
    <div *ngFor="let activity of activities">
      {{ activity.title }}
    </div>
  `,
  styles: [],
})
export class ActivitiesComponent {
  activities: Activity[] = [];

  constructor(private http: HttpClient) {
    this.loadActivities();
  }

  loadActivities() {
    console.log("16 getting activities");

    this.http
      .get<Activity[]>("http://localhost:3000/activities")
      .subscribe((data) => {
        console.log("21 data arrived");
        this.activities = data;
      });

    console.log("24 activities ok");
  }
}
