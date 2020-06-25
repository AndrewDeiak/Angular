import {ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges, OnDestroy, TemplateRef, ViewContainerRef} from "@angular/core";
import {TooltipContainerComponent} from "./tooltip-container.component";

@Directive({
  selector: "[appTooltip]"
})
export class TooltipDirective implements OnChanges, OnDestroy {
  @Input() appTooltip: string;
  @Input() appTooltipHovered: () => void;
  private componentRef: ComponentRef<TooltipContainerComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private templateRef: TemplateRef<any>,
              private viewContainerRef: ViewContainerRef) {
  }

  public ngOnChanges(): void {
    // If there is no tooltip created, create it and
    // pass the message.
    if (!this.componentRef && this.appTooltip) {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipContainerComponent);
      this.componentRef = this.viewContainerRef.createComponent(componentFactory);
      this.componentRef.instance.tooltip = this.appTooltip;
      this.componentRef.instance.templateRef = this.templateRef;
      this.componentRef.instance.tooltipHovered.subscribe(() => this.appTooltipHovered()); // TODO: bind function to the host element;
      // If the tooltip has been already created, update its message
    } else if (this.componentRef && this.appTooltip) {
      this.componentRef.instance.tooltip = this.appTooltip;
      // Else just add the TemplateRef to the viewContainer and
      // show the element without changes
    } else {
      this.viewContainerRef.clear();
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }

  public ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
