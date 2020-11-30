import {Directive, ElementRef, Input, OnChanges} from "@angular/core";

@Directive({
  selector: "[appProfileFlagCoordinates]",
})
export class ProfileFlagCoordinatesDirective implements OnChanges {
  private DISTANCE_FROM_CIRCLE = 20;
  private CIRCLE_WIDTH = 100;
  private el: ElementRef;
  @Input() private angleRotateFlag: number;
  @Input() private startFlagAngle: number;
  @Input() private flagIndex: number;

  constructor(el: ElementRef) {
    this.el = el;
  }

  public ngOnChanges(): void {
    const flagAngle = this.startFlagAngle - (this.flagIndex * this.angleRotateFlag);
    const flagAngleRadian = Math.PI * flagAngle / 180;
    const xCord = (this.CIRCLE_WIDTH / 2 + this.DISTANCE_FROM_CIRCLE) * Math.cos(flagAngleRadian);
    const yCord = (this.CIRCLE_WIDTH / 2 + this.DISTANCE_FROM_CIRCLE) * Math.sin(flagAngleRadian);
    this.el.nativeElement.style.left = `${xCord - 5}px`;
    this.el.nativeElement.style.top = `${yCord - 5}px`;
  }
}
