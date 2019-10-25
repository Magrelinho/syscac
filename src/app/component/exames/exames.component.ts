import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamesService } from 'src/app/service/exames.service';
import { PoTableColumn, PoMultiselectOption, PoCheckboxGroupOption, PoComboOption } from '@portinari/portinari-ui';
import { PoPageAction, PoModalAction, PoModalComponent, PoFieldModule, PoSelectOption } from '@portinari/portinari-ui';
import { PoNotificationService } from '@portinari/portinari-ui';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { PacienteService } from 'src/app/service/pacientes.service';

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
  paciente = {};
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter = '';
  statusOptions: Array<PoCheckboxGroupOption>;
  switch: boolean;
  exameMedico: boolean;
  examePsicotecnico: boolean;
  nome: string;
  pacienteCnh: Array<PoSelectOption>;
  pacienteHabilitacao: Array<PoSelectOption>;
  medico: Array<PoSelectOption>;



  public readonly actions: Array<PoPageAction> = [
    { label: 'Cadastrar Paciente', action: this.openQuestionnaire.bind(this) },
    { label: 'Aprovar' },
    { label: 'qualquer coisa' },
    { label: 'Seila' },
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



  constructor(private exameService: ExamesService,
              private poNotification: PoNotificationService,
              private exameLength: GlobalService) { }

  ngOnInit() {
    this.exameService.listaExamess().subscribe(value => {
      // tslint:disable-next-line: no-string-literal
      this.hiringProcessesColumns = this.getColumns();
      this.hiringProcesses = value['exames'];
      this.exameLength.examesObservable.next(value['exames'].length);

    });
    this.carregaCnh();
    this.carregaHabilitacao();
    this.carregaMedicos();
    this.switch = undefined;
  }

  carregaCnh() {
    this.exameService.buscaCnh().subscribe(value => {
      this.pacienteCnh = [];
      value['cnh'].forEach(element => {
        element.label = element.descricao;
        element.value = element.id;
        this.pacienteCnh.push(element);
      });
    });
  }

  carregaHabilitacao() {
    this.exameService.buscahabilitacao().subscribe(value => {
      this.pacienteHabilitacao = [];
      value['habilitacao'].forEach(element => {
        element.label = element.descricao;
        element.value = element.id;
        this.pacienteHabilitacao.push(element);
      });
    });
  }

  carregaMedicos() {
    this.exameService.buscaMedicos(1).subscribe(value => {
      this.medico = [];
      value['profissionais'].forEach(element => {
        element.label = element.nome;
        element.value = element.id;
        this.medico.push(element);
      });
    });
  }


  closeModal() {
    //this.form.reset();
    this.poModal.close();
  }

  confirmaPaciente() {
    this.exameService.cadastraExame(this.paciente).subscribe(() => {
      alert('foi');
    });
  }

  openQuestionnaire() {
    this.poModal.open();
  }

  linhaSelecionada(row: any) {
    if (row) {
      console.log(row);
    }
  }

  selecionaExameMedico() {
    this.exameMedico = !this.exameMedico;

  }

  selecionaExamePsicotecnico() {
    this.examePsicotecnico = !this.examePsicotecnico;

  }


  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'nome', label: 'Nome', type: 'string' },
      { property: 'tipo_exame', label: 'Tipo Exame', type: 'string' },
      { property: 'data_avaliacao', label: 'Data Exame', type: 'date' },
      {
        property: 'id_status', label: 'Status', type: 'label', labels: [
          { value: '1', color: 'success', label: 'Apto', },
          { value: '2', color: 'danger', label: 'Inapto', },
          { value: '3', color: 'warning', label: 'Inapto Temporario', },
          { value: '4', color: 'color-06', label: 'Restricao', },
          { value: '5', color: 'color-11', label: "EM ANDAMENTO" },
        ]
      }
    ];
  }


  openModal() {
    this.poModal.open();
  }

}
