import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { UsuarioDetailsComponent } from './details-usuario/details-usuario.component';
import { DetailsCarrosComponent } from './details-carros/details-carros.component';
import { CreateCarrosComponent } from './create-carros/create-carros.component';
import { CarrosListComponent } from './carros-list/carros-list.component';
import { UpdateCarrosComponent } from './update-carros/update-carros.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrosListClientComponent } from './carros-list-client/carros-list-client.component';
import { CarrosDetailsClientComponent } from './carros-details-client/carros-details-client.component';
import { ConfirmarInteresseComponent } from './confirmar-interesse/confirmar-interesse.component';
import { ListaReservasComponent } from './lista-reservas/lista-reservas.component';
const routes: Routes = [
 
   { path: 'usuario-list', component: UsuarioListComponent },
   { path: 'create-usuario', component: CreateUsuarioComponent },
   { path: 'update-usuario/:id', component: UpdateUsuarioComponent},
   { path:  'usuario-details/:id', component: UsuarioDetailsComponent },
   { path: 'carros-list', component: CarrosListComponent },
   { path: 'create-carros', component: CreateCarrosComponent },
   { path: 'carros-details/:id', component: DetailsCarrosComponent },
   { path: 'update-carros/:id', component: UpdateCarrosComponent},
   { path: '', redirectTo: '/login', pathMatch: 'full' },
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: 'alterar-senha', component: AlterarSenhaComponent },
   { path: 'navbar', component: NavbarComponent },
   { path: 'carros-list-client', component: CarrosListClientComponent },
   { path: 'carros-details-client/:id', component: CarrosDetailsClientComponent },
   { path: 'confirmar-interesse/:id', component: ConfirmarInteresseComponent },
   { path: 'lista-reservas', component: ListaReservasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
