import { Component, Input } from "@angular/core";
import { Activity } from "src/app/data/models/activity.type";

@Component({
  selector: "lab-activities",
  template: `
    <article>
      <header >
        <nav> 
          <lab-card-title [title]="getTitle()"/>
          <a routerLink="activities/create">Create activity</a>
        </nav>
      </header>
      <ul>
        <li *ngFor="let activity of activities">
          <lab-age-category [ageCategory]="activity.ageCategory"/>
          <span><a [routerLink]=" ['activities' , activity.slug]"> {{ activity.title }}</a></span>
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
  @Input() activities: Activity[] = [];
  getTitle(): string {
    return `Published Activities ${this.activities.length}`;
  }
}
