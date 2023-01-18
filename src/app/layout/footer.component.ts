import { Component } from "@angular/core";

@Component({
  selector: "lab-footer",
  template: `
    <footer>
      <span>{{ title }} app is running!</span>
      <span>
        <a [href]="repoUrl" target="_blank"> Repository on gitHub </a>
      </span>
      <span> ©️ {{ year }} </span>
    </footer>
  `,
  styles: [],
})
export class FooterComponent {
  title = "Activity bookings";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-enero";
  year = new Date().getFullYear();
}
