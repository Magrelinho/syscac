import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public validaUsuario(obj) {
    obj = {
      login : obj.login,
      senha : obj.password
    };
    return this.http.post('http://api.syscac.com.br/controller/usuario.php', {
      method: 'post',
      body: JSON.stringify(obj),
      headers: { 'Content-type': 'application/json' }
    });


   /*this.http.post('http://api.syscac.com.br/controller/usuario.php', obj).subscribe(value => {
      console.log(value);

    });*/

  }


}
