import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ActivitiesComponent } from "src/app/routes/home/activities.component";

import { UiModule } from "src/app/ui/ui.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";

@NgModule({
  declarations: [HomeComponent, ActivitiesComponent],
  imports: [CommonModule, HomeRoutingModule, UiModule],
})
export class HomeModule {}
