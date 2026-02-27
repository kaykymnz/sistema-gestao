import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PessoasIndicadores, Pessoa, AnaliseDesempenho } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  constructor() {}

  getIndicadores(): Observable<PessoasIndicadores> {
    const mockData: PessoasIndicadores = {
      totalDocentes: 124,
      totalAdministrativos: 68,
      taxaTurnover: 8.2,
      mediaDesempenho: 76.5,
      mediaEngajamento: 74.3,
      evolucaoMensual: [
        { mes: 'Dezembro', desempenho: 72, engajamento: 70, turnover: 9.5 },
        { mes: 'Janeiro', desempenho: 74, engajamento: 71, turnover: 8.8 },
        { mes: 'Fevereiro', desempenho: 76.5, engajamento: 74.3, turnover: 8.2 }
      ],
      distribuicaoAvaliacao: {
        excelente: 18,
        otimo: 56,
        bom: 89,
        atencao: 22,
        critico: 7
      }
    };

    return of(mockData).pipe(delay(700));
  }

  getPessoas(): Observable<Pessoa[]> {
    const mockData: Pessoa[] = [
      {
        id: '1',
        nome: 'Dr. Carlos Silva',
        tipo: 'docente',
        departamento: 'Engenharia',
        desempenho: 92,
        engajamento: 88,
        avaliacao: 'excelente',
        dataAdmissao: new Date('2018-03-15'),
        ultimaAvaliacao: new Date('2026-01-10')
      },
      {
        id: '2',
        nome: 'Profa. Ana Costa',
        tipo: 'docente',
        departamento: 'Gestão',
        desempenho: 85,
        engajamento: 82,
        avaliacao: 'otimo',
        dataAdmissao: new Date('2019-08-20'),
        ultimaAvaliacao: new Date('2026-01-15')
      },
      {
        id: '3',
        nome: 'Roberto Mendes',
        tipo: 'administrativo',
        departamento: 'Financeiro',
        desempenho: 78,
        engajamento: 75,
        avaliacao: 'bom',
        dataAdmissao: new Date('2020-05-10'),
        ultimaAvaliacao: new Date('2026-02-01')
      },
      {
        id: '4',
        nome: 'Maria Santos',
        tipo: 'administrativo',
        departamento: 'RH',
        desempenho: 55,
        engajamento: 48,
        avaliacao: 'atencao',
        dataAdmissao: new Date('2023-01-02'),
        ultimaAvaliacao: new Date('2026-02-05')
      },
      {
        id: '5',
        nome: 'Prof. João Oliveira',
        tipo: 'docente',
        departamento: 'Humanas',
        desempenho: 65,
        engajamento: 52,
        avaliacao: 'critico',
        dataAdmissao: new Date('2017-02-28'),
        ultimaAvaliacao: new Date('2026-02-10')
      }
    ];

    return of(mockData).pipe(delay(600));
  }

  getAnaliseDesempenho(): Observable<AnaliseDesempenho> {
    const mockData: AnaliseDesempenho = {
      periodo: 'Janeiro a Fevereiro 2026',
      mediaGeral: 76.5,
      melhoresDesempenh: [
        {
          id: '1',
          nome: 'Dr. Carlos Silva',
          tipo: 'docente',
          departamento: 'Engenharia',
          desempenho: 92,
          engajamento: 88,
          avaliacao: 'excelente',
          dataAdmissao: new Date('2018-03-15'),
          ultimaAvaliacao: new Date('2026-01-10')
        }
      ],
      atencao: [
        {
          id: '4',
          nome: 'Maria Santos',
          tipo: 'administrativo',
          departamento: 'RH',
          desempenho: 55,
          engajamento: 48,
          avaliacao: 'atencao',
          dataAdmissao: new Date('2023-01-02'),
          ultimaAvaliacao: new Date('2026-02-05')
        }
      ],
      tendencia: 'crescente'
    };

    return of(mockData).pipe(delay(500));
  }
}
