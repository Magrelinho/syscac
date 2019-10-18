import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@portinari/portinari-templates';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exceededAttempts: number;

  constructor(private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  loginSubmit(formData: PoPageLogin) {

    this.router.navigateByUrl('home');

    this.loginService.validaUsuario(formData).subscribe(value => {

    }, error => {

    })

    /* if (this.exceededAttempts <= 0) {
     /*  this.poDialog.alert({
         title: 'Authenticate',
         message: JSON.stringify(formData)
       });
     }*/
  }

}
