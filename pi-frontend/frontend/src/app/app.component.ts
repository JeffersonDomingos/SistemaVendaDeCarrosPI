import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { Carros } from './carros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
 
  

  constructor(private router: Router) {}

  isLoginOuAlterarSenha(): boolean {
    const currentUrl = this.router.url;
    return currentUrl === '/login' || currentUrl === '/alterar-senha' || currentUrl === '/carros-list-client'
    || currentUrl.includes('/carros-details-client/') || currentUrl.includes('/confirmar-interesse/');
  }
  
}

