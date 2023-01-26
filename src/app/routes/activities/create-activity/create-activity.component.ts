import { Component } from "@angular/core";

@Component({
  selector: "lab-create-activity",
  template: `
    <h3> Create your activity </h3>
    <lab-create-activity-form (create)="onCreate($event)">
    </lab-create-activity-form>
  `,
  styles: [],
})
export class CreateActivityComponent {
  onCreate(newActivity: unknown) {
    console.warn("Create activity !!!", newActivity);
  }
}
