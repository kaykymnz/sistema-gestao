import { ChatContextSnapshot, ChatResponse } from '../models';

export const CHAT_CONTEXT_MOCK: ChatContextSnapshot = {
  dashboardResumo:
    'Maturidade organizacional em 68/100, com foco em melhoria de integração de processos e governança de dados.',
  processosCriticos: [
    'Matrícula com tempo médio de 7-10 dias (benchmark: 2-3 dias).',
    'Aprovação de pré-requisitos com backlog elevado e fluxo manual.'
  ],
  indicadoresPessoas: [
    'Turnover docente em 18% ao ano, acima da média setorial (12%).',
    'Clima organizacional com score de 56/100.'
  ],
  planejamentoAtivo: [
    'Implementação de ERP institucional em 180 dias.',
    'Criação de dashboard executivo de indicadores em 90 dias.'
  ]
};

export function gerarRespostaChatMock(pergunta: string, sessionId: string): ChatResponse {
  const perguntaNormalizada = pergunta.toLowerCase();

  const respostaPadrao =
    'Com base no contexto institucional atual, recomendo priorizar ações de integração de dados e automação de processos críticos para reduzir atrasos operacionais e melhorar a tomada de decisão.';

  let answer = respostaPadrao;

  if (perguntaNormalizada.includes('matrícula') || perguntaNormalizada.includes('matricula')) {
    answer =
      'O principal gargalo está no fluxo de matrícula, que leva 7-10 dias. A maior alavanca é automatizar aprovação de pré-requisitos e centralizar validações em um único sistema.';
  } else if (perguntaNormalizada.includes('turnover') || perguntaNormalizada.includes('docente')) {
    answer =
      'A taxa de turnover docente está em 18% ao ano. Vale combinar um programa de retenção com trilhas de desenvolvimento e revisão de incentivos para convergir à média de 12%.';
  } else if (perguntaNormalizada.includes('prioridade') || perguntaNormalizada.includes('plano')) {
    answer =
      'No curto prazo, as prioridades de maior impacto são: 1) ERP integrado, 2) dashboard executivo e 3) revisão do plano estratégico com indicadores mensuráveis por área.';
  }

  return {
    sessionId,
    answer,
    contextUsed: CHAT_CONTEXT_MOCK,
    confidence: 0.82
  };
}
