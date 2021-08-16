import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Observable} from "rxjs";
import {Device} from "./interface/device";
import {DevicesHttpService} from "./service/devices-http.service";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DevicesComponent implements OnInit {
  public displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  public dataSource: Observable<Device[]>;

  constructor(private devicesHttpService: DevicesHttpService) {
  }

  ngOnInit(): void {
    this.dataSource = this.devicesHttpService.getDevices();
  }
}
