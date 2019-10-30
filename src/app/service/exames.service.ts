import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamesService {

  constructor(private http: HttpClient, ) { }

  public listaExamess() {
    return this.http.get('/controller/exame.php', {});
  }

  public cadastraExame(obj) {
    return this.http.post('/controller/paciente.php', { obj });
  }

  public buscaCnh() {
    return this.http.get('/controller/cnh.php', {});
  }

  public buscahabilitacao() {
    return this.http.get('/controller/habilitacao.php', {});
  }

  public buscaMedicos(params: any) {
    return this.http.get(`/controller/profissional.php?tipo=${params}`);
  }

}
