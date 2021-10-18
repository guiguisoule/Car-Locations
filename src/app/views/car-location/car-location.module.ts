import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarLocationRoutingModule } from './car-location-routing.module';
import { ClientsComponent } from './clients/clients.component';
import { LocationsComponent } from './locations/locations.component';
import { VehiculesComponent } from './vehicules/vehicules.component';

//importation material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientsComponent,
    LocationsComponent,
    VehiculesComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    CarLocationRoutingModule,

    //impor des composants material
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatStepperModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatExpansionModule
  ]
})
export class CarLocationModule { }
