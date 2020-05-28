import {ChangeDetectionStrategy, Component, Inject, Injector, OnInit} from "@angular/core";
import {MICROSERVICE_URL} from "./microservice-token";
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
              private websiteService: WebsiteService,
              private injector: Injector,
              @Inject(MICROSERVICE_URL) private microservices: string[]) {
  }

  public ngOnInit(): void {
    this.dogService.saySomething();
    this.cityService.saySomething();
    this.houseService.saySomething();
    this.phoneService.saySomething();
    this.websiteService.saySomething();
    console.log("this.injector.get(MICROSERVICE_URL)", this.injector.get(MICROSERVICE_URL));
    console.log("this.microservices", this.microservices);
    // here we have ["path_to_mircoservice1", "path_to_mircoservice1"],
    // we can get necessary microservice match with @Input() service: string for example
  }
}

// TODO: Resolution modifiers
// @Optional() @Self() @SkipSelf() @Host()
