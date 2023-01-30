import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormsService } from "src/app/services/forms.service";

@Component({
  template: `
    <h2> 🔏 Create your user profile </h2>
    <form [formGroup]="form">
      <fieldset>
        <label for="name">Your name</label>
        <input
          type="text"
          id="name"
          name="name"
          formControlName="name"
          [attr.aria-invalid]="fs.isInvalid('name')" />
        <small *ngIf="fs.hasMessage('name')">{{ fs.getError("name") }}</small>

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          formControlName="email"
          [attr.aria-invalid]="fs.isInvalid('email')" />
        <small *ngIf="fs.hasMessage('email')">{{ fs.getError("email") }}</small>

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          formControlName="password"
          [attr.aria-invalid]="fs.isInvalid('password')" />
        <small *ngIf="fs.hasMessage('password')">{{
          fs.getError("password")
        }}</small>

        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          formControlName="confirmPassword"
          [attr.aria-invalid]="fs.isInvalid('confirmPassword')" />
        <small *ngIf="fs.hasMessage('confirmPassword')">
          {{ fs.getError("confirmPassword") }}
        </small>
      </fieldset>
      <div>
        <button class="secondary" (click)="form.reset()">Reset</button>
        <button type="submit" (click)="register()" [disabled]="form.invalid">
          Register me
        </button>
      </div>
    </form>
  `,
  providers: [FormsService],
})
export class RegisterComponent {
  form: FormGroup;
  constructor(fb: FormBuilder, public fs: FormsService) {
    this.form = fb.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
    });
    fs.form = this.form;
  }

  register() {
    const password = this.form.controls["password"].value;
    const confirmPassword = this.form.controls["confirmPassword"].value;
    if (password !== confirmPassword) {
      this.form.controls["confirmPassword"].setErrors({ notSame: true });
      console.log("Passwords do not match");
      return;
    }
    console.log("posting to API: ", this.form.value);
  }
}
