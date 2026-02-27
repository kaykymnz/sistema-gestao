export interface RelatorioInteligente {
  id: string;
  titulo: string;
  descricao: string;
  dataCriacao: Date;
  dataUltimaAtualizacao: Date;
  tipo: 'diagnostico' | 'analise' | 'predicao';
  diagnostico: Diagnostico;
  sugestoes: SugestoMelhoria[];
  classificacaoMaturidade: ClassificacaoMaturidade;
  confiabilidade: number; // 0-100
}

export interface Diagnostico {
  resumoExecutivo: string;
  achados: AchadoDiagnostico[];
  pontosFortesIdentificados: string[];
  areaCritica: string[];
  oportunidadesIdentificadas: string[];
}

export interface AchadoDiagnostico {
  titulo: string;
  descricao: string;
  impacto: 'alto' | 'medio' | 'baixo';
  evidencia: string;
  categoria: string;
}

export interface SugestoMelhoria {
  id: string;
  titulo: string;
  descricao: string;
  prioridade: 'alta' | 'media' | 'baixa';
  impactoEstimado: 'transformador' | 'significativo' | 'moderado';
  esforco: number; // 0-100
  retornoOnInvestimento: number; // 0-100
  diasParaImplementacao: number;
  responsavel?: string;
  status?: 'proposta' | 'em_analise' | 'aprovada' | 'implementando' | 'concluida';
}

export interface ClassificacaoMaturidade {
  score: number; // 0-100
  niveau: 'iniciante' | 'em_desenvolvimento' | 'operacional' | 'otimizado' | 'lider_industria';
  comparativoSetor: number;
  trajetoriaMelhoria: TrajetoriaMelhoria;
}

export interface TrajetoriaMelhoria {
  dataAtual: Date;
  scoreAtual: number;
  scoreProjetado12Meses: number;
  caminhoMelhor: string[];
}

export interface ParametrosGeracao {
  filtro?: string;
  dataInicio: Date;
  dataFim: Date;
  incluirComparativo: boolean;
}
