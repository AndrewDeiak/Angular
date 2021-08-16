import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from "@angular/material/table";

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';


@NgModule({
  declarations: [
    DevicesComponent
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    MatTableModule
  ]
})
export class DevicesModule { }
