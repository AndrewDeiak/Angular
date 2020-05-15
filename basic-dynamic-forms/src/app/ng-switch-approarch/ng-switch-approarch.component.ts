import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataModel} from "./model/form-data.model";

@Component({
  selector: "app-ng-switch-approarch",
  templateUrl: "./ng-switch-approarch.component.html",
  styleUrls: ["./ng-switch-approarch.component.less"]
})
export class NgSwitchApproarchComponent implements OnInit {
  public _formData: FormDataModel[] = [
    {
      id: "userName",
      controlName: "Username",
      controlType: "text",
      placeholder: "Enter username",
      currentValue: "Andrew",
      validators: {
        required: true,
        minlength: 5
      }
    },
    {
      id: "phone",
      controlName: "Phone",
      placeholder: "Phone",
      controlType: "text",
      validators: {
        required: true,
        minlength: 10,
        maxlength: 10
      }
    },
    {
      id: "email",
      controlName: "Email",
      placeholder: "Email",
      controlType: "text",
      validators: {
        required: true
      }
    },
    {
      id: "gender",
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
      validators: {
        required: true
      }
    },
    {
      id: "vehicle",
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
      validators: {
        required: true
      }
    }
  ];
  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const formGroup = {};
    // TODO call reduce instead of foreach
    // TODO add custom validators
    this._formData.forEach(formControl => formGroup[formControl.controlName] = this.fb.control(formControl.currentValue, ));
    this._formGroup = this.fb.group(formGroup);
  }

  public _consoleForm() {
    console.log(this._formGroup);
  }
}
