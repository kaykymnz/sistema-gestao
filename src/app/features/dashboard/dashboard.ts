import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { DashboardService } from '../../core/services';
import { DashboardOverview } from '../../core/models';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard implements OnInit {
  overview$!: Observable<DashboardOverview>;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.overview$ = this.dashboardService.getOverview();
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
