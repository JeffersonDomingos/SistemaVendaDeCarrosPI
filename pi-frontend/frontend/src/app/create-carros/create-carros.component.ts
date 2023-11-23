import { Carros } from '../carros';
import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../carros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-carros',
  templateUrl: './create-carros.component.html',
  styleUrls: ['./create-carros.component.css']
})
export class CreateCarrosComponent implements OnInit {

 carro: Carros = new Carros();

  constructor (private carroService: CarrosService,
    private router: Router) { }
 
 
  ngOnInit(): void { }

    saveCarro() {
      this.carroService.createCarros(this.carro).subscribe(data =>{
       
      })
      this.router.navigate(['/carros-list'])
    }

    cancel(): void {
      this.router.navigate(['/carros-list']);
    }

    onSubmit(){
      console.log(this.carro);
      this.saveCarro();
    }
}
