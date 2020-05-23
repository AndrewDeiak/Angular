import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from "@angular/core";
import {ControlValueAccessor, NgControl} from "@angular/forms";

@Component({
  selector: "app-custom-input-with-ng-control",
  templateUrl: "./custom-input-with-ng-control.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
// TODO implement abstractFieldComponent
export class CustomInputWithNgControlComponent implements ControlValueAccessor {

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

  constructor(private cdr: ChangeDetectorRef,
              private ngControl?: NgControl) {
    // @ts-ignore
    ngControl.valueAccessor = this;
  }

  public onChange() {
    this._onChange && this._onChange(this.value);
  }

  // gets the value from the formControl
  public writeValue(value: string): void {
    this.value = value;
    this._onChange && this._onChange(value);
    this.cdr.detectChanges();
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
    this.cdr.detectChanges();
  }
}
