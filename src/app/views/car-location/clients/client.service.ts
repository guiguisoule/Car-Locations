import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  PHP_API_SERVER : string = "http://localhost/backend/client";

  constructor( private http: HttpClient) { }

  getClientList(): Observable<any>{
    return this.http.get<any[]>(`${this.PHP_API_SERVER}/clientListe.php`);
  }

  createClient(data: Object): Observable<Object>{
		return this.http.post<Object>(`${this.PHP_API_SERVER}/createClient.php`, data);
	}

	updateClient(data: Object){
		return this.http.put<Object>(`${this.PHP_API_SERVER}/updateClient.php`, data);
	}

  getClient(id: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/client.php/?cnib=${id}`);
	}
	
  deleteClient(id: string){
		return this.http.get<Object>(`${this.PHP_API_SERVER}/deleteClient.php/?cnib=${id}`);
	}
}
