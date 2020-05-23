import {ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: "app-custom-input-with-provider",
  templateUrl: "./custom-input-with-provider.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CustomInputWithProviderComponent),
    multi: true
  }]
})
export class CustomInputWithProviderComponent implements ControlValueAccessor {

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

  constructor(private cdr: ChangeDetectorRef) {
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
