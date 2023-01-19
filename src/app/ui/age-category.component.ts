import { Component, Input } from "@angular/core";
import { DATA } from "src/app/data.repository";

@Component({
  selector: "lab-age-category",
  template: `
    <span [attr.data-tooltip]="getTooltip()"> {{ getIcon() }} </span>
  `,
  styles: [],
})
export class AgeCategoryComponent {
  @Input() ageCategory = "";

  private ageCategories = DATA.ageCategories;
  private defaultAgeCategory = { caption: "", icon: "❔" };

  getTooltip() {
    this.getAgeCategory().caption;
  }
  getIcon() {
    this.getAgeCategory().icon;
  }
  private getAgeCategory() {
    const ageCategory = this.ageCategories.find(
      (a) => a.id === this.ageCategory
    );
    return ageCategory || this.defaultAgeCategory;
  }
}
