import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  template: `
    <h2> 🔏 Create your user profile </h2>
    <form [formGroup]="form">
      <fieldset>
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" formControlName="name" />
        <label for="email">Email</label>
        <input type="email" id="email" name="email" formControlName="email" />
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          formControlName="password" />
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          formControlName="confirmPassword" />
      </fieldset>
      <div>
        <button type="submit" (click)="register()" [disabled]="form.invalid"
          >Register me</button
        >
      </div>
    </form>
    <pre>
      <code> InValid: {{ form.invalid }}</code>
      <code> {{ form.value | json }} </code>
    </pre>
  `,
  styles: [],
})
export class RegisterComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", []],
      confirmPassword: ["", []],
    });
  }

  register() {
    console.log(this.form.value);
  }
}
