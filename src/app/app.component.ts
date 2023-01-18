import { Component } from "@angular/core";

@Component({
  selector: "lab-root",
  template: `
    <lab-header></lab-header>
    <main>
      <router-outlet></router-outlet>
      <lab-activities></lab-activities>
    </main>
    <lab-footer></lab-footer>
  `,
  styles: [],
})
export class AppComponent {}
