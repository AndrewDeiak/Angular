import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {HouseService} from "./services/deps/house.service";
import {DogService} from "./services/useClass/dog.service";
import {WebsiteService} from "./services/useExisting/website.service";
import {CityService} from "./services/useFactory/city.service";
import {PhoneService} from "./services/useValue/phone.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private dogService: DogService,
              private cityService: CityService,
              private houseService: HouseService,
              private phoneService: PhoneService,
              private websiteService: WebsiteService) {
  }

  public ngOnInit(): void {
    this.dogService.saySomething();
    this.cityService.saySomething();
    this.houseService.saySomething();
    this.phoneService.saySomething();
    this.websiteService.saySomething();
  }
}
