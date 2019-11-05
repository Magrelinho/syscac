import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalAction, PoNotificationService, PoModalComponent, PoSelectOption } from '@portinari/portinari-ui';
import { ExamesService } from 'src/app/service/exames.service';
import { Pacientes } from 'src/app/interface/pacientes';

@Component({
  selector: 'app-modal-exames',
  templateUrl: './modal-exames.component.html',
  styleUrls: ['./modal-exames.component.css']
})


export class ModalExamesComponent implements OnInit {
  status: Array<any>;
  paciente: Pacientes = this.initPaciente();
  switch: boolean;
  exameMedico: boolean;
  examePsicotecnico: boolean;
  pacienteCnh: Array<PoSelectOption> = [];
  pacienteHabilitacao: Array<PoSelectOption> = [];
  medico: Array<PoSelectOption> = [];
  psicotecnico: Array<PoSelectOption> = [];

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor(private poNotification: PoNotificationService,
              private exameService: ExamesService) { }

  ngOnInit() {
    this.carregaCnh();
    this.carregaHabilitacao();
  }

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
    this.poModal.close();
  }

  confirmaPaciente() {
    this.exameService.cadastraExame(this.paciente).subscribe(() => {
      this.poNotification.success('Exame cadastrado com sucesso!');
    });
    this.closeModal();
  }


  carregaCnh() {
    this.exameService.buscaCnh().subscribe(value => {
      //  this.pacienteCnh = [];
      value['cnh'].forEach(element => {
        element.label = element.descricao;
        element.value = element.id;
        this.pacienteCnh.push(element);
      });
    });
  }


  carregaHabilitacao() {
    this.exameService.buscahabilitacao().subscribe(value => {
      value['habilitacao'].forEach(element => {
        element.label = element.descricao;
        element.value = element.id;
        this.pacienteHabilitacao.push(element);
      });
    });
  }

  carregaMedicos() {
    this.exameService.buscaMedicos(1).subscribe(value => {
      value['profissionais'].forEach(element => {
        element.label = element.nome;
        element.value = element.id;
        this.medico.push(element);
      });
    });
  }

  carregaPsicotecnicos() {
    this.exameService.buscaMedicos(2).subscribe(value => {
      value['profissionais'].forEach(element => {
        element.label = element.nome;
        element.value = element.id;
        this.psicotecnico.push(element);
      });
    });
  }


  selecionaExameMedico() {
    this.exameMedico = !this.exameMedico;
    if (this.exameMedico === true && this.medico.length === 0) {
      this.carregaMedicos();
    }
  }

  selecionaExamePsicotecnico() {
    this.examePsicotecnico = !this.examePsicotecnico;
    if (this.examePsicotecnico === true && this.psicotecnico.length === 0) {
      this.carregaPsicotecnicos();
    }
  }

  private initPaciente(): Pacientes {
    return {
      data_avaliacao: new Date(),
      cnh_id: -1,
      nome: '',
      cpf: '',
      habilita_id: -1,
      medico_id: -1,
      psico_id: -1
    };
  }

  openCadastro() {
    this.poModal.open();
  }
}
