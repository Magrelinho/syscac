import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient, ) { }

  public listaPacientes() {
    return this.http.get('/controller/paciente.php', {});

  }

  


}
