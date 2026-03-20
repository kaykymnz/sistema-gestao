import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RelatorioService } from '../../core/services';
import { RelatorioInteligente, ParametrosGeracao } from '../../core/models';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Relatorios implements OnInit {
  relatorios$!: Observable<RelatorioInteligente[]>;
  relatorioGerando$: Observable<RelatorioInteligente> | null = null;
  mostraFormulario = false;

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.relatorios$ = this.relatorioService.getRelatorios();
  }

  gerarRelatorio(): void {
    const params: ParametrosGeracao = {
      dataInicio: new Date(new Date().setDate(new Date().getDate() - 30)),
      dataFim: new Date(),
      incluirComparativo: true
    };
    this.relatorioGerando$ = this.relatorioService.gerarRelatorio(params);
  }

  getMaturidadeClasse(score: number): string {
    if (score >= 85) return 'status-positivo';
    if (score >= 70) return 'status-neutro';
    return 'status-critico';
  }

  getPrioridadeClasse(prioridade: string): string {
    const classes: Record<string, string> = {
      'alta': 'status-critico',
      'media': 'status-atencao',
      'baixa': 'status-positivo'
    };
    return classes[prioridade] || '';
  }
}
