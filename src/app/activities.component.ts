import { Component } from "@angular/core";
import { DATA } from "src/app/data.repository";

@Component({
  selector: "lab-activities",
  template: `
    <article>
      <header>
        <strong>We have {{ activities.length }} activities</strong>
      </header>
      <ul>
        <li *ngFor="let activity of activities">
          <span>{{ activity.title }}</span>
          <span> 🧭 {{ activity.location | uppercase }}</span>
          <span> 📅 {{ activity.date | date : "dd-MMM-yyyy" }}</span>
          <span> 💲 {{ activity.price | number : "0.2" }}</span>
          <span *ngIf="activity.ageCategory === 'adult'"> 🏃🏼 </span>
          <span *ngIf="activity.ageCategory === 'family'"> 👨‍👩‍👧‍👦 </span>
        </li>
      </ul>
    </article>
  `,
  styles: [],
})
export class ActivitiesComponent {
  activities = DATA.activities.filter((a) => a.status === "published");
}
