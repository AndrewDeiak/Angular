import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors} from "@angular/forms";
import {Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Component({
  selector: "app-form-validation",
  templateUrl: "./form-validation.component.html",
  styleUrls: ["./form-validation.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormValidationComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this._formGroup = this.fb.group({
      name: null,
      superHero: null,
      simpleHero: [null, {asyncValidators: forbiddenName}], // TODO why the view not updating after async validator return error
    }, {validators: identityNameValidator});
  }

  public _consoleForm(): void {
    console.log(this._formGroup);
  }
}

// add custom validator at the FormGroup level
const identityNameValidator = (formGroup: FormGroup): ValidationErrors => {
  const name = formGroup.get("name").value;
  const superHero = formGroup.get("superHero").value;
  return name === superHero ? {identityName: true} : null;
};

// add custom async validator at the control level
const forbiddenName = (control: AbstractControl): Observable<ValidationErrors | null> => {
  let error: { [key: string]: any };
  if (control.value === "forbiddenName") {
    error = {forbiddenName: true};
  }
  return of(error).pipe(delay(300));
};
