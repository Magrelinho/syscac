import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  constructor(private http: HttpClient, ) { }

  public listaExamess() {

    /* return this.http.post('/controller/usuario.php', {
       method: 'post',
       body: JSON.stringify(obj),
       headers: { 'Content-type': 'application/json' }
     });*/


    return this.http.get('/controller/exame.php', {});

  }


  public cadastraExame(obj) {

    /*const obj = {
      "nome": "TIBURRCIO55",
      "cpf": "075.086.739-64",
      "exame": {
        "medico_id": 1,
        "psico_id": 2,
        "cnh_id": 1,
        "habilita_id": 2,
        "data_avaliacao": "2019-10-21"
      }
    }*/

    return this.http.post('/controller/paciente.php', { obj })

  }


  public buscaCnh(){
    return this.http.get('/controller/cnh.php', {})

  }

}
