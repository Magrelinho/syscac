import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent } from '@portinari/portinari-ui';
import { ProfissionalService } from 'src/app/service/profissional.service';
import { Cep } from '../../interface/cep';
import { Profissional } from 'src/app/interface/profissional';
@Component({
  selector: 'app-modal-profissional',
  templateUrl: './modal-profissional.component.html',
  styleUrls: ['./modal-profissional.component.css']
})



export class ModalProfissionalComponent implements OnInit {

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  profissional: Profissional[] = [];

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

  constructor(private ServiceProfissional: ProfissionalService) {

  }

  ngOnInit() {
  }

  openCadastro() {
    this.ServiceProfissional.buscaCep('89207440').subscribe(value => {
      
      console.log(value);
      this.profissional['address'] = value['logradouro'];

    });
    this.poModal.open();
  }
}
