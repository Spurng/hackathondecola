import { Component, OnInit } from '@angular/core';
import { InstituicoesMulheresApiModel } from 'src/app/services/instituicoes-mulheres-api-model';
import { InstituicoesMulheresApiService } from 'src/app/services/instituicoes-mulheres-api.service';
import { LeisMulheresApiModel } from 'src/app/services/leis-mulheres-api-model';
import { LeisMulheresApiService } from 'src/app/services/leis-mulheres-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  instituicoes: InstituicoesMulheresApiModel[] = [];
  leis: LeisMulheresApiModel[] = [];

​
  constructor(
    public InstituicoesMulheres: InstituicoesMulheresApiService,
    public LeisMulheres: LeisMulheresApiService) { }
​
  ngOnInit(): void {
    this.InstituicoesMulheres.get().subscribe({
      next: (retornoDaApi) => {
        this.instituicoes = retornoDaApi;
      }
    });

    this.LeisMulheres.get().subscribe({
      next: (retornoDaApi) => {
        this.leis = retornoDaApi;
        console.log(this.instituicoes[0]?.descricao)
      }
    });
​
  }



}
