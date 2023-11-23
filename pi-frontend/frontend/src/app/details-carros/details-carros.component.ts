import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carros } from '../carros';
import { CarrosService } from '../carros.service';


@Component({
  selector: 'app-details-carros',
  templateUrl: './details-carros.component.html',
  styleUrls: ['./details-carros.component.css']
})
export class DetailsCarrosComponent implements OnInit {
 
  id!: number;
  carros!: Carros;
  constructor(private route: ActivatedRoute, private carrosService: CarrosService) { }
  
   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
     this.carros = new Carros();
     this.carrosService.getCarrosByid(this.id).subscribe( data => {
       this.carros = data;
     })
 }
 }