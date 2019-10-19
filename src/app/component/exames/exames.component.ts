import { Component, OnInit } from '@angular/core';
import { ExamesService } from 'src/app/service/exames.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.component.html',
  styleUrls: ['./exames.component.css']
})
export class ExamesComponent implements OnInit {
  items: [];

  constructor(private exameService: ExamesService) { }

  ngOnInit() {
    this.exameService.listaExamess().subscribe(value => {
      this.items = value['exames'];

    })
    
  }

}
