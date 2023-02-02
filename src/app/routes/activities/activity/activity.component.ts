import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Activity } from "src/app/data/models/activity.type";
import { ActivitiesApiService } from "src/app/services/activities-api.service";

@Component({
  selector: "lab-activity",
  template: ` <h2 *ngIf="activity"> {{ activity.title }} </h2> `,
  styles: [],
})
export class ActivityComponent {
  activity!: Activity;
  constructor(route: ActivatedRoute, api: ActivitiesApiService) {
    const activitySlug = route.snapshot.paramMap.get("slug") || "no slug";

    const activityObservable: Observable<Activity> = api.getBySlug$(activitySlug);
    activityObservable.subscribe((activity: Activity) => (this.activity = activity));
  }
}
