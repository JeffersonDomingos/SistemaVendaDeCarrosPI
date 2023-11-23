import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.css']
})
export class CreateUsuarioComponent implements OnInit {

 usuario: Usuario = new Usuario();
 

  constructor (private usuarioService: UsuarioService,
    private router: Router) { }
 
 
  ngOnInit(): void { }

    saveUsuario() {
      this.usuarioService.createUsuario(this.usuario).subscribe(data =>{
       
      })
      this.router.navigate(['/usuario-list'])
    }

    cancel(): void {
      this.router.navigate(['/usuario-list']);
    }

    onSubmit(){
      console.log(this.usuario);
      this.saveUsuario();
    }
}
