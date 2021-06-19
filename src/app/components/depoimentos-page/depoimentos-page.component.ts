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
      'Denunciar é preciso. Sofri violência por 5 anos e era privada de ir na casa da minha família. A delegacia de onde moro foi muito acolhedora e consegui medida preventiva do meu ex-marido. Estou mais feliz e já estou com alguém que me respeita, ama e valoriza.';
    depoimento.nome = 'Ana Pires';
    depoimento.cidade = 'Goiânia';
    depoimento.estado = 'GO';
      this.listaDepoimentos.push(depoimento);

    const depoimento2 = new DepoimentoModel();
    depoimento2.texto =
      'Conhecer meus direitos mudou minha percepção do combate à violência contra a mulher. Minha vizinha sofria ameaças do namorado, mas não tinha coragem de fazer a denúncia. Eu fiz por ela e conseguimos superar essa situação terrível juntas. Hoje ela vive bem com o filho em outro estado e o agressor atrás das grades.';
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
