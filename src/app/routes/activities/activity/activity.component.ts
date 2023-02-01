import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Activity } from "src/app/data/models/activity.type";

@Component({
  selector: "lab-activity",
  template: ` <h2 *ngIf="activity"> {{ activity.title }} </h2> `,
  styles: [],
})
export class ActivityComponent {
  activity!: Activity;
  constructor(route: ActivatedRoute, http: HttpClient) {
    const activitySlug = route.snapshot.paramMap.get("s") || "no slug";
    http
      .get<Activity[]>("http://localhost:3000/activities?slug=" + activitySlug)
      .subscribe((data) => {
        this.activity = data[0];
      });
  }
}
