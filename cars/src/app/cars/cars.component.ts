import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Car, CarType} from '../models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsComponent {
  public _cars: Car[] = [{
    vehicleId: '0',
    name: 'Skoda',
    model: 'Yeto',
    year: 2010,
    type: CarType.Sedan
  }, {
    vehicleId: '1',
    name: 'Volkswagen',
    model: 't5',
    year: 2012,
    type: CarType.Sedan
  }, {
    vehicleId: '2',
    name: 'Audi',
    model: 'r8',
    year: 2011,
    type: CarType.Bus
  }, {
    vehicleId: '3',
    name: 'Ford',
    model: 'mustang',
    year: 2020,
    type: CarType.Bus
  }, {
    vehicleId: '4',
    name: 'Mazda',
    model: 'c6',
    year: 2000,
    type: CarType.Minivan
  }, {
    vehicleId: '5',
    name: 'Nissan',
    model: 'p5',
    year: 2000,
    type: CarType.Minivan
  }, {
    vehicleId: '6',
    name: 'Chevrolet',
    model: 'lachee',
    year: 2000,
    type: CarType.Sedan
  }, {
    vehicleId: '7',
    name: 'Opel',
    model: 'lachee',
    year: 2000,
    type: CarType.Sedan
  }, {
    vehicleId: '8',
    name: 'Porsche',
    model: 'lachee',
    year: 2000,
    type: CarType.Sedan
  }, {
    vehicleId: '9',
    name: 'Mitsubishi',
    model: 'lachee',
    year: 2000,
    type: CarType.Sedan
  }, {
    vehicleId: '10',
    name: 'Lada',
    model: 'lachee',
    year: 1999,
    type: CarType.Sedan
  }, {
    vehicleId: '11',
    name: 'Fantazy',
    model: 'lachee',
    year: 1999,
    type: CarType.Bus
  }];
  public _selectedCar: Car;
  public _isEditMode: boolean;
  public _formVisibility: boolean;

  public _addCar(): void {
    this._isEditMode = false;
    this._formVisibility = true;
    this._selectedCar = null;
  }

  public _onSubmitCar(car: Car): void {
    this._cars = this._isEditMode ? this._cars.map(item => item.vehicleId === car.vehicleId ? car : item) : [car, ...this._cars];
    this._onCloseForm();
  }

  public _onCloseForm(): void {
    this._formVisibility = false;
    this._selectedCar = null;
  }

  public _onSelectCar(car: Car): void {
    this._selectedCar = car;
    this._isEditMode = true;
    this._formVisibility = true;
  }
}
