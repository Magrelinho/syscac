import { Component, OnInit } from '@angular/core';
import { ExamesService } from 'src/app/service/exames.service';
import { PoTableColumn, PoMultiselectOption, PoCheckboxGroupOption } from '@portinari/portinari-ui';
import { PoPageAction, PoPageFilter } from '@portinari/portinari-ui';
import { PoModalAction, PoModalComponent } from '@portinari/portinari-ui';
import { PoBreadcrumb } from '@portinari/portinari-ui';
import { PoDialogService } from '@portinari/portinari-ui';
import { PoNotificationService } from '@portinari/portinari-ui';

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

  public readonly actions: Array<PoPageAction> = [
    { label: 'Teste'},
    { label: 'Aprovar'},
    { label: 'qualquer coisa'},
    { label: 'Seila'},
  ];

  constructor(private exameService: ExamesService) { }

  ngOnInit() {
    this.exameService.listaExamess().subscribe(value => {
      // tslint:disable-next-line: no-string-literal
      this.hiringProcessesColumns = this.getColumns();
      this.hiringProcesses = value['exames']; 

      // tslint:disable-next-line: no-shadowed-variable
      this.hiringProcesses .forEach(value => {
        value['status_value'] = value.status.descricao;

      });
    });

  }

  
  getColumns(): Array<PoTableColumn> {
    return [
      {
        property: 'hireStatus', label: 'Status', type: 'subtitle', subtitles: [
          { value: 'Aprovado', color: 'success', label: 'Aprovado', content: '1' },
        ]
      },
      { property: 'nome', label: 'Nome', type: 'string' },
      { property: 'tipo_exame', label: 'Tipo Exame', type: 'string' },
      { property: 'status_value', label: 'Descrição', type: 'string' },
    ];
  }


}
