import {Component, OnInit} from "@angular/core";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.less"]
})
export class DynamicFormComponent implements OnInit {

  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public get alternativeEmails(): FormArray {
    return this._formGroup.controls.alternativeEmails as FormArray;
  }

  public get friends(): FormArray {
    return this._formGroup.controls.friends as FormArray;
  }

  ngOnInit(): void {
    this._formGroup = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      alternativeEmails: this.fb.array([]),
      friends: this.fb.array([])
    });
  }

  public _addAlternativeEmail(): void {
    this.alternativeEmails.push(this.fb.control(null, [Validators.required, Validators.email]));
  }

  public _addFriend(): void {
    this.friends.push(this.fb.group({
      friendName: [null, [Validators.required]],
      friendEmail: [null, [Validators.required, Validators.email]]
    }));
  }

  public _formToConsole(): void {
    console.log(this._formGroup);
  }
}
