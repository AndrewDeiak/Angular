import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";

@Directive({
  selector: "[appMyIf]"
})
export class MyIfDirective {

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>) {
  }

  @Input() set appMyIf(value: boolean) {
    value ? this.viewContainerRef.createEmbeddedView(this.templateRef) : this.viewContainerRef.clear();
  }

  /**
   * The most important difference with the way we created attribute directive is how they are provided to the DOM.
   * Attribute directive uses ElementRef && Renderer to render and re-render while structural directives
   * use TemplateRef && ViewContainerRef to update the DOM content.
   */
}
