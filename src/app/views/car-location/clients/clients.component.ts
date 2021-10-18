import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements AfterViewInit {

  displayedColumns: string[] = ['code', 'cnib', 'matricule', 'star'];
  dataSource: MatTableDataSource<Object[]>;

  //creation d'un instance de Client connecte au formulaire d'ajout

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.chargerListeLocation();
  }

  ngOnInit(): void {
    
  }

  chargerListeLocation(){
    // this.locationService.getPaysList().subscribe(
    //   responce => {
    //     // console.log(responce)
        
    //     const paysData = responce;
    //     // Assign the data to the data source for the table to render
    //     this.dataSource = new MatTableDataSource(paysData);

    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   },
    //   error => {
    //     console.log(error);
    //     const paysData = [];
    //     // Assign the data to the data source for the table to render
    //     this.dataSource = new MatTableDataSource(paysData);

    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   });
  }

  onEdite(){

  }

  onSave(){

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
