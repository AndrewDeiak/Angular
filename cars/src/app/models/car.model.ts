export interface Car {
  vehicleId: string;
  name: string;
  model: string;
  year: number;
  type: CarType;
}

export enum CarType {
  Sedan = 'Sedan',
  Bus = 'Bus',
  Minivan = 'Minivan'
}
