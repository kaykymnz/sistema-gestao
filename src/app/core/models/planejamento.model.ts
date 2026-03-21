export interface PlanejamentoEstrategico {
  id: string;
  titulo: string;
  descricao: string;
  periodo: Period;
  objetivos: ObjetivoEstrategico[];
  swot: SWOT;
  statusGeral: 'em_dia' | 'atencao' | 'critico';
  percentualConclusao: number;
  ultimaAtualizacao: Date;
}

export interface Period {
  dataInicio: Date;
  dataFim: Date;
}

export interface ObjetivoEstrategico {
  id: string;
  titulo: string;
  descricao: string;
  metas: MetaEstrategica[];
  responsavel: string;
  status: 'nao_iniciado' | 'em_progresso' | 'concluido' | 'em_atraso';
  percentualConclusao: number;
}

export interface MetaEstrategica {
  id: string;
  titulo: string;
  valorEsperado: number;
  valorAlcancado: number;
  unidade: string;
  dataLimite: Date;
  status: 'nao_iniciada' | 'em_progresso' | 'concluida' | 'em_atraso';
}

export interface SWOT {
  forcas: string[];
  fraquezas: string[];
  oportunidades: string[];
  ameacas: string[];
}

export interface MatrizRisco {
  titulo: string;
  probabilidade: number; // 0-100
  impacto: number; // 0-100
  nivel: 'baixo' | 'medio' | 'alto' | 'critico';
  mitigacao: string;
}

export interface PlanoAcao5W2H {
  id: string;
  titulo: string;
  objetivo?: string;
  oQue: string;
  porQue: string;
  onde: string;
  quando: string | Date;
  quem: string;
  como: string;
  quanto: number;
  responsavel: string;
  prazo?: string | Date;
  custoEstimado?: number;
  moeda?: string;
  prioridade?: 'baixa' | 'media' | 'alta';
  status: 'planejado' | 'em_andamento' | 'concluido' | 'atrasado';
  progresso?: number;
  indicadores?: string[];
  observacoes?: string;
}
