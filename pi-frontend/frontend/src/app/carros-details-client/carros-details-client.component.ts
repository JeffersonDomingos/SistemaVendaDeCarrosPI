import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Carros } from '../carros';
import { CarrosService } from '../carros.service';
import { DadosCarrosService } from '../dados-carros.service';


@Component({
  selector: 'app-details-carros-client',
  templateUrl: './carros-details-client.component.html',
  styleUrls: ['./carros-details-client.component.css']
})
export class CarrosDetailsClientComponent implements OnInit {
 
  id!: number;
  carros!: Carros;
  constructor(private router: Router, private route: ActivatedRoute, private carrosService: CarrosService, private dadosCarros: DadosCarrosService) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.carros = new Carros();
    this.carrosService.getCarrosByid(this.id).subscribe(data => {
      this.carros = data;
      
      this.dadosCarros.setCarroSelecionado(data);
    });
  }
  
  ConfirmarInteresseForm(id: number){
    this.router.navigate(['confirmar-interesse', id] );
  }
}