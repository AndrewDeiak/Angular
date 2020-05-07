import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.less']
})
export class ReactiveFormComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this._formGroup = this.fb.group({
      name: ['Car', Validators.required]
    });
  }

  public _setNewValue() {
    this._formGroup.controls['name'].setValue('new value');
  }

  public _setDisabled() {
    this._formGroup.controls['name'].disable();
  }

  public _setEnabled() {
    this._formGroup.controls['name'].enable();
  }
}
