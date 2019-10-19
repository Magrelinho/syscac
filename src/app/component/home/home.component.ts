import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItemSelected: string;

  menus: Array<PoMenuItem> = [
    { label: 'Pacientes', icon: 'po-icon-user', shortLabel: 'Pacientes', link: '/home/pacientes' },
    { label: 'Exames',    icon: 'po-icon-document-filled', shortLabel: 'Exames', link: '/home/exames' , badge: { value: 100 } },
    {
      label: 'Relatorios', icon: 'po-icon-document-double', shortLabel: 'Relatorios', subItems: [
        { label: 'Mapa Mensal', action: this.printMenuAction, link: 'http://trabalho.gov.br/' },
        { label: 'Relacao dos candidatos', action: this.printMenuAction, link: 'http://www.sindpd.com.br/' }
      ]
    }];

  constructor() { }

  ngOnInit() {
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

}
