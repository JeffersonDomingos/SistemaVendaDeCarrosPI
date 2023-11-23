import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:8080/pi/clientes';

  constructor(private httpClient: HttpClient) {}

  registrarReserva(cliente: Cliente): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/registrar-reserva`, cliente);
  }

  getClientesList(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`);
  }

  removerReserva(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`)
  }

  
}


