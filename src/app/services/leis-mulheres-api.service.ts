import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeisMulheresApiModel } from './leis-mulheres-api-model';

@Injectable({
  providedIn: 'root'
})
export class LeisMulheresApiService {

  constructor(private http: HttpClient) { }
    private apiUrl = 'https://treinamentodecola-default-rtdb.firebaseio.com/imoveis.json';
​
   public get(): Observable<LeisMulheresApiModel[]> {
    return this.http.get<LeisMulheresApiModel[]>(this.apiUrl);
  }

}
