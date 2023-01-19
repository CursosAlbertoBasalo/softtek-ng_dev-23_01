import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { LayoutModule } from "src/app/layout/layout.module";
import { UiModule } from "src/app/ui/ui.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./routes/about.component";
import { ActivitiesComponent } from "./routes/activities.component";

@NgModule({
  declarations: [AppComponent, ActivitiesComponent, AboutComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, UiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
