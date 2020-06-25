import {Component, EventEmitter, Input, Output, TemplateRef} from "@angular/core";

@Component({
  selector: "app-tooltip-container",
  templateUrl: "./tooltip-container.component.html",
  styleUrls: ["./tooltip-container.component.less"]
})
export class TooltipContainerComponent {

  @Input() public templateRef: TemplateRef<any>;
  @Input() public tooltip: string;
  @Output() public tooltipHovered = new EventEmitter<void>();

  public _onMouseOver(): void {
    this.tooltipHovered.emit();
  }
}
