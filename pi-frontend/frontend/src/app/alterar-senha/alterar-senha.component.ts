
import { Component } from '@angular/core';
import { AlterarSenhaService } from '../alterar-senha.service';
import { Usuario } from '../usuario';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent {
  usuario: Usuario = new Usuario();
  novaSenha: string | undefined;
  mensagem: string | undefined;

  constructor(private alterarSenhaService: AlterarSenhaService, private datePipe: DatePipe, private router: Router) {}

  alterarSenha() {

    const dataNascimentoFormatada = this.datePipe.transform(this.usuario.dataNascimento, 'dd/MM/yyyy');
    
    const request: any = {
      login: this.usuario.login,
      dataNascimento: dataNascimentoFormatada,
      
      novaSenha: this.usuario.novaSenha
    };

    

    this.alterarSenhaService.alterarSenha(request).subscribe(
      (mensagem) => {
        
        this.mensagem = this.mensagem;
        console.log('Senha alterada com sucesso!', mensagem);
      },
      (error) => {
        console.log('Senha alterada com sucesso!');
       

        this.router.navigate(['/login']);
      }
    );
  }
}