import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  public _everySecond: number;
  public _everyTwoSecond: number;
  public _tooltipText = "Default text";

  public _onHoveredTooltip(): void {
    console.log("onHoveredTooltip");
  }
}
