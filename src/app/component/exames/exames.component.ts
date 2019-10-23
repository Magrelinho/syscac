import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamesService } from 'src/app/service/exames.service';
import { PoTableColumn, PoMultiselectOption, PoCheckboxGroupOption, PoComboOption } from '@portinari/portinari-ui';
import { PoPageAction, PoPageFilter } from '@portinari/portinari-ui';
import { PoModalAction, PoModalComponent } from '@portinari/portinari-ui';
import { PoBreadcrumb } from '@portinari/portinari-ui';
import { PoDialogService } from '@portinari/portinari-ui';
import { PoNotificationService } from '@portinari/portinari-ui';
import { NgForm } from '@angular/forms';

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
  hiringProcessesColumns: Array<PoTableColumn>;
  hiringProcessesFiltered: Array<object>;
  jobDescription: Array<string> = [];
  jobDescriptionOptions: Array<PoMultiselectOption>;
  labelFilter = '';
  statusOptions: Array<PoCheckboxGroupOption>;
  switch: boolean;

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cadastrar Paciente', action:this.openQuestionnaire.bind(this)},
    { label: 'Aprovar'},
    { label: 'qualquer coisa'},
    { label: 'Seila'},
  ];

  
  accompaniment: string = '';
  fruits: Array<string>;
  orderDetail: string = '';

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Close',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
      this.confirmaPaciente();
    },
    label: 'Confirm'
  };




  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  exameMedico: boolean;

  constructor(private exameService: ExamesService,
              private poNotification: PoNotificationService) { }

  ngOnInit() {
    this.exameService.listaExamess().subscribe(value => {
      // tslint:disable-next-line: no-string-literal
      this.hiringProcessesColumns = this.getColumns();
      this.hiringProcesses = value['exames']; 
    
    });

    this.switch = undefined;

  }
  closeModal() {
    //this.form.reset();
    this.poModal.close();
  }

  confirmaPaciente() {
    alert("Method not implemented.");
  }

  openQuestionnaire() {
    this.poModal.open();
  }
  
  linhaSelecionada(row: any) {
    if (row) {
      console.log(row);
    }
  }

  selecionaMedico(){
    return this.exameMedico != this.exameMedico;

  }

  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus', label: 'Status', type: 'subtitle', subtitles: [
          { value: 'Apto', color: 'success', label: 'Apto', content: '1' },
          { value: 'Inapto', color: 'danger', label: 'Inapto', content: '2' },
          { value: 'Inapto Temporario', color: 'warning', label: 'Inapto Temporario', content: '3' },
          { value: 'Restricao', color: 'color-06', label: 'Restricao', content: '4' },
          { value: 'Em Andamento', color: 'dot po-color-11', label: 'Em Andamento', content: '5' },
        ]
      },
      { property: 'nome', label: 'Nome', type: 'string' },
      { property: 'tipo_exame', label: 'Tipo Exame', type: 'string' },
      { property: 'descricao', label: 'Descrição', type: 'string' },
    ];
  }


  openModal() {
    this.poModal.open();
  }

}
