import { Component } from "@angular/core";
import { HelperService } from "src/app/services/helper.service";

@Component({
  selector: "lab-root",
  template: `
    <lab-header/>
    <main>
      <router-outlet/>
    </main>
    <lab-footer/>
  `,
  styles: [],
})
export class AppComponent {
  constructor(public doer: HelperService) {
    doer.doThings("Constructor AppComponent");
    //this.doer = doer;
  }
}
