import { Component, OnInit } from '@angular/core';
import { PoListViewAction } from '@portinari/portinari-ui';
import { PacienteService } from 'src/app/service/pacientes.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {
  action: PoListViewAction;
  items: [];

  readonly actions: Array<PoListViewAction> = [
    {
      label: 'Teste Get',
      action: this.testeGet.bind(this),
      disabled: this.cancelCandidate.bind(this),
      icon: 'po-icon-ok'
    },
    {
      label: 'Remover',
      action: this.cancelCandidate.bind(this),
      disabled: this.cancelCandidate.bind(this),
      type: 'danger',
      icon: 'po-icon-delete'
    }
  ];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {

    this.testeGet();

  }

  private cancelCandidate(selectedCandidate) {

  }

  public testeGet() {
    this.pacienteService.listaPacientes().subscribe(value => {
      this.items = value['pacientes'];
    });
  }
}
