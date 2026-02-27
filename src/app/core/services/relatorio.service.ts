import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RelatorioInteligente, ParametrosGeracao } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  constructor() {}

  gerarRelatorio(params: ParametrosGeracao): Observable<RelatorioInteligente> {
    const mockData: RelatorioInteligente = {
      id: 'relatorio-' + new Date().getTime(),
      titulo: 'Diagnóstico Organizacional - Fevereiro 2026',
      descricao: 'Análise inteligente da maturidade e saúde organizacional',
      dataCriacao: new Date(),
      dataUltimaAtualizacao: new Date(),
      tipo: 'diagnostico',
      diagnostico: {
        resumoExecutivo:
          'A Universidade Nova Horizonte apresenta um nível de maturidade operacional, com processos definidos mas que carecem de otimização. Há potencial significativo de melhoria em gestão de recursos humanos e modernização tecnológica.',
        achados: [
          {
            titulo: 'Processos administrativos ineficientes',
            descricao: 'Aprovações em cascata causam atrasos de até 45 dias em processos críticos',
            impacto: 'alto',
            evidencia: 'Análise de ciclo de 24 processos',
            categoria: 'Processos'
          },
          {
            titulo: 'Rotatividade de pessoal elevada',
            descricao: 'Taxa de turnover de 8.2% acima do esperado para setor educacional',
            impacto: 'alto',
            evidencia: 'Dados de RH dos últimos 24 meses',
            categoria: 'Pessoas'
          },
          {
            titulo: 'Infraestrutura tecnológica defasada',
            descricao: '60% dos sistemas em operação têm mais de 5 anos',
            impacto: 'medio',
            evidencia: 'Inventário de TI',
            categoria: 'Tecnologia'
          }
        ],
        pontosFortesIdentificados: [
          'Corpo docente altamente qualificado e engajado',
          'Processos acadêmicos bem estruturados',
          'Programas de pesquisa reconhecidos'
        ],
        areaCritica: [
          'Falta de orçamento para modernização',
          'Gestão de processos baseada em modelo tradicional',
          'Limitações em coleta e análise de dados'
        ],
        oportunidadesIdentificadas: [
          'Implementação de automação de processos',
          'Investimento em desenvolvimento de pessoas',
          'Modernização da plataforma tecnológica'
        ]
      },
      sugestoes: [
        {
          id: '1',
          titulo: 'Automatizar processos de aprovação',
          descricao: 'Implementar workflow automático para reduzir ciclo de aprovações',
          prioridade: 'alta',
          impactoEstimado: 'transformador',
          esforco: 75,
          retornoOnInvestimento: 85,
          diasParaImplementacao: 90,
          responsavel: 'TI e Processos',
          status: 'proposta'
        },
        {
          id: '2',
          titulo: 'Programa de retenção de talentos',
          descricao: 'Desenvolver iniciativas de desenvolvimento profissional e melhor compensação',
          prioridade: 'alta',
          impactoEstimado: 'significativo',
          esforco: 60,
          retornoOnInvestimento: 78,
          diasParaImplementacao: 120,
          responsavel: 'RH',
          status: 'proposta'
        },
        {
          id: '3',
          titulo: 'Modernizar plataforma de dados',
          descricao: 'Implementar data warehouse e dashboards em tempo real',
          prioridade: 'media',
          impactoEstimado: 'significativo',
          esforco: 85,
          retornoOnInvestimento: 72,
          diasParaImplementacao: 180,
          responsavel: 'TI',
          status: 'proposta'
        }
      ],
      classificacaoMaturidade: {
        score: 72,
        niveau: 'operacional',
        comparativoSetor: 8,
        trajetoriaMelhoria: {
          dataAtual: new Date(),
          scoreAtual: 72,
          scoreProjetado12Meses: 81,
          caminhoMelhor: [
            'Implementar automação de processos',
            'Investir em desenvolvimento de pessoas',
            'Modernizar infraestrutura de TI',
            'Estabelecer cultura de dados'
          ]
        }
      },
      confiabilidade: 87
    };

    return of(mockData).pipe(delay(2000));
  }

  getRelatorios(): Observable<RelatorioInteligente[]> {
    const mockData: RelatorioInteligente[] = [
      {
        id: 'rel-001',
        titulo: 'Diagnóstico Organizacional - Fevereiro 2026',
        descricao: 'Análise inteligente da maturidade e saúde organizacional',
        dataCriacao: new Date('2026-02-20'),
        dataUltimaAtualizacao: new Date('2026-02-25'),
        tipo: 'diagnostico',
        diagnostico: {
          resumoExecutivo: 'Análise inicial da maturidade organizacional',
          achados: [],
          pontosFortesIdentificados: [],
          areaCritica: [],
          oportunidadesIdentificadas: []
        },
        sugestoes: [],
        classificacaoMaturidade: {
          score: 72,
          niveau: 'operacional',
          comparativoSetor: 8,
          trajetoriaMelhoria: {
            dataAtual: new Date(),
            scoreAtual: 72,
            scoreProjetado12Meses: 81,
            caminhoMelhor: []
          }
        },
        confiabilidade: 87
      }
    ];

    return of(mockData).pipe(delay(500));
  }
}
