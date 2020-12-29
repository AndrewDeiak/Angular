import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Car} from '../models/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsListComponent {
  @Input() cars: Car[];
  @Output() selectCar = new EventEmitter<Car>();
  public _selectedCar: Car;

  @Input()
  public set selectedCar(car: Car) {
    this._selectedCar = car;
  }

  public _onSelectCar(event: Event, car: Car): void {
    event.preventDefault();
    this.selectCar.emit(car);
  }

  public _trackByFn(index: number, item: Car): string {
    return item.vehicleId;
  }
}
