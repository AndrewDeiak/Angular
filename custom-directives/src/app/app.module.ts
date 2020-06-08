import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HiddenDirective} from "./hidden.directive";
import {MyIfDirective} from "./my-if.directive";
import {PingDirective} from "./ping.directive";
import {UnderlineDirective} from "./underline.directive";

@NgModule({
  declarations: [
    AppComponent,
    PingDirective,
    HiddenDirective,
    UnderlineDirective,
    MyIfDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
