import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DashboardOverview } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor() {}

  getOverview(): Observable<DashboardOverview> {
    const mockData: DashboardOverview = {
      indiceMaturidade: {
        score: 72,
        niveau: 'operacional',
        categoria: 'Processos Acadêmicos',
        descricao: 'Organização em nível operacional com processos definidos'
      },
      taxaRotatividade: {
        percentual: 8.5,
        tendencia: 'estavel',
        docentes: 12,
        administrativos: 8
      },
      tempoMedioMatricula: {
        diasMedio: 6.2,
        minimo: 2,
        maximo: 14,
        tendencia: 'decrescente'
      },
      nivelEngajamento: {
        score: 78,
        categoria: 'Elevado',
        tendencia: 'crescente'
      },
      statusPlanejamento: {
        percentualConclusao: 65,
        metasAcordadas: 24,
        metasAlcancadas: 18,
        emAtraso: 3,
        statusGeral: 'em_dia'
      },
      ultimaAtualizacao: new Date()
    };

    return of(mockData).pipe(delay(800));
  }
}
