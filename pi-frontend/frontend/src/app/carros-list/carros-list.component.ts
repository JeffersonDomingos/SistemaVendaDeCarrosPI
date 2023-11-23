import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Carros } from '../carros';
import { CarrosService } from '../carros.service';

@Component({
  selector: 'app-carros-list',
  templateUrl: './carros-list.component.html',
  styleUrls: ['./carros-list.component.css']
})
export class CarrosListComponent implements OnInit {
 
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

 CarrosDetails(id: number){
    this.router.navigate(['carros-details', id] );
  }

  updateCarros(id: number){
    this.router.navigate(['update-carros', id] );
  }

  deleteCarros(id: number){
    this.carrosService.deleteCarros(id).subscribe( data =>{
      console.log(data);
      this.getCarros();
    })
  }

}