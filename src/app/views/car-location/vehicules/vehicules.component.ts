import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculeData } from './vehicule.model';
import { VehiculesService } from './vehicules.service';

@Component({
  selector: 'app-vehicules',
  templateUrl: './vehicules.component.html',
  styleUrls: ['./vehicules.component.scss']
})
export class VehiculesComponent implements AfterViewInit {

  displayedColumns: string[] = ['matricule', 'type', 'marque', 'couleur', 'place', 'montantLocation', 'etat', 'star'];
  dataSource: MatTableDataSource<Object[]>;

  clientList : any [] = [];

  // declaration des variables de la table Client
  vehicule : VehiculeData = new VehiculeData();
  vehiculeEdite : VehiculeData = new VehiculeData();

  //creation d'un instance de pays connecte au formulaire d'ajout

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private vehiculeService: VehiculesService) { 
      
      this.chargerListeVehicule();

  }

  ngOnInit(): void {

  }

  chargerListeVehicule(){
    this.vehiculeService.getVehiculeList().subscribe(
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

    this.vehiculeService.createVehicule(this.vehicule).subscribe(
      responce => {
        console.log(responce);
        this.chargerListeVehicule();
      },
      err => {
        console.log(err);
      }
    );

  }

  onSaveEdite(){

    this.vehiculeService.updateVehicule(this.vehiculeEdite).subscribe(
      responce => {
        console.log(responce);
        this.chargerListeVehicule();
      },
      err => {
        console.log(err);
      }
    );

  }

  onEdite(id : string){
    this.vehiculeService.getVehicule(id).subscribe(
      responce => {
        console.log(responce);
        this.vehiculeEdite.couleur = responce[0].couleur;
        this.vehiculeEdite.dateCre = responce[0].dateCre;
        this.vehiculeEdite.dateMaj = new Date();
        this.vehiculeEdite.etat = responce[0].etat;
        this.vehiculeEdite.image = responce[0].image;
        this.vehiculeEdite.marque = responce[0].marque;
        this.vehiculeEdite.matricule = responce[0].matricule;
        this.vehiculeEdite.montantLocation = responce[0].montantLocation;
        this.vehiculeEdite.place = responce[0].place;
        this.vehiculeEdite.serie = responce[0].serie;
        this.vehiculeEdite.status = responce[0].status;
        this.vehiculeEdite.type = responce[0].type;

        console.log(this.vehiculeEdite);
      },
      err => {
        console.log(err);
      }
    );
  }

  onDelete(id : string){
    console.log(id);
    this.vehiculeService.deleteVehicule(id).subscribe(
      responce => {
        console.log("supression effetuer avec succes");
        this.chargerListeVehicule();
      },
      err => {
        console.log("supression ");
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
