import {Directive, ElementRef, EventEmitter, Output} from "@angular/core";

@Directive({
  selector: "[appEverySecond], [appEveryTwoSecond]",
})
export class PingDirective {

  @Output() public appEverySecond = new EventEmitter<number>();
  @Output() public appEveryTwoSecond = new EventEmitter<number>();
  public timers: number[] = [];

  constructor(private elementRef: ElementRef) {
    console.log("PingDirective instantiated one time");
    console.log(elementRef.nativeElement);
    this.startTimer();
  }

  public startTimer(): void {
    this.timers.push(
      setInterval(() => this.appEverySecond.emit(Date.now()), 1000),
      setInterval(() => this.appEveryTwoSecond.emit(Date.now()), 2000)
    );
  }
}
