import { Component, OnInit } from '@angular/core';
import { InstituicoesMulheresApiModel } from 'src/app/services/instituicoes-mulheres-api-model';
import { InstituicoesMulheresApiService } from 'src/app/services/instituicoes-mulheres-api.service';

@Component({
  selector: 'app-ajuda-page',
  templateUrl: './ajuda-page.component.html',
  styleUrls: ['./ajuda-page.component.css']
})
export class AjudaPageComponent implements OnInit {
  instituicoes: InstituicoesMulheresApiModel[] = [];
  constructor(public InstituicoesMulheres: InstituicoesMulheresApiService) { }

  ngOnInit(): void {
    this.InstituicoesMulheres.get().subscribe({
      next: (retornoDaApi) => {
        this.instituicoes = retornoDaApi;
      }
    });
}
}
