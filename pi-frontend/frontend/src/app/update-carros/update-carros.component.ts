import { CarrosService } from '../carros.service';
import { Component, OnInit } from '@angular/core';
import { Carros } from '../carros';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-carros',
  templateUrl: './update-carros.component.html',
  styleUrls: ['./update-carros.component.css']
})

 

export class UpdateCarrosComponent implements OnInit {
 
 id!: number;
 carros: Carros = new Carros ();
 
  constructor(private carrosService: CarrosService,
    private router: Router,
    private route: ActivatedRoute) {}
 
 
 
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.carrosService.getCarrosByid(this.id).subscribe({
      next: (data: Carros) => {
        console.log(data)
        this.carros = data
      },
      error: (error: any) => console.log(error),
      complete: () => console.log("Data init comepleted!")
    })
 
}

onSubmit() {
  this.updateCarros();
}
updateCarros() {
  this.carrosService.updateCarros(this.id, this.carros)
  .subscribe({
    next: (data: any) => console.log(data),
    error: (error: any) => console.log(error),
    complete: () => this.goToCarroList()
  })
}
goToCarroList() {
  this.router.navigate(['/carros-list'])}
}
