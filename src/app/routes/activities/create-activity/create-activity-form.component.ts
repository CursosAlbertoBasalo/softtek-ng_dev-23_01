import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "lab-create-activity-form",
  template: `
    <form [formGroup]="form">
      <fieldset>
        <label for="title"> Title </label>
        <input
          id="title"
          name="title"
          type="text"
          formControlName="title"
          [attr.aria-invalid]="isInvalid('title')" />
        <small *ngIf="hasMessage('title')">
          {{ getError("title") }}
        </small>
        <label for="description"> Description </label>
        <textarea
          id="description"
          name="description"
          formControlName="description"
          [attr.aria-invalid]="isInvalid('description')">
        </textarea>
        <small *ngIf="hasMessage('description')">
          {{ getError("description") }}
        </small>
        <label for="date"> Date </label>
        <input id="date" name="date" type="date" formControlName="date" />
        <label for="location"> Location </label>
        <input
          id="location"
          name="location"
          type="text"
          formControlName="location" />
        <label for="price"> Price </label>
        <input
          id="price"
          name="price"
          type="number"
          formControlName="price"
          [attr.aria-invalid]="isInvalid('price')" />
        <small *ngIf="hasMessage('price')">
          {{ getError("price") }}
        </small>
      </fieldset>
    </form>
  `,
  styles: [],
})
export class CreateActivityFormComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      title: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(1000),
        ],
      ],
      date: ["", [Validators.required]],
      location: ["", [Validators.required]],
      price: [10, [Validators.min(10), Validators.max(1000)]],
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
}
