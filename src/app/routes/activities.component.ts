import { Component } from "@angular/core";
import { DATA } from "src/app/data.repository";

@Component({
  selector: "lab-activities",
  template: `
    <article>
      <header>
        <lab-card-title [title]="getTitle()"/>
      </header>
      <ul>
        <li *ngFor="let activity of activities">
          <lab-age-category [ageCategory]="activity.ageCategory"/>
          <span>{{ activity.title }}</span>
          <lab-location [location]="activity.location"/>
          <lab-date [dateValue]="activity.date"/>
          <lab-price [price]="activity.price" [currency]="activity.currency"/>
        </li>
      </ul>
    </article>
  `,
  styles: [],
})
export class ActivitiesComponent {
  activities = DATA.activities.filter((a) => a.status === "published");
  getTitle() {
    return `Published Activities ${this.activities.length}`;
  }
}
