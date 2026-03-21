import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProjetoPlanejamento } from '../../../../core/models';

@Component({
  selector: 'app-plano-5w2h',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './plano-5w2h.html',
  styleUrl: './plano-5w2h.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Plano5w2hComponent {
  @Input({ required: true }) projetos: ProjetoPlanejamento[] = [];

  trackByProjeto(index: number, projeto: ProjetoPlanejamento): number | string {
    return projeto.id ?? `${projeto.titulo}-${index}`;
  }

  getStatusClasse(status?: string): string {
    const normalizado = this.normalizarTexto(status);
    const classes: Record<string, string> = {
      planejado: 'status-neutro',
      em_andamento: 'status-atencao',
      concluido: 'status-positivo',
      atrasado: 'status-critico',
    };

    return classes[normalizado] ?? 'status-neutro';
  }

  getPrioridadeClasse(prioridade?: string): string {
    const normalizado = this.normalizarTexto(prioridade);
    const classes: Record<string, string> = {
      baixa: 'status-positivo',
      media: 'status-atencao',
      alta: 'status-critico',
    };

    return classes[normalizado] ?? 'status-neutro';
  }

  formatarData(valor?: string | Date): string {
    if (!valor) {
      return 'Não definido';
    }

    const data = new Date(valor);
    return Number.isNaN(data.getTime()) ? String(valor) : data.toLocaleDateString('pt-BR');
  }

  formatarTexto(valor?: string): string {
    if (!valor) {
      return 'Não informado';
    }

    return valor
      .split(/[_\s]+/)
      .filter(Boolean)
      .map((parte) => parte.charAt(0).toUpperCase() + parte.slice(1).toLowerCase())
      .join(' ');
  }

  private normalizarTexto(valor?: string): string {
    return (valor ?? '')
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_');
  }
}
