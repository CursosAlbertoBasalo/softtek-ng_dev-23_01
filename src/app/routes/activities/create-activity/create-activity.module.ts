import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ReactiveFormsModule } from "@angular/forms";
import { CreateActivityFormComponent } from "./create-activity-form.component";
import { CreateActivityRoutingModule } from "./create-activity-routing.module";
import { CreateActivityComponent } from "./create-activity.component";

@NgModule({
  declarations: [CreateActivityComponent, CreateActivityFormComponent],
  providers: [],
  imports: [CommonModule, CreateActivityRoutingModule, ReactiveFormsModule],
})
export class CreateActivityModule {}
