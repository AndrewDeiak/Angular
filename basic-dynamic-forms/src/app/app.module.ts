import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {DynamicFormComponent} from "./dynamic-form/dynamic-form.component";
import {NgSwitchApproarchComponent} from "./ng-switch-approarch/ng-switch-approarch.component";

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    NgSwitchApproarchComponent,
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
