import {Component, OnInit} from '@angular/core';
import {FormControl, NgModel} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.less']
})
export class TemplateDrivenFormComponent implements OnInit {
  public model = 'initialValue';
  public _disabled: boolean;

  public ngOnInit() {
  }

  public _setNewValue() {
    this.model = 'new value';
  }

  public _setDisabled() {
    this._disabled = true;
  }

 public _setEnabled() {
   this._disabled = false;
  }
}
