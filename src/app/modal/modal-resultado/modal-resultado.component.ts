import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent, PoSelectOption, PoModalAction } from '@portinari/portinari-ui';

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

  exames: object = {};
  examesResultado: Array<PoSelectOption>;

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor() { }

  ngOnInit() {
    this.examesResultado = [];
  }

  openResultado(obj: Array<PoSelectOption>) {
    this.exames['id_status'] = obj['id_status'];
    this.carregaStatus();
    this.poModal.open();
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
    console.log(this.exames);
    this.closeModal();
  }

}
