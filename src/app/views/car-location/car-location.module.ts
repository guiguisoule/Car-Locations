import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarLocationRoutingModule } from './car-location-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { LocationsComponent } from './locations/locations.component';
import { VehiculesComponent } from './vehicules/vehicules.component';


@NgModule({
  declarations: [
    ClientsComponent,
    LocationsComponent,
    VehiculesComponent
  ],
  imports: [
    CommonModule,
    CarLocationRoutingModule
  ]
})
export class CarLocationModule { }
