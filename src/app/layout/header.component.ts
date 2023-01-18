import { Component } from "@angular/core";

@Component({
  selector: "lab-header",
  template: `
    <header>
      <h1> Welcome to {{ title | titlecase }}! </h1>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  title = "Activity bookings";
}
