import {HttpClientModule} from "@angular/common/http";
import {InjectionToken, NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";

export const MICROSERVICE_URL = new InjectionToken<string>("MICROSERVICE");  // 'API_URL' - имя ключа

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {provide: MICROSERVICE_URL, useValue: "path_to_microservice1", multi: true},
    {provide: MICROSERVICE_URL, useValue: "path_to_microservice2", multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
