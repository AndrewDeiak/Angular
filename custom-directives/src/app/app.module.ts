import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {PingDirective} from "./ping.directive";
import { HiddenDirective } from './hidden.directive';

@NgModule({
  declarations: [
    AppComponent,
    PingDirective,
    HiddenDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
