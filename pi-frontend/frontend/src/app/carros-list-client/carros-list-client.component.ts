import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Carros } from '../carros';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros-list-client',
  templateUrl: './carros-list-client.component.html',
  styleUrls: ['./carros-list-client.component.css']
})
export class CarrosListClientComponent implements OnInit {
 
 carros: Carros[] = [];
 
  constructor(private carrosService: CarrosService,
    private router: Router) { }
  
  baseImageUrl = '';
  ngOnInit(): void {
    this.getCarros();


   }

  private getCarros(){
    this.carrosService.getCarrosList().subscribe(data => {
      this.carros = data;
    });
  }

 CarrosDetailsClient(id: number){
    this.router.navigate(['carros-details-client', id] );
  }

 

}