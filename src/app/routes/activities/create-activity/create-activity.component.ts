import { Component } from "@angular/core";
import { DATA } from "src/app/data/data.repository";
import { Activity } from "src/app/data/models/activity.type";
import { AgeCategory } from "src/app/data/models/option.type";
import { ActivitiesApiService } from "src/app/services/activities-api.service";
import { HelperService } from "src/app/services/helper.service";

@Component({
  selector: "lab-create-activity",
  template: `
    <h3> Create your activity </h3>
    <lab-create-activity-form [ageCategories]="ageCategories" (create)="onCreate($event)">
    </lab-create-activity-form>
  `,
  providers: [],
  styles: [],
})
export class CreateActivityComponent {
  ageCategories: AgeCategory[] = DATA.ageCategories;

  constructor(public helper: HelperService, public api: ActivitiesApiService) {}

  onCreate(newActivity: Activity) {
    if (newActivity.minParticipants > newActivity.maxParticipants) {
      throw new Error("Min participants cannot be greater than max participants");
    }
    newActivity.slug = this.helper.slugify(newActivity.title);

    this.api.post$(newActivity).subscribe();
  }
}

// Classic subscription
// this.http
//   .post<Activity>("http://localhost:3000/activities", newActivity)
//   .subscribe(
//     (data) => {
//       console.warn("Create activity !!!", newActivity);
//       this.notifications.notification = {
//         message: "Activity created: " + data.id,
//         type: "success",
//       };
//       console.warn("Notifications", this.notifications.notification);
//     },
//     (error) => {
//       console.warn("Not Created activity !!!", newActivity);
//       this.notifications.notification = {
//         message: "Activity no created: " + error.message,
//         type: "error",
//       };
//       console.warn("Notifications", this.notifications.notification);
//     }
//   );

// Modern subscription
// this.http.get<any>("").subscribe({
//   next: (data) => {},
//   error: (error) => {},
// });
