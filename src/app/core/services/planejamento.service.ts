import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanejamentoEstrategico, MatrizRisco, ProjetoPlanejamento } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PlanejamentoService {
  private apiUrl = 'http://localhost:8080/api/planejamento';
  private apiUrlMatriz = 'http://localhost:8080/api/planejamento/matriz-risco';
  private apiUrlProjetos = 'http://localhost:8080/api/planejamento/projetos';

  constructor(private http: HttpClient) {}

  getPlanejamento(): Observable<PlanejamentoEstrategico> {
    return this.http.get<PlanejamentoEstrategico>(this.apiUrl);
  }

  getRiscos(): Observable<MatrizRisco[]> {
    return this.http.get<MatrizRisco[]>(this.apiUrlMatriz);
  }

  getProjetosPlanejamento(): Observable<ProjetoPlanejamento[]> {
    return this.http.get<ProjetoPlanejamento[]>(this.apiUrlProjetos);
  }
}
