import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "lab-activity",
  template: ` <p> {{ activitySlug }} </p> `,
  styles: [],
})
export class ActivityComponent {
  activitySlug = "";
  constructor(route: ActivatedRoute) {
    this.activitySlug = route.snapshot.paramMap.get("slug") || "no slug";
  }
}
