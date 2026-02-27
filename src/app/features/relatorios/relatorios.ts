import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { RelatorioService } from '../../core/services';
import { RelatorioInteligente, ParametrosGeracao } from '../../core/models';
import { RelatoriosSkeletonComponent } from '../../shared/components/skeletons/relatorios-skeleton';

@Component({
  selector: 'app-relatorios',
  standalone: true,
  imports: [CommonModule, RelatoriosSkeletonComponent],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Relatorios implements OnInit {
  relatorios$!: Observable<RelatorioInteligente[]>;
  relatorioGerando$: Observable<RelatorioInteligente> | null = null;
  mostraFormulario = false;
  loading$ = new BehaviorSubject(true);

  constructor(private relatorioService: RelatorioService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.relatorios$ = this.relatorioService.getRelatorios().pipe(
      tap(() => this.loading$.next(false))
    );
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
