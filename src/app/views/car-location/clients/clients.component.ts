import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ClientData } from './client.model';
import { ClientService } from './client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit {

  displayedColumns: string[] = ['cnib', 'nom', 'prenom', 'sexe', 'dateBirth', 'prof', 'tel', 'star'];
  dataSource: MatTableDataSource<Object[]>;

  clientList : any [] = [];

  // declaration des variables de la table Client
  client : ClientData = new ClientData();
  clientEdite : ClientData = new ClientData();
  

  //creation d'un instance de Client connecte au formulaire d'ajout

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private clientService: ClientService) { 
    
      this.chargerListeClient();

    }
  
    ngOnInit(): void {
  
    }
  
    chargerListeClient(){
      this.clientService.getClientList().subscribe(
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
  
      this.clientService.createClient(this.client).subscribe(
        responce => {
          console.log(responce);
          this.chargerListeClient();
        },
        err => {
          console.log(err);
        }
      );
  
    }
  
    onSaveEdite(){
  
      this.clientService.updateClient(this.clientEdite).subscribe(
        responce => {
          console.log(responce);
          this.chargerListeClient();
        },
        err => {
          console.log(err);
        }
      );
  
    }
  
    onEdite(id : string){
      this.clientService.getClient(id).subscribe(
        responce => {
          console.log(responce);
          this.clientEdite.cnib = responce[0].cnib;
          this.clientEdite.dateBirth = responce[0].dateBirth;
          this.clientEdite.nom = responce[0].nom;
          this.clientEdite.prenom = responce[0].prenom;
          this.clientEdite.prof = responce[0].prof;
          this.clientEdite.sexe = responce[0].sexe;
          this.clientEdite.tel = responce[0].tel;
  
          console.log(this.clientEdite);
        },
        err => {
          console.log(err);
        }
      );
    }
  
    onDelete(id : string){
      console.log(id);
      this.clientService.deleteClient(id).subscribe(
        responce => {
          console.log("supression effetuer avec succes");
          this.chargerListeClient();
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
  