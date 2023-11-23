import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  private baseUrl = 'http://localhost:8080/pi/'; 

  constructor(private http: HttpClient) {}

  gerarPdf(): Observable<Blob> {
    const url = `${this.baseUrl}clientes/pdf`;

    const options = {
      responseType: 'arraybuffer' as 'json',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<Blob>(url, options);
  }
}
