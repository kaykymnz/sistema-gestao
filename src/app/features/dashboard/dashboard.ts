import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { DashboardService } from '../../core/services';
import { DashboardOverview } from '../../core/models';
import { DashboardSkeletonComponent } from '../../shared/components/skeletons/dashboard-skeleton';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, DashboardSkeletonComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements OnInit {
  overview$!: Observable<DashboardOverview>;
  loading$ = new BehaviorSubject(true);

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.overview$ = this.dashboardService.getOverview().pipe(
      tap(() => this.loading$.next(false))
    );
  }

  getMaturidadeClasse(niveau: string): string {
    const classMap: Record<string, string> = {
      'iniciante': 'status-critico',
      'em_desenvolvimento': 'status-atencao',
      'operacional': 'status-neutro',
      'otimizado': 'status-positivo'
    };
    return classMap[niveau] || 'status-neutro';
  }

  getTendenciaIcone(tendencia: string): string {
    const icons: Record<string, string> = {
      'crescente': '📈',
      'estavel': '➡️',
      'decrescente': '📉'
    };
    return icons[tendencia] || '';
  }

  getStatusClasse(status: string): string {
    const classMap: Record<string, string> = {
      'em_dia': 'status-positivo',
      'atencao': 'status-atencao',
      'critico': 'status-critico'
    };
    return classMap[status] || '';
  }
}
