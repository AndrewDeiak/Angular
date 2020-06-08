import {Directive, ElementRef, HostListener, Renderer2} from "@angular/core";

@Directive({
  selector: "[appUnderline]"
})
export class UnderlineDirective {

  constructor(private renderer: Renderer2,
              private elementRef: ElementRef) {
  }

  @HostListener("mouseenter") onMouseenter = () => this.hover(true);

  @HostListener("mouseleave") onMouseleave = () => this.hover(false);

  private hover(isUnderlined: boolean): void {
    console.log(isUnderlined);
    const targetElement = this.elementRef.nativeElement;
    isUnderlined ? this.renderer.setStyle(targetElement, "text-decoration", "underline")
      : this.renderer.setStyle(targetElement, "text-decoration", "none");
  }
}
