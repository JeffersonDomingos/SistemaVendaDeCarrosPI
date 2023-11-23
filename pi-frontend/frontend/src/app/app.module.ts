import { NgxMaskModule } from 'ngx-mask';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { CarrosListComponent } from './carros-list/carros-list.component';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UpdateUsuarioComponent } from './update-usuario/update-usuario.component';
import { UpdateCarrosComponent } from './update-carros/update-carros.component';
import { CreateCarrosComponent } from './create-carros/create-carros.component';
import { UsuarioDetailsComponent } from './details-usuario/details-usuario.component';
import { DetailsCarrosComponent } from './details-carros/details-carros.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AlterarSenhaComponent } from './alterar-senha/alterar-senha.component';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { CarrosListClientComponent } from './carros-list-client/carros-list-client.component';
import { CarrosDetailsClientComponent } from './carros-details-client/carros-details-client.component';
import { ConfirmarInteresseComponent } from './confirmar-interesse/confirmar-interesse.component';
import { ListaReservasComponent } from './lista-reservas/lista-reservas.component';







@NgModule({
  declarations: [
    AppComponent,
    UsuarioListComponent,
    CarrosListComponent,
    CreateUsuarioComponent,
    HomeComponent,
    UpdateUsuarioComponent,
    UpdateCarrosComponent,
    CreateCarrosComponent,
    UpdateUsuarioComponent,
    UsuarioDetailsComponent,
    DetailsCarrosComponent,
    HomeComponent,
    LoginComponent,
    AlterarSenhaComponent,
    NavbarComponent,
    CarrosListClientComponent,
    CarrosDetailsClientComponent,
    ConfirmarInteresseComponent,
    ListaReservasComponent,
    
    
    
    
    
  ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [AuthService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
