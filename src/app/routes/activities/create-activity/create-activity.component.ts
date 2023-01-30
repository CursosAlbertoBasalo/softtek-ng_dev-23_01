import { Component } from "@angular/core";
import { DATA } from "src/app/data/data.repository";
import { Activity } from "src/app/data/models/activity.type";
import { AgeCategory } from "src/app/data/models/option.type";
import { HelperService } from "src/app/services/helper.service";
import { NotificationsService } from "src/app/services/notifications.service";

@Component({
  selector: "lab-create-activity",
  template: `
    <h3> Create your activity </h3>
    <lab-create-activity-form
      [ageCategories]="ageCategories"
      (create)="onCreate($event)">
    </lab-create-activity-form>
  `,
  providers: [],
  styles: [],
})
export class CreateActivityComponent {
  ageCategories: AgeCategory[] = DATA.ageCategories;

  constructor(
    public helper: HelperService,
    public notifications: NotificationsService
  ) {}

  onCreate(newActivity: Activity) {
    if (newActivity.minParticipants > newActivity.maxParticipants) {
      throw new Error(
        "Min participants cannot be greater than max participants"
      );
    }
    newActivity.slug = this.helper.slugify(newActivity.title);
    console.warn("Create activity !!!", newActivity);
    this.notifications.notification = {
      message: "Activity created",
      type: "success",
    };
    console.warn("Notifications", this.notifications.notification);
  }
}
