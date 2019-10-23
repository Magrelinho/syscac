import { Component, OnInit } from '@angular/core';
import { PoMenuItem } from '@portinari/portinari-ui';
import { GlobalService } from 'src/app/service/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menuItemSelected: string;
  teste: number;

  menus: Array<PoMenuItem> = [
    { label: 'Pacientes', icon: 'po-icon-user', shortLabel: 'Pacientes', link: '/home/pacientes' },
    // tslint:disable-next-line: max-line-length
    { label: 'Exames', action: this.buscabadge, icon: 'po-icon-document-filled', shortLabel: 'Exames', link: '/home/exames', badge: { value: 0 } },
    {
      label: 'Relatorios', icon: 'po-icon-document-double', shortLabel: 'Relatorios', subItems: [
        { label: 'Mapa Mensal', action: this.printMenuAction, link: 'http://trabalho.gov.br/' },
        { label: 'Relacao dos candidatos', action: this.printMenuAction, link: 'http://www.sindpd.com.br/' }
      ]
    }];

  constructor(private exameLength: GlobalService) { }

  ngOnInit() {
  }

  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

  buscabadge() {
    this.exameLength.examesObservable.subscribe(value => {

      this.menus[1].badge.value = value;

    })
  }

}
