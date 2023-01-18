import { Component } from "@angular/core";

@Component({
  selector: "lab-root",
  template: `
    <lab-header/>
    <main>
      <router-outlet/>
      <lab-activities/>
    </main>
    <lab-footer/>
  `,
  styles: [],
})
export class AppComponent {}
