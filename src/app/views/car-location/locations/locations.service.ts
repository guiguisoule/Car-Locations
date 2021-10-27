import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  PHP_API_SERVER : string = "http://localhost/backend/location";

  constructor( private http: HttpClient) { }

  getLocationList(): Observable<any>{
    return this.http.get<any[]>(`${this.PHP_API_SERVER}/locationListe.php`);
  }

  getLocationConclusList(): Observable<any>{
    return this.http.get<any[]>(`${this.PHP_API_SERVER}/locationConclusListe.php`);
  }

  getLocationCoursList(): Observable<any>{
    return this.http.get<any[]>(`${this.PHP_API_SERVER}/locationCoursListe.php`);
  }

  createLocation(data: Object): Observable<Object>{
		return this.http.post<Object>(`${this.PHP_API_SERVER}/createLocation.php`, data);
	}

	updateLocation(data: Object){
		return this.http.put<Object>(`${this.PHP_API_SERVER}/updateLocation.php`, data);
	}

  getLocation(id: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/location.php/?id=${id}`);
	}

  getnbLocation(status: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/nbLocation.php/?status=${status}`);
	}
	
  deleteLocation(id: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/deleteLocation.php/?id=${id}`);
	}
}
