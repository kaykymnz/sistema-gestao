import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RelatorioInteligente, ParametrosGeracao } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private apiUrl = 'http://localhost:8080/api/relatorios';
  private apiUrlGerar = 'http://localhost:8080/api/relatorios/gerar';

  constructor(private http: HttpClient) {}

  gerarRelatorio(params: ParametrosGeracao): Observable<RelatorioInteligente> {
    return this.http.post<RelatorioInteligente>(this.apiUrlGerar, params);
  }

  getRelatorios(): Observable<RelatorioInteligente[]> {
    return this.http.get<RelatorioInteligente[]>(this.apiUrl);
  }
}
