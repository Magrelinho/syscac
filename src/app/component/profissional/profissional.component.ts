import { Component, OnInit, ViewChild } from '@angular/core';
import { PoPageAction, PoTableColumn, PoListViewAction, PoPageFilter } from '@portinari/portinari-ui';
import { Profissional } from 'src/app/interface/profissional';
import { ModalProfissionalComponent } from 'src/app/modal/modal-profissional/modal-profissional.component';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  @ViewChild(ModalProfissionalComponent, { static: true }) poModalProfissional: ModalProfissionalComponent;

  colunas: PoTableColumn[];
  profissionais: Array<object>;
  profissional: Array<any>;
  action: PoListViewAction;
  labelFilter = '';

  public readonly actions: Array<PoPageAction> = [
    { label: 'Cadastrar Profissional', action: this.cadastrar.bind(this), icon: 'po-icon-user-add' },
  ];

  readonly actionsLista: Array<PoListViewAction> = [
    {
      label: 'Editar',
      action: this.alterar.bind(this),
      icon: 'po-icon-ok'
    },
    {
      label: 'Remover',
      action: this.remover.bind(this),
      type: 'danger',
      icon: 'po-icon-delete'
    }
  ];

  readonly filterSettings: PoPageFilter = {
    action: this.filtraLista.bind(this),
    ngModel: 'labelFilter',
    placeholder: 'Search'
  };

  constructor() { }

  ngOnInit() {
    this.profissional = this.getItems();
  }

  alterar() {

  }

  remover() {

  }

  private filtraLista(filters = [this.labelFilter]) {
    this.profissionais = this.profissional.filter(item => {
      return Object.keys(item)
        .some(key => (!(item[key] instanceof Object) && this.includeFilter(item[key], filters)));
    });
  }

  private includeFilter(item, filters) {
    return filters.some(filter => String(item).toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  cadastrar() {
    this.poModalProfissional.openCadastro();
    this.profissionais = this.getItems();
  }

  getItems() {
    return [
      {
        name: 'Mary Davis',
        cpf: '121212121'
      },
      {
        name: 'Margaret Garcia',
        cpf: '154154'
      },
      {
        name: 'Wid traveco',
        cpf: '242424'
      },
    ];
  }

}


