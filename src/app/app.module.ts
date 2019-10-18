import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@portinari/portinari-ui';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { PoPageLoginModule, PoModalPasswordRecoveryModule } from '@portinari/portinari-templates';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    PoPageLoginModule,
    PoModalPasswordRecoveryModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
