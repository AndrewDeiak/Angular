import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: "app-dog-banner",
  templateUrl: "./dog-banner.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogBannerComponent {
  @Input() data: any;
}
