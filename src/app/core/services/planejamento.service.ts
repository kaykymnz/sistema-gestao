import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PlanejamentoEstrategico, MatrizRisco, PlanoAcao5W2H } from '../models';

@Injectable({
  providedIn: 'root',
})
export class PlanejamentoService {
  private apiUrl = 'http://localhost:8080/api/planejamento';
  private apiUrlMatriz = 'http://localhost:8080/api/planejamento/matriz-risco';
  private apiUrl5w2h = 'http://localhost:8080/api/planejamento/5w2h';

  constructor(private http: HttpClient) {}

  getPlanejamento(): Observable<PlanejamentoEstrategico> {
    return this.http.get<PlanejamentoEstrategico>(this.apiUrl);
  }

  getRiscos(): Observable<MatrizRisco[]> {
    return this.http.get<MatrizRisco[]>(this.apiUrlMatriz);
  }

  getPlanoAcao5W2H(): Observable<PlanoAcao5W2H[]> {
    return this.http.get<PlanoAcao5W2H[]>(this.apiUrl5w2h);
  }
}
