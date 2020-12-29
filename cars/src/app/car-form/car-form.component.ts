import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car, CarType} from '../models/car.model';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarFormComponent implements OnChanges {

  @Input() isEditMode: boolean;
  @Input() car: Car;
  @Output() submitCar = new EventEmitter<Car>();
  @Output() closeForm = new EventEmitter();
  public _carTypes = Object.values(CarType);
  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public _onSubmit(): void {
    this.submitCar.emit(this._formGroup.value);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    let group;
    if (changes?.car?.currentValue && this.isEditMode) {
      group = Object.entries(changes.car.currentValue).reduce((acc, [key, value]) => {
        acc[key] = [value, Validators.required];
        return acc;
      }, {});
    } else {
      group = {
        vehicleId: [null, Validators.required],
        name: [null, Validators.required],
        model: [null, Validators.required],
        year: [null, Validators.required],
        type: [null, Validators.required]
      };
    }
    this._formGroup = this.fb.group(group);
  }
}
