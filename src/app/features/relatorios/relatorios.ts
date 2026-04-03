import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RelatorioService } from '../../core/services';
import { RelatorioInteligente, ParametrosGeracao } from '../../core/models';
import { RelatorioHeader } from './components/relatorio-header/relatorio-header';
import { DiagnosticoCard } from './components/diagnostico-card/diagnostico-card';
import { SugestoesLista } from './components/sugestoes-lista/sugestoes-lista';
import { MaturidadeCard } from './components/maturidade-card/maturidade-card';
import { FiltrosRelatorio } from './components/filtros-relatorio/filtros-relatorio';

/**
 * Componente principal do módulo de Relatórios
 * Responsável pela exibição de relatórios inteligentes com análise diagnóstica
 */
@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [
    CommonModule,
    RelatorioHeader,
    DiagnosticoCard,
    SugestoesLista,
    MaturidadeCard,
    FiltrosRelatorio
  ],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Relatorios implements OnInit {
  relatorios$!: Observable<RelatorioInteligente[]>;
  relatorioGerando$: Observable<RelatorioInteligente> | null = null;
  mostraFormulario = signal(false);
  relatorioSelecionado = signal<RelatorioInteligente | null>(null);
  carregando = signal(false);
  erro = signal<string | null>(null);

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.carregarRelatorios();
  }

  /**
   * Carrega lista de relatórios disponíveis
   */
  private carregarRelatorios(): void {
    this.relatorios$ = this.relatorioService.getRelatorios();
  }

  /**
   * Abre modal para gerar novo relatório
   */
  abrirFormularioGeracao(): void {
    this.mostraFormulario.set(true);
  }

  /**
   * Fecha modal de geração
   */
  fecharFormulario(): void {
    this.mostraFormulario.set(false);
  }

  /**
   * Gera novo relatório com parâmetros fornecidos
   */
  gerarNovoRelatorio(params: ParametrosGeracao): void {
    this.carregando.set(true);
    this.erro.set(null);
    this.relatorioGerando$ = this.relatorioService.gerarRelatorio(params);
    
    // Simula subscribe invisível para tratar erros
    this.relatorioGerando$.subscribe({
      next: (relatorio) => {
        this.carregando.set(false);
        this.selecionarRelatorio(relatorio);
        this.carregarRelatorios(); // Atualiza lista
      },
      error: (erro) => {
        this.carregando.set(false);
        this.erro.set(erro.message || 'Erro ao gerar relatório');
      }
    });
  }

  /**
   * Seleciona um relatório para visualização
   */
  selecionarRelatorio(relatorio: RelatorioInteligente): void {
    this.relatorioSelecionado.set(relatorio);
    // Scroll para o topo do painel de relatório
    setTimeout(() => {
      const elemento = document.querySelector('.relatorio-selecionado');
      elemento?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  }

  /**
   * Retorna classe CSS baseada no score de maturidade
   */
  getMaturidadeClasse(score: number): string {
    if (score >= 75) return 'status-positivo';
    if (score >= 60) return 'status-atencao';
    return 'status-critico';
  }

  /**
   * Retorna classe CSS baseada na prioridade
   */
  getPrioridadeClasse(prioridade: string): string {
    const classes: Record<string, string> = {
      'alta': 'status-critico',
      'media': 'status-atencao',
      'baixa': 'status-positivo'
    };
    return classes[prioridade] || '';
  }

  /**
   * Exporta relatório selecionado como PDF
   * TODO: Implementar quando backend for concluído
   */
  exportarPDF(): void {
    if (this.relatorioSelecionado()) {
      console.log('Exportando PDF:', this.relatorioSelecionado());
      // Implementar exportação de PDF
    }
  }

  /**
   * Compartilha relatório via email
   * TODO: Implementar quando backend for concluído
   */
  compartilharEmail(): void {
    if (this.relatorioSelecionado()) {
      console.log('Compartilhando:', this.relatorioSelecionado());
      // Implementar compartilhamento
    }
  }
}
