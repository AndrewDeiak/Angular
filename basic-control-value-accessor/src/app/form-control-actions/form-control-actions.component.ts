import {ChangeDetectionStrategy, Component, Input} from "@angular/core";
import {FormControl} from "@angular/forms";

@Component({
  selector: "app-form-control-actions",
  templateUrl: "./form-control-actions.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormControlActionsComponent {
  @Input() control: FormControl;

  public _setNewValue() {
    this.control.setValue("new value");
  }

  public _setDisabled() {
    this.control.disable();
  }

  public _setEnabled() {
    this.control.enable();
  }
}
