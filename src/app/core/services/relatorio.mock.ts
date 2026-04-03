import { RelatorioInteligente, ParametrosGeracao } from '../models';

/**
 * Dados mockados de relatórios para desenvolvimento
 * Simula resposta da API de relatórios inteligentes
 */
export const RELATORIOS_MOCK_DATA: RelatorioInteligente[] = [
  {
    id: 'rel-001',
    titulo: 'Diagnóstico Estratégico Institucional - 2026',
    descricao: 'Análise completa da maturidade organizacional da UNH',
    dataCriacao: new Date('2026-03-15'),
    dataUltimaAtualizacao: new Date('2026-03-20'),
    tipo: 'diagnostico',
    confiabilidade: 92,
    diagnostico: {
      resumoExecutivo: 'A Universidade Nova Horizonte apresenta maturidade organizacional em nível de desenvolvimento, com score de 68/100. Principais desafios identificados: processos administrativos fragmentados (impacto alto), falta de integração de dados estratégicos (impacto alto) e comunicação interna descentralizada (impacto médio). Oportunidades: implementação de plataforma integrada, standardização de processos e melhor engajamento.',
      achados: [
        {
          titulo: 'Processos administrativos fragmentados',
          descricao: 'Matrícula, aprovação de disciplinas e emissão de documentos ocorrem em sistemas distintos sem integração, causando atrasos e erros.',
          impacto: 'alto',
          evidencia: 'Média de 7-10 dias para conclusão de matrícula contra benchmark de 2-3 dias',
          categoria: 'Processos'
        },
        {
          titulo: 'Falta de indicadores consolidados',
          descricao: 'Decisões gerenciais tomadas sem base em dados estruturados, com elevado grau de subjetividade.',
          impacto: 'alto',
          evidencia: 'Não existem dashboards estratégicos ou relatórios consolidados de desempenho',
          categoria: 'Governança'
        },
        {
          titulo: 'Alta rotatividade docente',
          descricao: 'Taxa de turnover de 18% ao ano, acima da média do setor (12%)',
          impacto: 'alto',
          evidencia: 'Perda de 8-10 professores por semestre, impactando continuidade pedagógica',
          categoria: 'Gestão de Pessoas'
        },
        {
          titulo: 'Baixo engajamento interno',
          descricao: 'Clima organizacional com score 56/100, indicando desconexão entre estratégia e operação',
          impacto: 'medio',
          evidencia: 'Pesquisa de clima 2025: apenas 38% concordam que entendem os objetivos institucionais',
          categoria: 'Clima Organizacional'
        },
        {
          titulo: 'Planejamento estratégico desatualizado',
          descricao: 'Plano estratégico 2023-2026 sem revisão executada, perdendo relevância',
          impacto: 'medio',
          evidencia: 'Último ajuste realizado há 18 meses; contexto interno e externo alterado',
          categoria: 'Estratégia'
        }
      ],
      pontosFortesIdentificados: [
        'Corpo docente qualificado (78% com mestrado ou doutorado)',
        'Infraestrutura tecnológica em expansão',
        'Forte reputação acadêmica no mercado local',
        'Comunidade universitária engajada com movimentos sociais',
        'Inovação em metodologias pedagógicas'
      ],
      areaCritica: [
        'Processos Administrativos',
        'Governança de Dados',
        'Comunicação Estratégica',
        'Retenção de Talentos'
      ],
      oportunidadesIdentificadas: [
        'Implementação de sistema integrado (ERP)',
        'Criação de escritório de projetos (PMO)',
        'Programa estruturado de desenvolvimento de líderes',
        'Plataforma de comunicação interna centralizada',
        'Dashboard executivo com KPIs em tempo real'
      ]
    },
    sugestoes: [
      {
        id: 'sug-001',
        titulo: 'Implementar Sistema ERP Integrado',
        descricao: 'Consolidar todos os módulos administrativos (matrícula, RH, financeiro, acadêmico) em um único sistema integrado com banco de dados centralizado.',
        prioridade: 'alta',
        impactoEstimado: 'transformador',
        esforco: 85,
        retornoOnInvestimento: 90,
        diasParaImplementacao: 180,
        responsavel: 'Pró-Reitoria de Administração',
        status: 'aprovada'
      },
      {
        id: 'sug-002',
        titulo: 'Criar Dashboard de Indicadores Estratégicos',
        descricao: 'Desenvolver plataforma de BI com indicadores em tempo real para apoio à tomada de decisão, incluindo KPIs de processos, pessoas, acadêmicos e financeiros.',
        prioridade: 'alta',
        impactoEstimado: 'transformador',
        esforco: 70,
        retornoOnInvestimento: 88,
        diasParaImplementacao: 90,
        responsavel: 'TI',
        status: 'em_analise'
      },
      {
        id: 'sug-003',
        titulo: 'Programa de Desenvolvimento de Líderes',
        descricao: 'Estruturar programa de capacitação contínua para gestores (24 ciclos/ano, 4 horas cada) com foco em liderança, comunicação e gestão por resultados.',
        prioridade: 'alta',
        impactoEstimado: 'significativo',
        esforco: 50,
        retornoOnInvestimento: 75,
        diasParaImplementacao: 60,
        responsavel: 'CRH',
        status: 'proposta'
      },
      {
        id: 'sug-004',
        titulo: 'Padronizar Processos Críticos (BPM)',
        descricao: 'Modelar e documentar processos críticos (matrícula, aprovação de disciplinas, emissão de documentos) com identificação de gargalos e oportunidades.',
        prioridade: 'alta',
        impactoEstimado: 'significativo',
        esforco: 65,
        retornoOnInvestimento: 82,
        diasParaImplementacao: 120,
        responsavel: 'Gestão de Processos',
        status: 'proposta'
      },
      {
        id: 'sug-005',
        titulo: 'Revisar Plano Estratégico Institucional',
        descricao: 'Executar revisão do plano estratégico 2023-2026 com alinhamento de cenários, objetivos, metas e indicadores a novo contexto.',
        prioridade: 'media',
        impactoEstimado:  'significativo',
        esforco: 45,
        retornoOnInvestimento: 70,
        diasParaImplementacao: 75,
        responsavel: 'Planejamento Estratégico',
        status: 'proposta'
      },
      {
        id: 'sug-006',
        titulo: 'Programa de Retenção de Docentes',
        descricao: 'Desenhar programa estruturado de retenção com benefícios, desenvolvimento de carreira e engajamento (meta: reduzir turnover para 12%).',
        prioridade: 'media',
        impactoEstimado: 'significativo',
        esforco: 55,
        retornoOnInvestimento: 78,
        diasParaImplementacao: 90,
        responsavel: 'CRH',
        status: 'proposta'
      },
      {
        id: 'sug-007',
        titulo: 'Campanha de Comunicação Interna',
        descricao: 'Estruturar campanha de comunicação estratégica para alinhar comunidade com objetivos institucionais e aumentar clima organizacional.',
        prioridade: 'media',
        impactoEstimado: 'moderado',
        esforco: 40,
        retornoOnInvestimento: 65,
        diasParaImplementacao: 45,
        responsavel: 'Comunicação',
        status: 'implementando'
      }
    ],
    classificacaoMaturidade: {
      score: 68,
      niveau: 'em_desenvolvimento',
      comparativoSetor: 62,
      trajetoriaMelhoria: {
        dataAtual: new Date('2026-03-20'),
        scoreAtual: 68,
        scoreProjetado12Meses: 78,
        caminhoMelhor: [
          'Q2 2026: Implementar ERP (estimado +8 pontos)',
          'Q3 2026: Criar dashboard estratégico (+6 pontos)',
          'Q4 2026: Revisão plano estratégico (+4 pontos)',
          'Q1 2027: Programa de líderes e retenção (+4 pontos)',
          'Q2 2027: Consolidação e sustentabilidade (+2 pontos)'
        ]
      }
    }
  },
  {
    id: 'rel-002',
    titulo: 'Análise de Processos Críticos - Matrícula e Registros',
    descricao: 'Mapeamento detalhado do fluxo de matrícula com identificação de gargalos',
    dataCriacao: new Date('2026-03-10'),
    dataUltimaAtualizacao: new Date('2026-03-18'),
    tipo: 'analise',
    confiabilidade: 88,
    diagnostico: {
      resumoExecutivo: 'O processo de matrícula apresenta 12 etapas com 3 gargalos críticos: aprovação de pré-requisitos (2-3 dias), validação de documentação (1-2 dias) e emissão de documentação oficial (1-2 dias). Tempo total: 7-10 dias vs. benchmark 2-3 dias.',
      achados: [
        {
          titulo: 'Gargalo 1: Aprovação de Pré-requisitos Manual',
          descricao: 'Aprovação realizada manualmente por coordenador, sem automatização, gerando atraso significativo',
          impacto: 'alto',
          evidencia: 'Backlog de 150-200 alunos aguardando aprovação; tempo médio 2.5 dias',
          categoria: 'Processos'
        },
        {
          titulo: 'Gargalo 2: Validação de Documentação Descentralizada',
          descricao: 'Múltiplos sistemas verificam documentação (SRH, Biblioteca, Financeiro), sem integração',
          impacto: 'alto',
          evidencia: 'Retrabalho frequente; alunos precisam ir a 3-4 setores diferentes',
          categoria: 'Integração de Sistemas'
        },
        {
          titulo: 'Gargalo 3: Emissão Manual de Documentação',
          descricao: 'Documentação final emitida manualmente, sem automação nem assinatura digital',
          impacto: 'medio',
          evidencia: 'Tempo de emissão: 1-2 dias; documentos impressos ocupam espaço físico',
          categoria: 'Procedimentos Administrativos'
        }
      ],
      pontosFortesIdentificados: [
        'Comunidade aceitável do sistema de pré-seleção',
        'Documentação clara de pré-requisitos',
        'Personal data bem estruturado'
      ],
      areaCritica: [
        'Automação de Processos',
        'Integração de Sistemas',
        'Modernização de Procedimentos'
      ],
      oportunidadesIdentificadas: [
        'Automatizar validação de pré-requisitos com regras de negócio',
        'Integrar sistemas de validação em única plataforma',
        'Implementar assinatura digital e documentação eletrônica',
        'Criar portal de autoatendimento para alunos',
        'Definir SLA de 48 horas para conclusão'
      ]
    },
    sugestoes: [
      {
        id: 'sug-101',
        titulo: 'Automatizar Validação de Pré-Requisitos',
        descricao: 'Implementar mecanismo automático que valida pré-requisitos conforme histórico acadêmico do aluno no sistema.',
        prioridade: 'alta',
        impactoEstimado: 'transformador',
        esforco: 45,
        retornoOnInvestimento: 85,
        diasParaImplementacao: 45,
        responsavel: 'TI',
        status: 'proposta'
      },
      {
        id: 'sug-102',
        titulo: 'Integrar Plataforma de Validação de Documentos',
        descricao: 'Centralizar validação de documentação (SRH, Biblioteca, Financeiro) em portal único com status em tempo real.',
        prioridade: 'alta',
        impactoEstimado: 'transformador',
        esforco: 60,
        retornoOnInvestimento: 82,
        diasParaImplementacao: 60,
        responsavel: 'TI',
        status: 'aprovada'
      },
      {
        id: 'sug-103',
        titulo: 'Implementar Documentação Eletrônica e Assinatura Digital',
        descricao: 'Migrar documentação para formato eletrônico com assinatura digital integrada ao processo de matrícula.',
        prioridade: 'media',
        impactoEstimado: 'significativo',
        esforco: 50,
        retornoOnInvestimento: 75,
        diasParaImplementacao: 50,
        responsavel: 'TI',
        status: 'proposta'
      }
    ],
    classificacaoMaturidade: {
      score: 52,
      niveau: 'iniciante',
      comparativoSetor: 55,
      trajetoriaMelhoria: {
        dataAtual: new Date('2026-03-18'),
        scoreAtual: 52,
        scoreProjetado12Meses: 78,
        caminhoMelhor: [
          'Mês 1-2: Automatizar validação de pré-requisitos (+12 pontos)',
          'Mês 3-4: Integrar plataforma validação (+14 pontos)',
          'Mês 5-6: Documentação eletrônica (+12 pontos)',
          'Resultado projetado: 78/100 em 6 meses'
        ]
      }
    }
  }
];

/**
 * Gera relatório mockado com base em parâmetros
 * Simula processamento por IA
 */
export function gerarRelatorioMock(params: ParametrosGeracao): RelatorioInteligente {
  const id = `rel-${Date.now()}`;
  const titulo = `Relatório Diagnóstico - ${params.dataFim.toLocaleDateString('pt-BR')}`;

  return {
    id,
    titulo,
    descricao: `Análise diagnóstica do período de ${params.dataInicio.toLocaleDateString('pt-BR')} a ${params.dataFim.toLocaleDateString('pt-BR')}`,
    dataCriacao: new Date(),
    dataUltimaAtualizacao: new Date(),
    tipo: 'diagnostico',
    confiabilidade: Math.floor(Math.random() * 15) + 80, // 80-95
    diagnostico: {
      resumoExecutivo: 'Relatório gerado dinamicamente com análise de dados do período. Simulação de IA processando informações organizacionais.',
      achados: [
        {
          titulo: 'Achado Simulado 1',
          descricao: 'Descrição dinâmica baseada nos parâmetros fornecidos',
          impacto: 'alto',
          evidencia: 'Dados processados do período informado',
          categoria: 'Geral'
        }
      ],
      pontosFortesIdentificados: ['Força 1', 'Força 2'],
      areaCritica: ['Área 1', 'Área 2'],
      oportunidadesIdentificadas: ['Oportunidade 1']
    },
    sugestoes: [
      {
        id: 'sug-gen-001',
        titulo: 'Sugestão Gerada Dinamicamente',
        descricao: 'Sugestão de melhoria baseada na análise do período',
        prioridade: 'media',
        impactoEstimado: 'significativo',
        esforco: 60,
        retornoOnInvestimento: 75,
        diasParaImplementacao: 90,
        status: 'proposta'
      }
    ],
    classificacaoMaturidade: {
      score: Math.floor(Math.random() * 30) + 50,
      niveau: 'em_desenvolvimento',
      comparativoSetor: 65,
      trajetoriaMelhoria: {
        dataAtual: params.dataFim,
        scoreAtual: 60,
        scoreProjetado12Meses: 75,
        caminhoMelhor: [
          'Q2: Fase de diagnóstico',
          'Q3: Implementação de ações',
          'Q4: Consolidação e ajustes'
        ]
      }
    }
  };
}
