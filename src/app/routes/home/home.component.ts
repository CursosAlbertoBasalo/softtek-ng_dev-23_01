import { Component } from "@angular/core";
import { Activity } from "src/app/data/models/activity.type";
import { ActivitiesApiService } from "src/app/services/activities-api.service";

@Component({
  selector: "lab-home",
  template: ` <lab-activities [activities]="activities"></lab-activities> `,
  styles: [],
})
export class HomeComponent {
  activities: Activity[] = [];
  // DATA.activities.filter( (a) => a.status === "published");

  constructor(activitiesApi: ActivitiesApiService) {
    const activitiesObservable = activitiesApi.getByQuery$("status=published");

    const subscription = activitiesObservable.subscribe(
      (activities) => (this.activities = activities)
    );

    //subscription.unsubscribe();

    // httpClient
    //   .get<Activity[]>("http://localhost:3000/activities?status=published")
    //   .subscribe((activities) => (this.activities = activities));
  }
}
