import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateActivityRoutingModule } from './create-activity-routing.module';
import { CreateActivityComponent } from './create-activity.component';


@NgModule({
  declarations: [
    CreateActivityComponent
  ],
  imports: [
    CommonModule,
    CreateActivityRoutingModule
  ]
})
export class CreateActivityModule { }
