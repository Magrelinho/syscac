import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public validaUsuario(obj) {

  return this.http.post('http://api.syscac.com.br/controller/usuario.php', {
      method: 'post',
      body: JSON.stringify(obj),
      headers: { 'Content-type': 'application/json' }
    });


    //this.http.post(URL: 'http://api.syscac.com.br/controller/usuario.php', obj);

  }


}
