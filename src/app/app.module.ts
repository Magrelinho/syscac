import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { HomeComponent } from './component/home/home.component';
import { PacientesComponent } from './component/pacientes/pacientes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExamesComponent } from './component/exames/exames.component';
import { FormsModule } from '@angular/forms';
import { ModalResultadoComponent } from './modal/modal-resultado/modal-resultado.component';
import { ModalExamesComponent } from './modal/modal-exames/modal-exames.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PacientesComponent,
    ExamesComponent,
    ModalResultadoComponent,
    ModalExamesComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    FormsModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
