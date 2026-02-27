export interface DashboardOverview {
  indiceMaturidade: MaturityLevel;
  taxaRotatividade: RotativityRate;
  tempoMedioMatricula: EnrollmentTime;
  nivelEngajamento: EngagementLevel;
  statusPlanejamento: PlanningStatus;
  ultimaAtualizacao: Date;
}

export interface MaturityLevel {
  score: number; // 0-100
  niveau: 'iniciante' | 'em_desenvolvimento' | 'operacional' | 'otimizado';
  categoria: string;
  descricao: string;
}

export interface RotativityRate {
  percentual: number;
  tendencia: 'crescente' | 'estavel' | 'decrescente';
  docentes: number;
  administrativos: number;
}

export interface EnrollmentTime {
  diasMedio: number;
  minimo: number;
  maximo: number;
  tendencia: 'crescente' | 'estavel' | 'decrescente';
}

export interface EngagementLevel {
  score: number; // 0-100
  categoria: string;
  tendencia: 'crescente' | 'estavel' | 'decrescente';
}

export interface PlanningStatus {
  percentualConclusao: number;
  metasAcordadas: number;
  metasAlcancadas: number;
  emAtraso: number;
  statusGeral: 'em_dia' | 'atencao' | 'critico';
}

export interface DashboardCard {
  titulo: string;
  valor: string | number;
  unidade?: string;
  indicador?: 'positivo' | 'neutro' | 'negativo';
  variacao?: number;
}
