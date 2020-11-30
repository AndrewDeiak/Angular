import {ChangeDetectionStrategy, Component} from "@angular/core";

interface Flag {
  id: string;
}

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  public FLAGS: Flag[] = [
    {id: "1"},
    {id: "2"},
    {id: "3"},
    {id: "4"},
    {id: "5"},
    {id: "6"},
    {id: "7"},
    {id: "8"},
    {id: "9"}
  ];
  public FLAG_AVAILABLE_LENGTH = 9;
  public HALF_CIRCLE_ANGLE = 180;
  public ANGLE_ROTATE_FLAG = this.HALF_CIRCLE_ANGLE / (this.FLAG_AVAILABLE_LENGTH - 1);

  public get startFlagAngle(): number {
    return -90 - ((this.ANGLE_ROTATE_FLAG / 2 * (this.FLAG_AVAILABLE_LENGTH - this.FLAGS.length)));
  }

  public _onFlagClick(flagId): void {
    this.FLAGS = this.FLAGS.filter(item => item.id !== flagId);
  }
}
