import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable()
export class FormsService {
  form!: FormGroup;
  constructor() {}

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
