import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientData } from '../clients/client.model';
import { ClientService } from '../clients/client.service';
import { VehiculeData } from '../vehicules/vehicule.model';
import { VehiculesService } from '../vehicules/vehicules.service';
import { LocationData } from './location.model';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements AfterViewInit {

  displayedColumns: string[] = ['id', 'idVehicule', 'montantVerse', 'idClient', 'dateLocation', 'dateRemise', 'objet', 'status', 'star'];
  dataSource: MatTableDataSource<Object[]>;

  locationList : any [] = [];
  clientList : ClientData[] = [];
  vehiculeList : VehiculeData[] = [];

  // declaration des variables de la table Client
  location : LocationData = new LocationData();
  locationEdite : LocationData = new LocationData();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private locationService: LocationsService,
    private clientService: ClientService,
    private vehiculeService: VehiculesService) { 
      
      this.chargerListeLocation();
      this.chargerListeVehicule();
      this.chargerListeClient();

    }
  
    ngOnInit(): void {
  
    }
  
    chargerListeLocation(){
      this.locationService.getLocationList().subscribe(
        responce => {
          // console.log(responce)
          
          const dataList = responce;
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(dataList);
  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log(error);
          const dataList = [];
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(dataList);
  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }

    chargerListeClient(){
      this.clientService.getClientList().subscribe(
        responce => {
          // console.log(responce)
          
          this.clientList = responce;
        },
        error => {
          console.log(error);
        });
    }

    chargerListeVehicule(){
      this.vehiculeService.getVehiculeList().subscribe(
        responce => {
          // console.log(responce)
          
          this.vehiculeList = responce;
        },
        error => {
          console.log(error);
        });
    }

    chargerListeLocationCours(){
      this.locationService.getLocationCoursList().subscribe(
        responce => {
          // console.log(responce)
          
          const dataList = responce;
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(dataList);
  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log(error);
          const dataList = [];
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(dataList);
  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }
  
    chargerListeLocationConclus(){
      this.locationService.getLocationConclusList().subscribe(
        responce => {
          // console.log(responce)
          
          const dataList = responce;
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(dataList);
  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error => {
          console.log(error);
          const dataList = [];
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(dataList);
  
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }
  
    onSave(){
  
      this.locationService.createLocation(this.location).subscribe(
        responce => {
          console.log(responce);
          this.chargerListeLocation();
        },
        err => {
          console.log(err);
        }
      );
  
    }
  
    onSaveEdite(){
  
      this.locationService.updateLocation(this.locationEdite).subscribe(
        responce => {
          console.log(responce);
          this.chargerListeLocation();
        },
        err => {
          console.log(err);
        }
      );
  
    }
  
    onEdite(id : string){
      this.locationService.getLocation(id).subscribe(
        responce => {
          console.log(responce);
          this.locationEdite.dateLocation = responce[0].dateLocation;
          this.locationEdite.dateRemise = responce[0].dateRemise;
          this.locationEdite.id = responce[0].id;
          this.locationEdite.idClient = responce[0].idClient;
          this.locationEdite.idUser = responce[0].idUser;
          this.locationEdite.idVehicule = responce[0].idVehicule;
          this.locationEdite.modePayement = responce[0].modePayement;
          this.locationEdite.montantLocation = responce[0].montantLocation;
          this.locationEdite.montantRestant = responce[0].montantRestant;
          this.locationEdite.montantVerse = responce[0].montantVerse;
          this.locationEdite.nbJour = responce[0].nbJour;
          this.locationEdite.objet = responce[0].objet;
          this.locationEdite.status = responce[0].status;

  
          console.log(this.locationEdite);
        },
        err => {
          console.log(err);
        }
      );
    }
  
    onDelete(id : string){
      console.log(id);
      this.locationService.deleteLocation(id).subscribe(
        responce => {
          console.log("supression effetuer avec succes");
          this.chargerListeLocation();
        },
        err => {
          console.log(err);
        }
      );
    }

    onConclure(id : string){
      
      this.locationEdite.status = "Conclus";

      this.locationService.updateLocation(this.locationEdite).subscribe(
        responce => {
          console.log(responce);
          this.chargerListeLocation();
        },
        err => {
          console.log(err);
        }
      );

    }
  
    ngAfterViewInit() {
      
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
  }
  