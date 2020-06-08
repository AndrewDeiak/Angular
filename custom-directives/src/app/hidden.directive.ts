import {Directive, ElementRef, Input, OnInit, Renderer2} from "@angular/core";

@Directive({
  selector: "[appHidden]"
})
export class HiddenDirective implements OnInit {
  @Input() appHidden: boolean;

  constructor(private elementRef: ElementRef,
              private renderer2: Renderer2) {
  }

  public ngOnInit(): void {
    if (this.appHidden) {
      this.renderer2.setStyle(this.elementRef.nativeElement, "display", "none");
    }
  }
}
