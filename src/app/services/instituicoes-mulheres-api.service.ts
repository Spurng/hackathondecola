import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstituicoesMulheresApiModel } from './instituicoes-mulheres-api-model';

@Injectable({
  providedIn: 'root'
})
export class InstituicoesMulheresApiService {


  constructor(private http: HttpClient) {

  }
  private apiUrl = 'https://it3-klj-default-rtdb.firebaseio.com/instituicoesMulheres.json';
  ​
     public get(): Observable<InstituicoesMulheresApiModel[]> {
      return this.http.get<InstituicoesMulheresApiModel[]>(this.apiUrl);
    }
}
