import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor(private http: HttpClient) { }

  public gerarBoleto(obj) {
    obj = {
      walletId: obj.walletId,
      asaas_id: obj.asaas_id
    };
    
    return this.http.post('/controller/asaas.php', obj);

  }
}
