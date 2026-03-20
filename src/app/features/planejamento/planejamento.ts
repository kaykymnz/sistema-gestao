import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { PlanejamentoService } from '../../core/services';
import { PlanejamentoEstrategico, MatrizRisco } from '../../core/models';

@Component({
  selector: 'app-planejamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './planejamento.html',
  styleUrl: './planejamento.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Planejamento implements OnInit {
  planejamento$!: Observable<PlanejamentoEstrategico>;
  riscos$!: Observable<MatrizRisco[]>;

  constructor(private planejamentoService: PlanejamentoService) {}

  ngOnInit(): void {
    this.planejamento$ = this.planejamentoService.getPlanejamento();
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
