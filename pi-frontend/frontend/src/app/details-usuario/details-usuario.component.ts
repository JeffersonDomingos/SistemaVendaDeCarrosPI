import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-details-usuario',
  templateUrl: './details-usuario.component.html',
  styleUrls: ['./details-usuario.component.css']
})
export class UsuarioDetailsComponent implements OnInit {
 
  id!: number;
  usuario!: Usuario;
  constructor(private route: ActivatedRoute, private usuarioService: UsuarioService) { }
  
   ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
 
     this.usuario = new Usuario();
     this.usuarioService.getUsuarioByid(this.id).subscribe( data => {
       this.usuario = data;
     })
 }
 }