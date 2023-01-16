import { Component } from "@angular/core";

@Component({
  selector: "lab-root",
  template: `
    <header>
      <h1> Welcome to {{ title }}! </h1>
      <p>
        sumar {{ numberOne }} + {{ numberTwo }} =
        {{ sumar(numberOne, numberTwo) }}
      </p>
    </header>
    <router-outlet></router-outlet>
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
export class AppComponent {
  title = "Activity bookings";
  repoUrl = "https://github.com/classroomLabs/softtek-angular_intro-enero";
  year = new Date().getFullYear();
  numberOne = 77;
  numberTwo = 88;

  sumar(uno: number, dos: number) {
    return uno + dos;
  }
}
