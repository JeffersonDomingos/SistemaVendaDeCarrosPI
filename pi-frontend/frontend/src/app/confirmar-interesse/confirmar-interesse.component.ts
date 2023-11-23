import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';
import { Carros } from '../carros';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { DadosCarrosService } from '../dados-carros.service';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-confirmar-interesse',
  templateUrl: './confirmar-interesse.component.html',
  styleUrls: ['./confirmar-interesse.component.css']
})

export class ConfirmarInteresseComponent implements OnInit {

  cliente: Cliente = new Cliente();
  id!: number;
  carros!: Carros;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private carrosService: CarrosService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
    this.carrosService.getCarrosByid(this.id).subscribe(data => {
      this.carros = data;
    });
  }
  
  onSubmit(): void {
   
    if (this.cliente && this.carros) {
     
      this.cliente.carroInteressado = this.carros;

      
      this.clienteService.registrarReserva(this.cliente).subscribe(
        response => {
          console.log('Reserva registrada com sucesso!', response);
          
        },
        error => {
          console.error('Erro ao registrar a reserva', error);
         this.router.navigate(['/carros-list-client']);
        }
      );
    } else {
      console.error('Cliente ou carro selecionado ausentes');
      
    }
  }
}