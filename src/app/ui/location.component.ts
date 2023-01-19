import { Component, Input } from "@angular/core";

@Component({
  selector: "lab-location",
  template: ` <span> 🧭 {{ location | uppercase }}</span> `,
  styles: [],
})
export class LocationComponent {
  @Input() location = "";
}
