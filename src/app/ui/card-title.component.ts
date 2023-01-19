import { Component, Input } from "@angular/core";

@Component({
  selector: "lab-card-title",
  template: ` <strong>{{ title }}</strong> `,
  styles: [],
})
export class CardTitleComponent {
  @Input() title = "";
}
