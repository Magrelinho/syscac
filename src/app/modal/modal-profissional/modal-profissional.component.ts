import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoModalComponent, PoSelectOption } from '@portinari/portinari-ui';
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
  categoria: PoSelectOption;
  // categorias: Array<PoSelectOption>;

  public readonly categorias: Array<PoSelectOption> = [
    { value: '1', label: 'Médico' },
    { value: '2', label: 'Psicólogo' }
  ];


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
    this.initiProfissional();

  }

  openCadastro() {
    this.poModal.open();
  }

  buscaEndereco(param) {

    this.ServiceProfissional.buscaCep(param).subscribe(value => {
      this.profissional['address'] = value['logradouro'];

    });
  }

  private initiProfissional(): Profissional {

    return {
      nome: '',
      numero: null,
      categoria_profissional_id: null,
      email: '',
      cpf: '',
      entidade_id: null, //estabelecimento
      address: '',
      addressNumber: null,
      province: '',
      postalCode: '',
      phone: null,
      mobilePhone: null,
      walletId: '',
      asaas_id: '',
      cep: null,
    };
  }
}
