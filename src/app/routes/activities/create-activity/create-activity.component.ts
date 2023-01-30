import { Component } from "@angular/core";
import { DATA } from "src/app/data/data.repository";
import { Activity } from "src/app/data/models/activity.type";
import { AgeCategory } from "src/app/data/models/option.type";
import { HelperService } from "src/app/services/helper.service";

@Component({
  selector: "lab-create-activity",
  template: `
    <h3> Create your activity </h3>
    <lab-create-activity-form
      [ageCategories]="ageCategories"
      (create)="onCreate($event)">
    </lab-create-activity-form>
  `,
  styles: [],
})
export class CreateActivityComponent {
  ageCategories: AgeCategory[] = DATA.ageCategories;
  //doer: HelperService;

  constructor(public doer: HelperService) {
    doer.doThings("Constructor CreateActivityComponent");
    //this.doer = doer;
  }

  onCreate(newActivity: Activity) {
    console.warn("Create activity !!!", newActivity);
    this.doer.doThings("onCreate");
  }
}
