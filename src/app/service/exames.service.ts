import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  constructor(private http: HttpClient,) { }

  public listaExamess() {
   
    /* return this.http.post('/controller/usuario.php', {
       method: 'post',
       body: JSON.stringify(obj),
       headers: { 'Content-type': 'application/json' }
     });*/


    return this.http.get('/controller/exame.php', {});

  }

}
