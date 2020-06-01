import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AdDirective} from "./ad.directive";
import {AppComponent} from "./app.component";
import {CatBannerComponent} from "./cat-banner/cat-banner.component";
import {DogBannerComponent} from "./dog-banner/dog-banner.component";

@NgModule({
  declarations: [
    AppComponent,
    AdDirective,
    DogBannerComponent,
    CatBannerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DogBannerComponent, CatBannerComponent]
})
export class AppModule {
}
