import { Component, OnInit, ViewChild } from '@angular/core';
import { PoModalComponent, PoSelectOption } from '@portinari/portinari-ui';

@Component({
  selector: 'app-modal-resultado',
  templateUrl: './modal-resultado.component.html',
  styleUrls: ['./modal-resultado.component.css']
})
export class ModalResultadoComponent implements OnInit {

  examesResultado: Array<PoSelectOption>;
  exames = [];

  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  constructor() { }

  ngOnInit() {
    this.examesResultado = [];
    this.examesResultado['id_status'];
  }

  openResultado(obj) {

  //  obj(element => {
    // element.label = element.descricao;
    // element.value = element.id_status;
    // this.examesResultado['value'] = obj.id_status;
    // this.examesResultado['label'] = obj.descricao;

   // });

    this.poModal.open();
  }



}
