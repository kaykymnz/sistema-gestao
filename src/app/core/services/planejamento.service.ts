import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PlanejamentoEstrategico, ObjetivoEstrategico, MatrizRisco } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PlanejamentoService {
  constructor() {}

  getPlanejamento(): Observable<PlanejamentoEstrategico> {
    const mockData: PlanejamentoEstrategico = {
      id: '2026-2028',
      titulo: 'Plano Estratégico 2026-2028',
      descricao: 'Direcionamento estratégico da Universidade Nova Horizonte para o triênio 2026-2028',
      periodo: {
        dataInicio: new Date('2026-01-01'),
        dataFim: new Date('2028-12-31')
      },
      objetivos: [
        {
          id: '1',
          titulo: 'Fortalecer Pesquisa e Inovação',
          descricao: 'Aumentar produção científica e transferência de conhecimento',
          metas: [
            {
              id: 'm1',
              titulo: 'Publicações em periódicos de impacto',
              valorEsperado: 150,
              valorAlcancado: 125,
              unidade: 'artigos',
              dataLimite: new Date('2027-12-31'),
              status: 'em_progresso'
            },
            {
              id: 'm2',
              titulo: 'Projetos de pesquisa aprovados',
              valorEsperado: 45,
              valorAlcancado: 32,
              unidade: 'projetos',
              dataLimite: new Date('2027-06-30'),
              status: 'em_progresso'
            }
          ],
          responsavel: 'Pró-Reitoria de Pesquisa',
          status: 'em_progresso',
          percentualConclusao: 58
        },
        {
          id: '2',
          titulo: 'Ampliar Acesso e Permanência',
          descricao: 'Incluir mais estudantes e reduzir evasão',
          metas: [
            {
              id: 'm3',
              titulo: 'Bolsas de permanência concedidas',
              valorEsperado: 300,
              valorAlcancado: 245,
              unidade: 'bolsas',
              dataLimite: new Date('2027-12-31'),
              status: 'em_progresso'
            }
          ],
          responsavel: 'Pró-Reitoria de Assuntos Estudantis',
          status: 'em_progresso',
          percentualConclusao: 72
        },
        {
          id: '3',
          titulo: 'Modernizar Infraestrutura',
          descricao: 'Investir em tecnologia e espaços modernos',
          metas: [
            {
              id: 'm4',
              titulo: 'Laboratórios modernizados',
              valorEsperado: 12,
              valorAlcancado: 5,
              unidade: 'unidades',
              dataLimite: new Date('2027-12-31'),
              status: 'em_atraso'
            }
          ],
          responsavel: 'Administração',
          status: 'em_atraso',
          percentualConclusao: 42
        }
      ],
      swot: {
        forcas: [
          'Corpo docente qualificado',
          'Infraestrutura consolidada',
          'Reputação institucional'
        ],
        fraquezas: [
          'Financiamento limitado',
          'Tecnologia defasada',
          'Gestão de processos incipiente'
        ],
        oportunidades: [
          'Demanda crescente por educação',
          'Parcerias internacionais',
          'Educação digital em expansão'
        ],
        ameacas: [
          'Concorrência de instituições privadas',
          'Redução de investimento público',
          'Mudança demográfica'
        ]
      },
      statusGeral: 'atencao',
      percentualConclusao: 57,
      ultimaAtualizacao: new Date()
    };

    return of(mockData).pipe(delay(750));
  }

  getRiscos(): Observable<MatrizRisco[]> {
    const mockData: MatrizRisco[] = [
      {
        titulo: 'Falta de financiamento',
        probabilidade: 75,
        impacto: 95,
        nivel: 'critico',
        mitigacao: 'Buscar parcerias público-privadas e diversificar fontes'
      },
      {
        titulo: 'Evasão estudantil elevada',
        probabilidade: 65,
        impacto: 80,
        nivel: 'alto',
        mitigacao: 'Programas de acompanhamento e suporte estruturado'
      },
      {
        titulo: 'Defasagem tecnológica',
        probabilidade: 55,
        impacto: 70,
        nivel: 'alto',
        mitigacao: 'Plano de modernização de infraestrutura de TI'
      }
    ];

    return of(mockData).pipe(delay(600));
  }
}
