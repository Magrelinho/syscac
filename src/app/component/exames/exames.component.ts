import { Component, OnInit, ViewChild } from '@angular/core';
import { ExamesService } from 'src/app/service/exames.service';
// tslint:disable-next-line: max-line-length
import { PoTableColumn, PoDialogService, PoDialogAlertLiterals, PoDialogConfirmLiterals, PoTableAction, PoModalAction } from '@portinari/portinari-ui';
import { PoPageAction, PoModalComponent } from '@portinari/portinari-ui';
import { NgForm } from '@angular/forms';
import { GlobalService } from 'src/app/service/global.service';
import { BoletoService } from 'src/app/service/boleto.service';
import { ModalResultadoComponent } from 'src/app/modal/modal-resultado/modal-resultado.component';
import { ModalExamesComponent } from 'src/app/modal/modal-exames/modal-exames.component';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {

  items: Array<object>;
  exameValue: Array<any>;
  exameSelecionado: any;
  message: string;
  title: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  actionOptions: Array<string>;
  action: string;
  exameColunas: PoTableColumn[];

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cadastrar Paciente', action: this.cadastrarPaciente.bind(this), icon: 'po-icon-user-add' },
  ];

  public readonly actionsTable: Array<PoTableAction> = [
    { label: 'Gerar Boleto', action: this.geraBoleto.bind(this), icon: 'po-icon-bar-code' },
    { label: 'Resultado', action: this.openResultado.bind(this), icon: 'po-icon-target' },
    { label: 'Remover', action: this.removerExame.bind(this), icon: 'po-icon-delete' },
  ];


  @ViewChild('optionsForm', { static: true }) form: NgForm;
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;
  @ViewChild(ModalResultadoComponent, { static: true }) poModalResultado: ModalResultadoComponent;
  @ViewChild(ModalExamesComponent, { static: true }) poModalCadrastroExame: ModalExamesComponent;


  constructor(private exameService: ExamesService,
    private exameLength: GlobalService,
    private poAlert: PoDialogService,
    private boletoService: BoletoService) { }

  close: PoModalAction = {
    action: () => {
      this.closeModal();
    },
    label: 'Cancelar',
    danger: true
  };

  confirm: PoModalAction = {
    action: () => {
    },
    label: 'Confirmar'
  };

  ngOnInit() {
    this.exameService.listaExamess().subscribe(value => {
      this.exameColunas = this.getColumns();
      this.exameValue = value['exames'];
      this.exameLength.examesObservable.next(value['exames'].length);

    });
    this.actionOptions = [];
  }

  openResultado() {
    this.poModalResultado.openResultado(this.exameSelecionado);
  }

  geraBoleto() {
    this.poAlert.confirm({
      literals: this.literalsConfirm,
      title: 'Gerar boleto para cobrança',
      message: 'Deseja gerar boleto de cobrança para ' + this.exameSelecionado.nome + '?',
      confirm: () => this.confirmaBoleto(),
    });
  }

  cadastrarPaciente() {
    this.poModalCadrastroExame.openCadastro();
  }

  removerExame() {
    this.exameValue.forEach((item, index) => {
      if (item.id === this.exameSelecionado.id) {
        this.exameValue.splice(index, 1);
      }
    });
  }

  confirmaBoleto() {
    this.boletoService.gerarBoleto(this.exameSelecionado).subscribe(value => {
      console.log(value);
    });
  }

  closeModal() {
    this.poModal.close();
  }

  linhaSelecionada(row: any) {
    if (row) {
      this.exameSelecionado = row;
      console.log(row);
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



}
