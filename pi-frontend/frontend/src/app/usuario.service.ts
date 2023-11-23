import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  updateUsuarios(id: number, usuario: Usuario) {
    throw new Error('Method not implemented.');
  }
  getUsuarioById(id: number) {
    throw new Error('Method not implemented.');
  }

 private baseURL = "http://localhost:8080/pi/usuarios";
 
  constructor(private httpClient: HttpClient ) { }


getUsuariosList(): Observable<Usuario[]>{
  return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
}

createUsuario(usuario: Usuario): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, usuario);
}

updateUsuario(id: number, usuario: Usuario): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, usuario);
}

getUsuarioByid(id: number): Observable<Usuario>{
  return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
}

deleteUsuario(id: number): Observable<Object>{
  return this.httpClient.delete(`${this.baseURL}/${id}`)
}

}
