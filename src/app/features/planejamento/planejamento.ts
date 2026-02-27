import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PlanejamentoService } from '../../core/services';
import { PlanejamentoEstrategico, MatrizRisco } from '../../core/models';
import { PlanejamentoSkeletonComponent } from '../../shared/components/skeletons/planejamento-skeleton';

@Component({
  selector: 'app-planejamento',
  standalone: true,
  imports: [CommonModule, PlanejamentoSkeletonComponent],
  templateUrl: './planejamento.html',
  styleUrl: './planejamento.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Planejamento implements OnInit {
  planejamento$!: Observable<PlanejamentoEstrategico>;
  riscos$!: Observable<MatrizRisco[]>;
  loading$ = new BehaviorSubject(true);

  constructor(private planejamentoService: PlanejamentoService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.planejamento$ = this.planejamentoService.getPlanejamento().pipe(
      tap(() => this.loading$.next(false))
    );
    this.riscos$ = this.planejamentoService.getRiscos();
  }

  getStatusClasse(status: string): string {
    const classes: Record<string, string> = {
      'nao_iniciado': 'status-neutro',
      'em_progresso': 'status-atencao',
      'concluido': 'status-positivo',
      'em_atraso': 'status-critico'
    };
    return classes[status] || '';
  }

  getRiscoClasse(nivel: string): string {
    const classes: Record<string, string> = {
      'baixo': 'status-positivo',
      'medio': 'status-neutro',
      'alto': 'status-atencao',
      'critico': 'status-critico'
    };
    return classes[nivel] || '';
  }
}
