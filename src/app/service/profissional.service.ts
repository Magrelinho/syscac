import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) { }

  public buscaProfissionais() {
    return this.http.get(`/controller/profissional.php`);
  }

  public buscaCep(cep: string) {
    return this.http.get(`http://viacep.com.br/ws/${cep}/json/`);
  }
  //?tipo=${params}
}
