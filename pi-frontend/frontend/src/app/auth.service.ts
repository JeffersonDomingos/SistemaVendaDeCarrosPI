import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private baseUrl = 'http://localhost:8080/pi/login'; // URL do seu backend Spring Boot

  constructor(private http: HttpClient) { }

  login(usuario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, usuario)
  }
  

  }

