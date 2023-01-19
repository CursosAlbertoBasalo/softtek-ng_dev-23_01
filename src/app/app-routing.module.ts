import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "src/app/routes/about.component";
import { ActivitiesComponent } from "src/app/routes/activities.component";

const routes: Routes = [
  {
    path: "",
    component: ActivitiesComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
