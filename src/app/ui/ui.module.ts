import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTitleComponent } from './card-title.component';
import { AgeCategoryComponent } from './age-category.component';
import { LocationComponent } from './location.component';
import { DateComponent } from './date.component';
import { PriceComponent } from './price.component';



@NgModule({
  declarations: [
    CardTitleComponent,
    AgeCategoryComponent,
    LocationComponent,
    DateComponent,
    PriceComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardTitleComponent,
    AgeCategoryComponent,
    LocationComponent,
    DateComponent,
    PriceComponent
  ]
})
export class UiModule { }
