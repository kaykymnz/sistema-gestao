import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProcessoService } from '../../core/services';
import { Processo, ProcessoAnalytics } from '../../core/models';
import { ProcessosSkeletonComponent } from '../../shared/components/skeletons/processos-skeleton';

@Component({
  selector: 'app-processos',
  standalone: true,
  imports: [CommonModule, ProcessosSkeletonComponent],
  templateUrl: './processos.html',
  styleUrl: './processos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Processos implements OnInit {
  processos$!: Observable<Processo[]>;
  analytics$!: Observable<ProcessoAnalytics>;
  loading$ = new BehaviorSubject(true);

  constructor(private processoService: ProcessoService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.analytics$ = this.processoService.getAnalytics().pipe(
      tap(() => this.loading$.next(false))
    );
    this.processos$ = this.processoService.getProcessos();
  }

  getStatusBadge(status: string): string {
    return status === 'eficiente' ? 'positive' : status === 'atencao' ? 'caution' : 'critical';
  }

  getEficienciaClasse(eficiencia: number): string {
    if (eficiencia >= 80) return 'status-positivo';
    if (eficiencia >= 60) return 'status-neutro';
    return 'status-critico';
  }
}
