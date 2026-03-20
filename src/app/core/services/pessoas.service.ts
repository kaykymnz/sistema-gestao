import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { PessoasIndicadores, Pessoa, AnaliseDesempenho, FuncionarioResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {
  private apiUrl = 'http://localhost:8080/api/funcionarios';
  private pessoasCache$ = new BehaviorSubject<Pessoa[]>([]);

  constructor(private http: HttpClient) {}

  /**
   * Mapeia FuncionarioResponse para o modelo Pessoa
   */
  private mapFuncionarioToPessoa(funcionario: FuncionarioResponse): Pessoa {
    // Mapeamento de função para tipo (docente ou administrativo)
    const tipo = this.determinaTipo(funcionario.funcao);
    
    // Gera valores de desempenho e engajamento de forma determinística
    const desempenho = this.calcularDesempenho(funcionario);
    const engajamento = this.calcularEngajamento(funcionario);
    
    return {
      id: funcionario.id.toString(),
      nome: funcionario.nome,
      tipo,
      departamento: funcionario.departamento,
      desempenho,
      engajamento,
      avaliacao: this.calcularAvaliacao(desempenho),
      dataAdmissao: new Date(funcionario.dataAdmissao),
      ultimaAvaliacao: new Date(funcionario.dataUltimaPromocao)
    };
  }

  /**
   * Determina o tipo de funcionário baseado na função
   */
  private determinaTipo(funcao: string): 'docente' | 'administrativo' {
    const funcaoLower = funcao.toLowerCase();
    const docentes = ['professor', 'professora', 'coordenadora acadêmica', 'coordenador acadêmico', 'reitor', 'diretor'];
    
    return docentes.some(d => funcaoLower.includes(d)) ? 'docente' : 'administrativo';
  }

  /**
   * Calcula o desempenho baseado na antiguidade e promoção
   */
  private calcularDesempenho(funcionario: FuncionarioResponse): number {
    const admissao = new Date(funcionario.dataAdmissao);
    const ultimaPromocao = new Date(funcionario.dataUltimaPromocao);
    const hoje = new Date();
    
    // Anos de serviço
    const anosServico = (hoje.getTime() - admissao.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
    
    // Tempo desde última promoção (em anos)
    const tempoPromocao = (hoje.getTime() - ultimaPromocao.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
    
    // Base: 50% da antiguidade (máx 50 pontos)
    let desempenho = Math.min(anosServico * 4, 50);
    
    // Bônus: 50 pontos se teve promoção recente (últimos 2 anos)
    if (tempoPromocao < 2) {
      desempenho += 50;
    } else {
      // Redução progressiva se passou muito tempo sem promoção
      desempenho += Math.max(20 - (tempoPromocao * 5), 5);
    }
    
    return Math.min(Math.round(desempenho), 100);
  }

  /**
   * Calcula engajamento baseado no tempo de serviço
   */
  private calcularEngajamento(funcionario: FuncionarioResponse): number {
    const admissao = new Date(funcionario.dataAdmissao);
    const hoje = new Date();
    
    const anosServico = (hoje.getTime() - admissao.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
    
    // Engajamento começa alto e decresce levemente com os anos
    let engajamento = 85 - (anosServico * 2.5);
    
    return Math.min(Math.max(Math.round(engajamento), 30), 100);
  }

  /**
   * Calcula a avaliação baseada no desempenho
   */
  private calcularAvaliacao(desempenho: number): 'excelente' | 'otimo' | 'bom' | 'atencao' | 'critico' {
    if (desempenho >= 90) return 'excelente';
    if (desempenho >= 80) return 'otimo';
    if (desempenho >= 65) return 'bom';
    if (desempenho >= 50) return 'atencao';
    return 'critico';
  }

  /**
   * Retorna a lista de pessoas do endpoint
   */
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => {
        // Se a resposta é um objeto com propriedade 'funcionarios', extrai o array
        const funcionarios = Array.isArray(response) ? response : (response?.funcionarios || []);
        return funcionarios.map((f: FuncionarioResponse) => this.mapFuncionarioToPessoa(f));
      }),
      tap(pessoas => this.pessoasCache$.next(pessoas)),
      catchError(error => {
        console.error('Erro ao buscar funcionários:', error);
        return of([]);
      })
    );
  }

  /**
   * Gera indicadores baseado nos dados reais
   */
  getIndicadores(): Observable<PessoasIndicadores> {
    return this.getPessoas().pipe(
      map(pessoas => this.gerarIndicadores(pessoas))
    );
  }

  /**
   * Calcula os indicadores a partir da lista de pessoas
   */
  private gerarIndicadores(pessoas: Pessoa[]): PessoasIndicadores {
    const totalDocentes = pessoas.filter(p => p.tipo === 'docente').length;
    const totalAdministrativos = pessoas.filter(p => p.tipo === 'administrativo').length;
    
    const mediaDesempenho = pessoas.length > 0
      ? Math.round(pessoas.reduce((sum, p) => sum + p.desempenho, 0) / pessoas.length)
      : 0;
    
    const mediaEngajamento = pessoas.length > 0
      ? Math.round(pessoas.reduce((sum, p) => sum + p.engajamento, 0) / pessoas.length)
      : 0;

    // Calcula distribuição de avaliações
    const distribuicaoAvaliacao = {
      excelente: pessoas.filter(p => p.avaliacao === 'excelente').length,
      otimo: pessoas.filter(p => p.avaliacao === 'otimo').length,
      bom: pessoas.filter(p => p.avaliacao === 'bom').length,
      atencao: pessoas.filter(p => p.avaliacao === 'atencao').length,
      critico: pessoas.filter(p => p.avaliacao === 'critico').length
    };

    // Calcula taxa de turnover simulada (baseada em críticos)
    const taxaTurnover = Math.round((distribuicaoAvaliacao.critico / pessoas.length) * 100 * 10) / 10;

    // Evolução mensal (simula últimos 3 meses)
    const evolucaoMensual = [
      { mes: 'Dezembro', desempenho: Math.round(mediaDesempenho * 0.92), engajamento: Math.round(mediaEngajamento * 0.93), turnover: taxaTurnover * 1.2 },
      { mes: 'Janeiro', desempenho: Math.round(mediaDesempenho * 0.97), engajamento: Math.round(mediaEngajamento * 0.96), turnover: taxaTurnover * 1.1 },
      { mes: 'Fevereiro', desempenho: mediaDesempenho, engajamento: mediaEngajamento, turnover: taxaTurnover }
    ];

    return {
      totalDocentes,
      totalAdministrativos,
      taxaTurnover,
      mediaDesempenho,
      mediaEngajamento,
      evolucaoMensual,
      distribuicaoAvaliacao
    };
  }

  getAnaliseDesempenho(): Observable<AnaliseDesempenho> {
    return this.getPessoas().pipe(
      map(pessoas => {
        // Ordena por desempenho para encontrar melhores e com atenção
        const pessoasOrdenadas = [...pessoas].sort((a, b) => b.desempenho - a.desempenho);
        
        const melhoresDesempenh = pessoasOrdenadas.slice(0, 5);
        const atencao = pessoasOrdenadas.filter(p => p.avaliacao === 'atencao' || p.avaliacao === 'critico');

        return {
          periodo: 'Janeiro a Fevereiro 2026',
          mediaGeral: Math.round(pessoas.reduce((sum, p) => sum + p.desempenho, 0) / pessoas.length),
          melhoresDesempenh,
          atencao,
          tendencia: 'crescente'
        };
      })
    );
  }
}
