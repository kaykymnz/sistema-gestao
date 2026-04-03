import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelatorioInteligente } from '../../../../core/models';

/**
 * Componente responsável pela exibição do cabeçalho do relatório
 * Mostra informações principais: título, tipo, data, confiabilidade
 */
@Component({
  selector: 'app-relatorio-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relatorio-header">
      <div class="header-content">
        <div class="info-principal">
          <h2 class="titulo">{{ relatorio.titulo }}</h2>
          <p class="descricao">{{ relatorio.descricao }}</p>
        </div>

        <div class="meta-info">
          <div class="meta-item">
            <span class="label">Tipo:</span>
            <span class="badge" [ngClass]="'tipo-' + relatorio.tipo">
              {{ getTipoLabel(relatorio.tipo) }}
            </span>
          </div>

          <div class="meta-item">
            <span class="label">Confiabilidade:</span>
            <div class="confiabilidade">
              <div class="barra-confiabilidade">
                <div class="barra-preenchida" [style.width.%]="relatorio.confiabilidade"></div>
              </div>
              <span class="valor">{{ relatorio.confiabilidade }}%</span>
            </div>
          </div>

          <div class="meta-item">
            <span class="label">Gerado em:</span>
            <span class="data">{{ relatorio.dataCriacao | date: 'dd/MM/yyyy HH:mm' }}</span>
          </div>

          <div class="meta-item" *ngIf="relatorio.dataCriacao !== relatorio.dataUltimaAtualizacao">
            <span class="label">Atualizado em:</span>
            <span class="data">{{ relatorio.dataUltimaAtualizacao | date: 'dd/MM/yyyy HH:mm' }}</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './relatorio-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatorioHeader {
  @Input() relatorio!: RelatorioInteligente;

  getTipoLabel(tipo: string): string {
    const labels: Record<string, string> = {
      'diagnostico': 'Diagnóstico',
      'analise': 'Análise',
      'predicao': 'Predição'
    };
    return labels[tipo] || tipo;
  }
}
