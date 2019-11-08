import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@portinari/portinari-ui';

@Component({
  selector: 'app-modal-profissional',
  templateUrl: './modal-profissional.component.html',
  styleUrls: ['./modal-profissional.component.css']
})



export class ModalProfissionalComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.confirmaPaciente();
    },
    label: 'Confirmar'
  };

  closeModal() {
    throw new Error("Method not implemented.");
  }
  confirmaPaciente() {
    throw new Error("Method not implemented.");
  }



  constructor() { }

  ngOnInit() {
  }

  openCadastro() {
    this.poModal.open();
  }
}
