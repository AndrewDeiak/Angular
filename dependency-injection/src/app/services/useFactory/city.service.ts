import {Injectable} from "@angular/core";

export class CarService {
  public saySomething() {
    console.log("Car service is a ..");
  }
}

function provideFactory() {
  return new CarService();
}

@Injectable({
  providedIn: "root",
  useFactory: provideFactory
})
export class CityService {

  public saySomething() {
    console.log("Kiev is a ..");
  }
}
