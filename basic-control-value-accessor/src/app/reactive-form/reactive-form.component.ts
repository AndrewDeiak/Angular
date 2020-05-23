import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactiveFormComponent implements OnInit {
  public _formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  public ngOnInit(): void {
    this._formGroup = this.fb.group({
      name: ["Andrew", Validators.required],
      surname: ["Deiak", Validators.required],
    });
  }
}
