import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActivitiesComponent } from "./activities.component";

const routes: Routes = [
  {
    path: "",
    component: ActivitiesComponent,
  },
  {
    path: "create",
    loadChildren: () =>
      import("./create-activity/create-activity.module").then(
        (m) => m.CreateActivityModule
      ),
  },
  {
    path: ":slug",
    loadChildren: () =>
      import("./activity/activity.module").then((m) => m.ActivityModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActivitiesRoutingModule {}
