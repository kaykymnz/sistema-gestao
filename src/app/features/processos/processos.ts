import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ProcessoService } from '../../core/services';
import { Processo, ProcessoAnalytics } from '../../core/models';

@Component({
  selector: 'app-processos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './processos.html',
  styleUrl: './processos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Processos implements OnInit {
  processos$!: Observable<Processo[]>;
  analytics$!: Observable<ProcessoAnalytics>;

  constructor(private processoService: ProcessoService) {}

  ngOnInit(): void {
    this.analytics$ = this.processoService.getAnalytics();
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
