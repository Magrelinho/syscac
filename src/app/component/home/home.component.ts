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
    { label: 'Atendimento', action: this.printMenuAction, icon: 'po-icon-user', shortLabel: 'Atendimento' },
    { label: 'Timekeeping', action: this.printMenuAction, icon: 'po-icon-clock', shortLabel: 'Timekeeping', badge: { value: 1 } },
    { label: 'Useful links', icon: 'po-icon-share', shortLabel: 'Links', subItems: [
      { label: 'Ministry of Labour', action: this.printMenuAction, link: 'http://trabalho.gov.br/' },
      { label: 'SindPD Syndicate', action: this.printMenuAction, link: 'http://www.sindpd.com.br/' }
    ]}];

  constructor() { }

  ngOnInit() {
  }
  
  printMenuAction(menu: PoMenuItem) {
    this.menuItemSelected = menu.label;
  }

}
