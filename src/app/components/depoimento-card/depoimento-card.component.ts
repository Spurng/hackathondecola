import { Component, Input, OnInit } from '@angular/core';
import { DepoimentoModel } from '../depoimento-model';

@Component({
  selector: 'app-depoimento-card',
  templateUrl: './depoimento-card.component.html',
  styleUrls: ['./depoimento-card.component.css']
})
export class DepoimentoCardComponent implements OnInit {

  @Input()
  public depoimento : DepoimentoModel = new DepoimentoModel();

  constructor() { }

  ngOnInit(): void {
  }
}
