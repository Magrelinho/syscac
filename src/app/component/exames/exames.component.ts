import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamesService } from 'src/app/service/exames.service';
// tslint:disable-next-line: max-line-length
import { PoTableColumn, PoMultiselectOption, PoCheckboxGroupOption, PoDialogService, PoDialogAlertLiterals, PoDialogConfirmLiterals, PoTableAction } from '@portinari/portinari-ui';
import { PoPageAction, PoModalAction, PoModalComponent, PoSelectOption } from '@portinari/portinari-ui';
import { PoNotificationService } from '@portinari/portinari-ui';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { BoletoService } from 'src/app/service/boleto.service';
import { ModalResultadoComponent } from 'src/app/modal/modal-resultado/modal-resultado.component';
import { Pacientes } from 'src/app/interface/pacientes';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  items: Array<object>;
  hiringProcesses: Array<any>;
  status: Array<any>;
  disclaimerGroup;
  paciente: Pacientes = this.initPaciente();
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  statusOptions: Array<PoCheckboxGroupOption>;
  switch: boolean;
  exameMedico: boolean;
  examePsicotecnico: boolean;
  nome: string;
  pacienteCnh: Array<PoSelectOption>;
  pacienteHabilitacao: Array<PoSelectOption>;
  medico: Array<PoSelectOption>;
  psicotecnico: Array<PoSelectOption>;
  message: string;
  title: string;
  literalsAlert: PoDialogAlertLiterals;
  exameSelecionado: any;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cadastrar Paciente', action: this.openQuestionnaire.bind(this), icon: 'po-icon-user-add' },
  ];

  public readonly actionsTable: Array<PoTableAction> = [
    { label: 'Gerar Boleto', action: this.geraBoleto.bind(this), icon: 'po-icon-bar-code' },
    { label: 'Resultado', action: this.openResultado.bind(this), icon: 'po-icon-target' },
    { label: 'Remover', action: this.removerExame.bind(this), icon: 'po-icon-delete' },
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

  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(ModalResultadoComponent, { static: true }) poModalResultado: ModalResultadoComponent;

  literalsConfirm: PoDialogConfirmLiterals;
  actionOptions: Array<string>;
  action: string;


  constructor(private exameService: ExamesService,
              private poNotification: PoNotificationService,
              private exameLength: GlobalService,
              private poAlert: PoDialogService,
              private boletoService: BoletoService) { }

  ngOnInit() {
    this.exameService.listaExamess().subscribe(value => {
      this.hiringProcessesColumns = this.getColumns();
      this.hiringProcesses = value['exames'];
      this.exameLength.examesObservable.next(value['exames'].length);

    });
    this.pacienteCnh = [];
    this.pacienteHabilitacao = [];
    this.medico = [];
    this.psicotecnico = [];
    this.switch = undefined;
    this.carregaCnh();
    this.carregaHabilitacao();

  }

  carregaCnh() {
    this.exameService.buscaCnh().subscribe(value  => {
      //  this.pacienteCnh = [];
      value['cnh'].forEach(element => {
        element.label = element.descricao;
        element.value = element.id;
        this.pacienteCnh.push(element);
      });
    });
  }

  openResultado() {

    this.poModalResultado.openResultado(this.exameSelecionado);

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

  closeModal() {
    this.poModal.close();
  }

  confirmaPaciente() {
    this.exameService.cadastraExame(this.paciente).subscribe(() => {
      this.poNotification.success('Exame cadastrado com sucesso!');
    });
    this.closeModal();
  }

  geraBoleto() {
    this.poAlert.confirm({
      literals: this.literalsConfirm,
      title: 'Gerar boleto para cobrança',
      message: 'Deseja gerar boleto de cobrança para ' + this.exameSelecionado.nome + '?',
      confirm: () => this.confirmaBoleto(),
      cancel: () => this.closeModal()
    });

  }

  openQuestionnaire() {
    this.poModal.open();
  }

  removerExame() {
    this.hiringProcesses.forEach((item, index) => {
      if (item.id === this.exameSelecionado.id) {
        this.hiringProcesses.splice(index, 1);
      }
    });
  }

  confirmaBoleto() {
    this.boletoService.gerarBoleto(this.exameSelecionado).subscribe(value => {
      console.log(value);
    });
    this.closeModal();
  }

  linhaSelecionada(row: any) {
    if (row) {
      this.exameSelecionado = row;
      console.log(row);
    }
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

  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'nome', label: 'Nome', type: 'string', width: '30%' },
      { property: 'tipo_exame', label: 'Tipo Exame', type: 'string', width: '10%' },
      { property: 'data_avaliacao', label: 'Data Exame', type: 'date', width: '10%' },
      {
        property: 'id_status', label: 'Status', type: 'label', width: '15%', labels: [
          { value: '1', color: 'success', label: 'Apto', },
          { value: '2', color: 'danger', label: 'Inapto', },
          { value: '3', color: 'warning', label: 'Inapto Temporario', },
          { value: '4', color: 'color-06', label: 'Restricao', },
          { value: '5', color: 'color-11', label: 'EM ANDAMENTO' },
        ]
      }
    ];
  }


  openModal() {
    this.poModal.open();
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

}
