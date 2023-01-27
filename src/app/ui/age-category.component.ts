import { Component, Input } from "@angular/core";
import { DATA } from "src/app/data/data.repository";
import { Id } from "src/app/data/models/id.type";
import { AgeCategory } from "src/app/data/models/option.type";

@Component({
  selector: "lab-age-category",
  template: `
    <span [attr.data-tooltip]="getTooltip()"> {{ getIcon() }} </span>
  `,
  styles: [],
})
export class AgeCategoryComponent {
  @Input() ageCategory: Id = "0";

  private ageCategories: AgeCategory[] = DATA.ageCategories;
  private defaultAgeCategory: AgeCategory = {
    caption: "",
    icon: "❔",
    id: "0",
    userId: "0",
  };

  getTooltip(): string {
    return this.getAgeCategory().caption;
  }
  getIcon(): string {
    return this.getAgeCategory().icon;
  }
  private getAgeCategory(): AgeCategory {
    const ageCategory = this.ageCategories.find(
      (a) => a.id === this.ageCategory
    );
    return ageCategory || this.defaultAgeCategory;
  }
}
