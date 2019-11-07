import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent, PoSelectOption, PoModalAction } from '@portinari/portinari-ui';
import { ExamesService } from 'src/app/service/exames.service';
import { Resultado } from 'src/app/interface/resultado';

@Component({
  selector: 'app-modal-resultado',
  templateUrl: './modal-resultado.component.html',
  styleUrls: ['./modal-resultado.component.css']
})
export class ModalResultadoComponent implements OnInit {

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };
  confirm: PoModalAction = {
    action: () => {
      this.atualizaExame();
    },
    label: 'Confirmar'
  };

  exames: Resultado =  this.initResultado();
  examesResultado: Array<PoSelectOption>;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  restricaoTrue: boolean;

  constructor(private exameService: ExamesService) { }

  ngOnInit() {
    this.examesResultado = [];
   
  //  this.exames['restricaoTrue'] = true;
  }

  openResultado(obj: string) {
    this.exames.id_status = obj['id_status'];
    this.exames.id = obj['id'];

    this.carregaStatus();
    this.poModal.open();
  }

  habilitaRestricao() {
    if (this.exames['id_status'] === 4) {
      this.exames['restricaoTrue'] = false;
    } else {
      this.exames['restricaoTrue'] = true;
    }

  }
  private carregaStatus() {
    this.examesResultado = [
      { value: 1, label: 'Apto' },
      { value: 2, label: 'Inapto', },
      { value: 3, label: 'Inapto Temporario', },
      { value: 4, label: 'Restricao', },
      { value: 5, label: 'EM ANDAMENTO' }]
    return this.examesResultado;
  }

  closeModal() {
    this.poModal.close();
  }

  atualizaExame() {
    this.exameService.updateResultado(this.exames).subscribe(value => {

      console.log(value);

    });
    console.log(this.exames);
    this.closeModal();
  }

  private initResultado() {
    return {
      id: undefined,
      id_status: undefined,
      restricaoTrue: true,
      restricao: ''
    };
  }



}
