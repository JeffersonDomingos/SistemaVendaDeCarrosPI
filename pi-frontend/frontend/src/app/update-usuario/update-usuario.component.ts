import { UsuarioService } from '../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.component.html',
  styleUrls: ['./update-usuario.component.css']
})

 

export class UpdateUsuarioComponent implements OnInit {
 
 id!: number;
 usuario: Usuario = new Usuario();
 
  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) {}
 
 
 
  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.getUsuarioByid(this.id).subscribe({
      next: (data: Usuario) => {
        console.log(data)
        this.usuario = data
      },
      error: (error: any) => console.log(error),
      complete: () => console.log("Data init comepleted!")
    })
 
}

onSubmit() {
  this.updateUsuario();
}
updateUsuario() {
  this.usuarioService.updateUsuario(this.id, this.usuario)
  .subscribe({
    next: (data: any) => console.log(data),
    error: (error: any) => console.log(error),
    complete: () => this.goToUsuarioList()
  })
}
goToUsuarioList() {
  this.router.navigate(['/usuario-list'])}
}
