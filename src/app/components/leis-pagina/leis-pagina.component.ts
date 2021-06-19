import { Component, OnInit } from '@angular/core';
import { LeisMulheresApiModel } from 'src/app/services/leis-mulheres-api-model';
import { LeisMulheresApiService } from 'src/app/services/leis-mulheres-api.service';

@Component({
  selector: 'app-leis-pagina',
  templateUrl: './leis-pagina.component.html',
  styleUrls: ['./leis-pagina.component.css']
})
export class LeisPaginaComponent implements OnInit {
    apiLeis:LeisMulheresApiModel[]=[];
  constructor(public LeisMulheres: LeisMulheresApiService) { }

  ngOnInit(): void {
  this.LeisMulheres.get().subscribe({
    next: (retornoDaApi) => {
    this.apiLeis = retornoDaApi;
    }
    });
  }

}
