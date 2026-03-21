import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plano5w2hComponent } from './components/plano-5w2h/plano-5w2h';
import { Observable } from 'rxjs';
import { PlanejamentoService } from '../../core/services';
import { PlanejamentoEstrategico, MatrizRisco, ProjetoPlanejamento } from '../../core/models';

@Component({
  selector: 'app-planejamento',
  standalone: true,
  imports: [CommonModule, Plano5w2hComponent],
  templateUrl: './planejamento.html',
  styleUrl: './planejamento.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Planejamento implements OnInit {
  planejamento$!: Observable<PlanejamentoEstrategico>;
  riscos$!: Observable<MatrizRisco[]>;
  projetosPlanejamento$!: Observable<ProjetoPlanejamento[]>;

  constructor(private planejamentoService: PlanejamentoService) {}

  ngOnInit(): void {
    this.planejamento$ = this.planejamentoService.getPlanejamento();
    this.riscos$ = this.planejamentoService.getRiscos();
    this.projetosPlanejamento$ = this.planejamentoService.getProjetosPlanejamento();
  }

  getStatusClasse(status: string): string {
    const classes: Record<string, string> = {
      nao_iniciado: 'status-neutro',
      em_progresso: 'status-atencao',
      concluido: 'status-positivo',
      em_atraso: 'status-critico',
    };
    return classes[status] || '';
  }

  getRiscoClasse(nivel: string): string {
    const classes: Record<string, string> = {
      baixo: 'status-positivo',
      medio: 'status-neutro',
      alto: 'status-atencao',
      critico: 'status-critico',
    };
    return classes[nivel] || '';
  }
}
