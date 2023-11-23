import { PdfService } from './../pdf.service';
import { Component } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent {

  cliente: Cliente[] = [];

  constructor(private clienteService: ClienteService, private pdfService : PdfService) { }

  ngOnInit(): void {
    this.getClientes();


   }

  private getClientes(){
    this.clienteService.getClientesList().subscribe(data => {
      this.cliente = data;
    });
  }
 removerReserva(id: number){
    this.clienteService.removerReserva(id).subscribe( data =>{
      console.log(data);
      this.getClientes();
    })
  }

  gerarPDF() {
   
    this.pdfService.gerarPdf().subscribe(
      (pdfData: Blob) => {
        
        const blob = new Blob([pdfData], { type: 'application/pdf' });
      saveAs(blob, 'reserva-cliente.pdf')
      },
      (error) => {
        console.error('Erro ao gerar PDF', error);
      }
    );
  }

}
