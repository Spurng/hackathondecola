import { Component, Input, OnInit } from '@angular/core';
import { DepoimentoModel } from '../depoimento-model';

@Component({
  selector: 'app-depoimentos-page',
  templateUrl: './depoimentos-page.component.html',
  styleUrls: ['./depoimentos-page.component.css']
})
export class DepoimentosPageComponent implements OnInit {
  public listaDepoimentos: Array<DepoimentoModel>;

  @Input()
  public newDepoimento : DepoimentoModel = new DepoimentoModel();

  constructor() {
    this.listaDepoimentos = [];

    const depoimento = new DepoimentoModel();
    depoimento.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';
    depoimento.nome = 'Ana Pires';
    depoimento.cidade = 'Goiânia';
    depoimento.estado = 'GO';
      this.listaDepoimentos.push(depoimento);

    const depoimento2 = new DepoimentoModel();
    depoimento2.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';
    depoimento2.nome = 'Bete Cardoso';
    depoimento2.cidade = 'São Paulo';
    depoimento2.estado = 'SP';
      this.listaDepoimentos.push(depoimento2);
  }

  ngOnInit(): void { }

  adicionarDepoimento(texto: string, nome: string, cidade: string, estado: string): void {
    this.newDepoimento.texto = texto;
    this.newDepoimento.nome = nome || 'Anônima(o)';
    this.newDepoimento.cidade = cidade;
    this.newDepoimento.estado = estado;
    this.listaDepoimentos.push(this.newDepoimento);
  }
}
