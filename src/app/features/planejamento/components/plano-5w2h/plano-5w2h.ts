import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { PlanoAcao5W2H } from '../../../../core/models';

@Component({
  selector: 'app-plano-5w2h',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './plano-5w2h.html',
  styleUrl: './plano-5w2h.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Plano5w2hComponent {
  @Input({ required: true }) planos: PlanoAcao5W2H[] = [];

  trackByPlano(index: number, plano: PlanoAcao5W2H): string {
    return plano.id ?? `${plano.titulo}-${index}`;
  }

  getStatusClasse(status: string): string {
    const classes: Record<string, string> = {
      planejado: 'status-neutro',
      em_andamento: 'status-atencao',
      concluido: 'status-positivo',
      atrasado: 'status-critico',
    };

    return classes[status] ?? 'status-neutro';
  }

  getPrioridadeClasse(prioridade?: string): string {
    const classes: Record<string, string> = {
      baixa: 'status-positivo',
      media: 'status-atencao',
      alta: 'status-critico',
    };

    return prioridade ? (classes[prioridade] ?? 'status-neutro') : 'status-neutro';
  }

  formatarPrazo(valor?: string | Date): string {
    if (!valor) {
      return 'Não definido';
    }

    const data = new Date(valor);
    return Number.isNaN(data.getTime()) ? String(valor) : data.toLocaleDateString('pt-BR');
  }

  getMoeda(moeda?: string): string {
    return moeda || 'BRL';
  }

  formatarTexto(valor?: string): string {
    if (!valor) {
      return 'Não informado';
    }

    return valor
      .split('_')
      .filter(Boolean)
      .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1))
      .join(' ');
  }
}
