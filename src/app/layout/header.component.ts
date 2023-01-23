import { Component } from "@angular/core";

@Component({
  selector: "lab-header",
  template: `
    <header>
      <nav>
        <ul>
          <li>
            <a>
              <strong routerLink="./"> 🏠 {{ title | titlecase }}! </strong>
            </a>
          </li>
        </ul>
        <ul>
          <li> <a routerLink="activities"> ➡️ Activities </a> </li>
          <li> <a routerLink="auth/register"> 🔏 Register </a> </li>
        </ul>
      </nav>
    </header>
  `,
  styles: [],
})
export class HeaderComponent {
  title = "Activity bookings";
}
