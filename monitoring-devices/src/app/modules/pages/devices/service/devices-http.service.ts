import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {Device} from "../interface/device";
import {DEVICES} from "../MOCK/DEVICES_MOCK";

@Injectable({
  providedIn: "root"
})
export class DevicesHttpService {
  public getDevices(): Observable<Device[]> {
    return of(DEVICES);
  }
}
