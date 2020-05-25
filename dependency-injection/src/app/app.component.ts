import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {DogService} from "./dog.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  constructor(private dogService: DogService) {
  }

  public ngOnInit(): void {
    this.dogService.saySomething();
  }
}
