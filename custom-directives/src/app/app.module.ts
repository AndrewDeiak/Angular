import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {HiddenDirective} from "./hidden.directive";
import {MyIfDirective} from "./my-if.directive";
import {PingDirective} from "./ping.directive";
import {TooltipContainerComponent} from "./tooltip-container/tooltip-container.component";
import {TooltipDirective} from "./tooltip-container/tooltip.directive";
import {UnderlineDirective} from "./underline.directive";

@NgModule({
  declarations: [
    AppComponent,
    PingDirective,
    HiddenDirective,
    UnderlineDirective,
    MyIfDirective,
    TooltipDirective,
    TooltipContainerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [TooltipContainerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
