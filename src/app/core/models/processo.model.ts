export interface Processo {
  id: string;
  nome: string;
  descricao: string;
  departamento: string;
  tempMedioExecucao: number; // em dias
  gargalos: string[];
  status: 'eficiente' | 'critico' | 'atencao';
  eficiencia: number; // 0-100
  ultimaAtualizacao: Date;
}

export interface ProcessoAnalytics {
  totalProcessos: number;
  processosEficientes: number;
  processosAtencao: number;
  processosCriticos: number;
  tempoMedioGeral: number;
  tendenciaGeral: 'melhorando' | 'estavel' | 'piorando';
}

export interface ProcessoBench {
  nome: string;
  melhorTempo: number;
  piorTempo: number;
  tempoMedio: number;
  variacao: number;
}
