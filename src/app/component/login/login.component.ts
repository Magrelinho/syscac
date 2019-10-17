import { Component, OnInit } from '@angular/core';
import { PoPageLogin } from '@portinari/portinari-templates';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  exceededAttempts: number;

  constructor() { }

  ngOnInit() {
  }



  loginSubmit(formData: PoPageLogin) {
    if (this.exceededAttempts <= 0) {
    /*  this.poDialog.alert({
        title: 'Authenticate',
        message: JSON.stringify(formData)
      });*/
    }
  }

}
