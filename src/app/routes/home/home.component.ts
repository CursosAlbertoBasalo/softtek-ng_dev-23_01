import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Activity } from "src/app/data/models/activity.type";

@Component({
  selector: "lab-home",
  template: ` <lab-activities [activities]="activities"></lab-activities> `,
  styles: [],
})
export class HomeComponent {
  activities: Activity[] = [];
  // DATA.activities.filter( (a) => a.status === "published");

  constructor(httpClient: HttpClient) {
    httpClient
      .get<Activity[]>("http://localhost:3000/activities?status=published")
      .subscribe((activities) => (this.activities = activities));
  }
}
