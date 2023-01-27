import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Activity } from "src/app/data/models/activity.type";
import { AgeCategory } from "src/app/data/models/option.type";

@Component({
  selector: "lab-create-activity-form",
  template: `
    <form [formGroup]="form">
      <fieldset>
        <div>
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
        </div>
        <div>
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
        </div>
        <div class="grid">
          <div>
            <label for="date"> Date </label>
            <input id="date" name="date" type="date" formControlName="date" />
          </div>
          <div>
            <label for="location"> Location </label>
            <input
              id="location"
              name="location"
              type="text"
              formControlName="location" />
          </div>
        </div>
        <div class="grid">
          <div>
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
          </div>
          <div>
            <label for="currency"> Currency </label>
            <input
              id="currency"
              name="currency"
              type="text"
              formControlName="currency"
              [attr.aria-invalid]="isInvalid('currency')" />
          </div>
        </div>
        <div>
          <label for="ageCategory"> Age Category </label>
          <select
            id="ageCategory"
            name="ageCategory"
            formControlName="ageCategory">
            <option
              *ngFor="let ageCategory of ageCategories"
              [value]="ageCategory.id">
              {{ ageCategory.icon + ageCategory.caption }}
            </option>
          </select>
        </div>
      </fieldset>
      <div>
        <button class="secondary" (click)="form.reset()">Reset</button>
        <button
          type="submit"
          (click)="onSubmitClick()"
          [disabled]="form.invalid">
          Create activity
        </button>
      </div>
    </form>
  `,
  styles: [],
})
export class CreateActivityFormComponent {
  @Input() ageCategories: AgeCategory[] = [];
  @Output() create = new EventEmitter<Activity>();

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
      currency: ["", []],
      ageCategory: ["child", [Validators.required]],
    });
    this.setInitialMockData();
  }

  setInitialMockData() {
    this.form.patchValue({
      title: "Mock title",
      description: "Mock description",
      date: "2020-01-01",
      location: "Mock location",
      price: 10,
      currency: "EUR",
      ageCategory: "child",
    });
  }

  isInvalid(controlName: string): boolean | null {
    const control = this.form.controls[controlName];
    if (control.pristine) return null;
    return control.invalid;
  }

  hasMessage(controlName: string): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  getError(controlName: string): string {
    const errors = this.form.controls[controlName].errors;
    if (!errors) return "";
    if (errors["required"]) return "This field is required";

    return JSON.stringify(this.form.controls[controlName].errors);
  }

  onSubmitClick() {
    console.log("On Click", this.form.value);
    this.create.emit(this.form.value);
  }
}
