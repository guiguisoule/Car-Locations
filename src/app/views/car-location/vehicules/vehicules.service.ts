
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculesService {

  PHP_API_SERVER : string = "http://localhost/backend/vehicule";

  constructor( private http: HttpClient) { }

  getVehiculeList(): Observable<any>{
    return this.http.get<any[]>(`${this.PHP_API_SERVER}/vehiculeListe.php`);
  }

  createVehicule(data: Object): Observable<Object>{
		return this.http.post<Object>(`${this.PHP_API_SERVER}/createVehicule.php`, data);
	}

	updateVehicule(data: Object){
		return this.http.put<Object>(`${this.PHP_API_SERVER}/updateVehicule.php`, data);
	}

  getVehicule(id: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/vehicule.php/?matricule=${id}`);
	}
	
  deleteVehicule(id: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/deleteVehicule.php/?matricule=${id}`);
	}
}
