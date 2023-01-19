import { Component, Input } from "@angular/core";

@Component({
  selector: "lab-date",
  template: ` <span> 📅 {{ dateValue | date : "dd-MMM-yyyy" }}</span> `,
  styles: [],
})
export class DateComponent {
  @Input() dateValue = "";
}
