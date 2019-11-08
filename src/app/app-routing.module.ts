import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { PacientesComponent } from './component/pacientes/pacientes.component';
import { ExamesComponent } from './component/exames/exames.component';
import { ProfissionalComponent } from './component/profissional/profissional.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'home',
    component: HomeComponent, children: [
      {
        path: 'profissional',
        component: ProfissionalComponent
      },
      {
        path: 'pacientes',
        component: PacientesComponent
      },
      {
        path: 'exames',
        component: ExamesComponent
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
