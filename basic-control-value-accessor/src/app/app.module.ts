import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {CustomInputWithNgControlComponent} from "./custom-input/custom-input-with-ng-control/custom-input-with-ng-control.component";
import {CustomInputWithProviderComponent} from "./custom-input/custom-input-with-provider/custom-input-with-provider.component";
import {ReactiveFormComponent} from "./reactive-form/reactive-form.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import { FormControlActionsComponent } from './form-control-actions/form-control-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomInputWithProviderComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    CustomInputWithNgControlComponent,
    FormControlActionsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
