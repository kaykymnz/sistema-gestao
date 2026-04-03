import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, delay, tap } from 'rxjs/operators';
import { RelatorioInteligente, ParametrosGeracao } from '../models';
import { RELATORIOS_MOCK_DATA, gerarRelatorioMock } from './relatorio.mock';

/**
 * Serviço responsável pela geração e recuperação de relatórios inteligentes
 * Implementa padrões de cache, validação e tratamento de erro
 */
@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  private readonly apiUrl = 'http://localhost:8080/api/relatorios';
  private readonly apiUrlGerar = 'http://localhost:8080/api/relatorios/gerar';
  private readonly usarMockData = false; // Flag para ambiente de desenvolvimento
  private cache: RelatorioInteligente[] | null = null;

  constructor(private http: HttpClient) {}

  /**
   * Gera novo relatório com base em parâmetros fornecidos
   * Simula processamento por IA
   */
  gerarRelatorio(params: ParametrosGeracao): Observable<RelatorioInteligente> {
    if (!params) {
      return throwError(() => new Error('Parâmetros de geração de relatório são obrigatórios'));
    }

    this.validarParametrosGeracao(params);

    if (this.usarMockData) {
      // Simula delay de processamento (2-4 segundos)
      const delayMs = Math.floor(Math.random() * 2000) + 2000;
      return of(gerarRelatorioMock(params)).pipe(
        delay(delayMs),
        tap(relatorio => this.validarRelatorio(relatorio))
      );
    }

    // Requisição real (quando backend estiver implementado)
    return this.http.post<RelatorioInteligente>(this.apiUrlGerar, params).pipe(
      map(relatorio => this.validarRelatorio(relatorio)),
      catchError(erro => this.tratarErro('Erro ao gerar relatório', erro))
    );
  }

  /**
   * Retorna lista de relatórios gerados
   */
  getRelatorios(): Observable<RelatorioInteligente[]> {
    if (this.usarMockData) {
      // Retorna mock data com validação
      return of(RELATORIOS_MOCK_DATA).pipe(
        map(relatorios => relatorios.map(r => this.validarRelatorio(r)))
      );
    }

    // Requisição real com cache
    if (this.cache) {
      return of(this.cache);
    }

    return this.http.get<RelatorioInteligente[]>(this.apiUrl).pipe(
      map(relatorios => {
        this.cache = relatorios;
        return relatorios.map(r => this.validarRelatorio(r));
      }),
      catchError(erro => this.tratarErro('Erro ao carregar relatórios', erro))
    );
  }

  /**
   * Retorna um relatório específico por ID
   */
  getRelatorioPorId(id: string): Observable<RelatorioInteligente> {
    if (!id || id.trim().length === 0) {
      return throwError(() => new Error('ID do relatório é obrigatório'));
    }

    if (this.usarMockData) {
      const relatorio = RELATORIOS_MOCK_DATA.find(r => r.id === id);
      if (!relatorio) {
        return throwError(() => new Error(`Relatório com ID ${id} não encontrado`));
      }
      return of(relatorio);
    }

    return this.http.get<RelatorioInteligente>(`${this.apiUrl}/${id}`).pipe(
      map(relatorio => this.validarRelatorio(relatorio)),
      catchError(erro => this.tratarErro(`Erro ao carregar relatório ${id}`, erro))
    );
  }

  /**
   * Limpa o cache de relatórios
   */
  limparCache(): void {
    this.cache = null;
  }

  /**
   * Valida estrutura do relatório
   */
  private validarRelatorio(relatorio: RelatorioInteligente): RelatorioInteligente {
    if (!relatorio.id || !relatorio.titulo || !relatorio.diagnostico) {
      throw new Error('Relatório com estrutura inválida');
    }

    // Garante datas como objetos Date
    if (!(relatorio.dataCriacao instanceof Date)) {
      relatorio.dataCriacao = new Date(relatorio.dataCriacao);
    }
    if (!(relatorio.dataUltimaAtualizacao instanceof Date)) {
      relatorio.dataUltimaAtualizacao = new Date(relatorio.dataUltimaAtualizacao);
    }

    // Valida score de confiabilidade (0-100)
    if (relatorio.confiabilidade < 0 || relatorio.confiabilidade > 100) {
      relatorio.confiabilidade = Math.max(0, Math.min(100, relatorio.confiabilidade));
    }

    // Valida score de maturidade (0-100)
    if (relatorio.classificacaoMaturidade.score < 0 || relatorio.classificacaoMaturidade.score > 100) {
      relatorio.classificacaoMaturidade.score = Math.max(0, Math.min(100, relatorio.classificacaoMaturidade.score));
    }

    return relatorio;
  }

  /**
   * Valida parâmetros de geração
   */
  private validarParametrosGeracao(params: ParametrosGeracao): void {
    if (!params.dataFim || !params.dataInicio) {
      throw new Error('Datas de início e fim são obrigatórias');
    }

    if (params.dataInicio > params.dataFim) {
      throw new Error('Data de início não pode ser maior que data de fim');
    }
  }

  /**
   * Trata erros de forma centralizada
   */
  private tratarErro(contexto: string, erro: any): Observable<never> {
    const mensagem = erro?.message || 'Erro desconhecido';
    console.error(`[RelatorioService] ${contexto}:`, erro);
    return throwError(() => new Error(`${contexto}: ${mensagem}`));
  }
}
