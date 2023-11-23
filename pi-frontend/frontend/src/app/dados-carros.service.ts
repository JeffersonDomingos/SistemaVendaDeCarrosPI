import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosCarrosService {

  private carroSelecionado = new BehaviorSubject<any>(null);
  carroSelecionado$ = this.carroSelecionado.asObservable();

  setCarroSelecionado(carro: any): void {
    this.carroSelecionado.next(carro);
  }
}
