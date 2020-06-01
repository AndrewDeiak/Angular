import {ChangeDetectionStrategy, Component, Input} from "@angular/core";

@Component({
  selector: "app-cat-banner",
  templateUrl: "./cat-banner.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatBannerComponent {
  @Input() data: any;
}
