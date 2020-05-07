import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.less'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputComponent),
    multi: true
  }]
})
export class CustomInputComponent implements ControlValueAccessor {

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public required = false;

  @Input()
  public disabled = false;

  @Input()
  public value: string;

  private _onChange: (value: any) => void;
  private _onTouched: () => void;

  public onChange() {
    this._onChange && this._onChange(this.value);
  }

  // gets the value from the formControl
  public writeValue(obj: string): void {
    this.value = obj;
    this._onChange && this._onChange(obj);
  }

  public onTouched() {
    this._onTouched && this._onTouched();
  }

  public registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
