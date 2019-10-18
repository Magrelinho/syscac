import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public validaUsuario(obj) {
    obj = {
      login: obj.login,
      senha: obj.password
    };
    /* return this.http.post('/controller/usuario.php', {
       method: 'post',
       body: JSON.stringify(obj),
       headers: { 'Content-type': 'application/json' }
     });*/


    return this.http.post('/controller/usuario.php', obj);

  }


}
