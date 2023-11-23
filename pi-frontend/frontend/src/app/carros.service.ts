import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carros } from './carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosService {
  pdateCarros(id: number, carros: Carros) {
    throw new Error('Method not implemented.');
  }
  getCarrosById(id: number) {
    throw new Error('Method not implemented.');
  }

 private baseURL = "http://localhost:8080/pi/carros";
 
  constructor(private httpClient: HttpClient ) { }

getCarrosList(): Observable<Carros[]>{
  return this.httpClient.get<Carros[]>(`${this.baseURL}`);
}

createCarros(carros: Carros): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, carros);
}

updateCarros(id: number, carros: Carros): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, carros);
}

getCarrosByid(id: number): Observable<Carros>{
  return this.httpClient.get<Carros>(`${this.baseURL}/${id}`);
}

deleteCarros(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`)
}

}
