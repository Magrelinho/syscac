import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  constructor(private http: HttpClient, ) { }

  public listaExamess() {
    return this.http.get('http://api.syscac.com.br/controller/exame.php', {});
  }

  public cadastraExame(obj) {
    return this.http.post('http://api.syscac.com.br/controller/paciente.php', { obj });
  }

  public buscaCnh() {
    return this.http.get('http://api.syscac.com.br/controller/cnh.php', {});
  }

  public buscahabilitacao() {
    return this.http.get('http://api.syscac.com.br/controller/habilitacao.php', {});
  }

  public buscaMedicos(params: any) {
    return this.http.get(`http://api.syscac.com.br/controller/profissional.php?tipo=${params}`);
  }

  public removerExame(obj: number) {
    return this.http.delete(`http://api.syscac.com.br/controller/exame.php?id=${obj}`);
  }

  public updateResultado(obj) {
    return this.http.put('http://api.syscac.com.br/controller/exame.php', {obj});
  }

}
