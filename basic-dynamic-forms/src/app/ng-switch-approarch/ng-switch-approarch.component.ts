import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {FormDataModel, FormValueId} from "./model/form-data.model";

@Component({
  selector: "app-ng-switch-approarch",
  templateUrl: "./ng-switch-approarch.component.html",
  styleUrls: ["./ng-switch-approarch.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgSwitchApproarchComponent implements OnInit {
  public _formData: FormDataModel[] = [
    {
      id: FormValueId.Name,
      controlName: "Username",
      controlType: "text",
      placeholder: "Enter username",
      currentValue: "Andrew",
    },
    {
      id: FormValueId.Phone,
      controlName: "Phone",
      placeholder: "Phone",
      controlType: "text",
    },
    {
      id: FormValueId.Email,
      controlName: "Email",
      placeholder: "Email",
      controlType: "text",
    },
    {
      id: FormValueId.Gender,
      controlName: "Gender",
      placeholder: "Select gender",
      controlType: "select",
      options: [
        {
          optionName: "Male",
          value: "male"
        },
        {
          optionName: "Female",
          value: "female"
        }
      ],
    },
    {
      id: FormValueId.Vehicle,
      controlName: "Vehicle",
      placeholder: "Select vehicle",
      controlType: "radio",
      options: [
        {
          id: "bike",
          optionName: "Bike",
          value: "bike"
        },
        {
          id: "car",
          optionName: "Car",
          value: "car"
        }
      ],
    }
  ];
  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this._formGroup = this.fb.group(this._formData.reduce((group, formItem) => {
      const validator: ValidatorFn[] = [];
      switch (formItem.id) {
        case FormValueId.Name:
          validator.push(control => control.value === "invalidName" ? {["invalidName"]: {value: true}} : null);
          break;
        case FormValueId.Phone:
          validator.push(control => {
            const pattern = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
            return pattern.test(control.value) ? null : {["invalidPhone"]: {value: true}};
          });
          break;
        case FormValueId.Email:
          validator.push(Validators.email);
          break;
      }
      validator.push(Validators.required);
      group[formItem.controlName] = this.fb.control(formItem.currentValue, validator);
      return group;
    }, {}));
  }

  public _consoleForm(): void {
    console.log(this._formGroup);
  }
}
