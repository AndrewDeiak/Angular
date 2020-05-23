import {ChangeDetectionStrategy, Component} from "@angular/core";

@Component({
  selector: "app-template-driven-form",
  templateUrl: "./template-driven-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateDrivenFormComponent {
  public _nameModel = "Andrew";
  public _surnameModel = "Deiak";
}
