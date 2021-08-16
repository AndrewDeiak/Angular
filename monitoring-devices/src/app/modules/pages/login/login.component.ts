import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize, take} from "rxjs/operators";
import {AuthenticationService} from "./service/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoading = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) {
  }

  public get formControls() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.buildForm();
  }

  public onSubmit() {
    if (!this.loginForm.invalid) {
      this.isLoading = true;
      this.authenticationService.login(this.formControls.email.value, this.formControls.password.value)
        .pipe(
          take(1),
          finalize(() => this.isLoading = false),
        )
        .subscribe(() => this.router.navigate(["devices"]));
    }
  }

  private buildForm(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }
}
