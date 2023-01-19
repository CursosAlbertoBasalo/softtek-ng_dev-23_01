import { Component } from "@angular/core";
import { DATA } from "src/app/data.repository";

@Component({
  selector: "lab-activities",
  template: `
    <article>
      <header>
        <strong>Published Activities {{ activities.length }}</strong>
      </header>
      <ul>
        <li *ngFor="let activity of activities">
          <span *ngIf="activity.ageCategory === 'adult'" data-tooltip="Adults">
            🏃🏼
          </span>
          <span
            *ngIf="activity.ageCategory === 'family'"
            data-tooltip="Every one">
            👨‍👩‍👧‍👦
          </span>
          <span>{{ activity.title }}</span>
          <span> 🧭 {{ activity.location | uppercase }}</span>
          <span> 📅 {{ activity.date | date : "dd-MMM-yyyy" }}</span>
          <span> 🪙 {{ activity.price | currency : activity.currency }}</span>
        </li>
      </ul>
    </article>
  `,
  styles: [],
})
export class ActivitiesComponent {
  activities = DATA.activities.filter((a) => a.status === "published");
}
