import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlterarSenhaService {
  private apiUrl = 'http://localhost:8080/pi/alterar-senha';

  constructor(private http: HttpClient) {}

  alterarSenha(request: Usuario): Observable<String> {
    return this.http.post<String>(this.apiUrl, request);
  }
}
