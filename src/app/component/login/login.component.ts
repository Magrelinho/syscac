import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@portinari/portinari-templates';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exceededAttempts: number;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }



  loginSubmit(formData: PoPageLogin) {

    this.loginService.validaUsuario(formData) ;

    /* if (this.exceededAttempts <= 0) {
     /*  this.poDialog.alert({
         title: 'Authenticate',
         message: JSON.stringify(formData)
       });
     }*/
   }

}
