import { LocationsComponent } from './locations/locations.component';
import { ClientsComponent } from './clients/clients.component';
import { VehiculesComponent } from './vehicules/vehicules.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Location'
    },
    children: [
      {
        path: '',
        redirectTo: 'vehicules'
      },
      {
        path: 'vehicules',
        component: VehiculesComponent,
        data: {
          title: 'Vehicules'
        }
      },
      {
        path: 'clients',
        component: ClientsComponent,
        data: {
          title: 'Clients'
        }
      }
      ,
      {
        path: 'locations',
        component: LocationsComponent,
        data: {
          title: 'Locations'
        }
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarLocationRoutingModule { }
