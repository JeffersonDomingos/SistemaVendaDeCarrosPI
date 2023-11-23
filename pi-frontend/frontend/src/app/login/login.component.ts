import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.usuario).subscribe(
      response => {
        
        console.log(response);

        


        this.router.navigate(['/home']);
      
        
      },
      error => {
       
        console.error(error);
        
      }
    );
  }
}
