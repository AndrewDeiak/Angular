import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppComponent} from "./app.component";
import {ProfileFlagCoordinatesDirective} from "./profile/profile-flag-coordinates";
import {ProfileComponent} from "./profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    ProfileFlagCoordinatesDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
