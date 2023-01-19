import { Component } from "@angular/core";

@Component({
  selector: "lab-header",
  template: `
    <header>
      <a>
        <h1 routerLink="./"> 🏠 {{ title | titlecase }}! </h1>
      </a>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  title = "Activity bookings";
}
