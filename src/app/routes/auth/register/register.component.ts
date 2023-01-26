import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
          [attr.aria-invalid]="isInvalid('name')" />
        <small *ngIf="hasMessage('name')">{{ getError("name") }}</small>

        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          formControlName="email"
          [attr.aria-invalid]="isInvalid('email')" />
        <small *ngIf="hasMessage('email')">{{ getError("email") }}</small>

        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          formControlName="password"
          [attr.aria-invalid]="isInvalid('password')" />
        <small *ngIf="hasMessage('password')">{{ getError("password") }}</small>

        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          formControlName="confirmPassword"
          [attr.aria-invalid]="isInvalid('confirmPassword')" />
        <small *ngIf="hasMessage('confirmPassword')">
          {{ getError("confirmPassword") }}
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
})
export class RegisterComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
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
  }

  isInvalid(controlName: string) {
    const control = this.form.controls[controlName];
    if (control.pristine) return null;
    return control.invalid;
  }

  hasMessage(controlName: string) {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  getError(controlName: string) {
    const errors = this.form.controls[controlName].errors;
    if (!errors) return "";
    if (errors["required"]) return "This field is required";

    return JSON.stringify(this.form.controls[controlName].errors);
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
