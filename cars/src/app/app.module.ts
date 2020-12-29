import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CarFormComponent} from './car-form/car-form.component';
import {CarsListComponent} from './cars-list/cars-list.component';
import {CarsComponent} from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarFormComponent,
    CarsListComponent,
    CarsComponent
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
