export interface PessoasIndicadores {
  totalDocentes: number;
  totalAdministrativos: number;
  taxaTurnover: number;
  mediaDesempenho: number;
  mediaEngajamento: number;
  evolucaoMensual: DesempenhoMensual[];
  distribuicaoAvaliacao: DistribuicaoAvaliacao;
}

export interface DesempenhoMensual {
  mes: string;
  desempenho: number;
  engajamento: number;
  turnover: number;
}

export interface DistribuicaoAvaliacao {
  excelente: number;
  otimo: number;
  bom: number;
  atencao: number;
  critico: number;
}

export interface Pessoa {
  id: string;
  nome: string;
  tipo: 'docente' | 'administrativo';
  departamento: string;
  desempenho: number; // 0-100
  engajamento: number; // 0-100
  avaliacao: 'excelente' | 'otimo' | 'bom' | 'atencao' | 'critico';
  dataAdmissao: Date;
  ultimaAvaliacao: Date;
}

export interface AnaliseDesempenho {
  periodo: string;
  mediaGeral: number;
  melhoresDesempenh: Pessoa[];
  atencao: Pessoa[];
  tendencia: 'crescente' | 'estavel' | 'decrescente';
}
