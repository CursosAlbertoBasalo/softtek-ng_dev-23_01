import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { LayoutModule } from "src/app/layout/layout.module";
import { ActivitiesComponent } from "./activities.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, ActivitiesComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
