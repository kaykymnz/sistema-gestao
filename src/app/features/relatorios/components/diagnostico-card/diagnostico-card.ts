import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Diagnostico } from '../../../../core/models';

/**
 * Componente para exibição do diagnóstico com achados, pontos fortes e oportunidades
 */
@Component({
  selector: 'app-diagnostico-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="diagnostico-card">
      <h3 class="titulo">Diagnóstico</h3>

      <div class="resumo-executivo">
        <p class="subtitulo">Resumo Executivo</p>
        <p class="texto">{{ diagnostico.resumoExecutivo }}</p>
      </div>

      <div class="secoes">
        <!-- Achados -->
        <div class="secao achados">
          <h4 class="secao-titulo">
            <span class="icone">⚠️</span>
            Achados Críticos ({{ diagnostico.achados.length }})
          </h4>
          <div class="achados-lista">
            <div class="achado-item" *ngFor="let achado of diagnostico.achados">
              <div class="achado-header">
                <span class="achado-titulo">{{ achado.titulo }}</span>
                <span class="impacto" [ngClass]="'impacto-' + achado.impacto">
                  {{ getImpactoLabel(achado.impacto) }}
                </span>
              </div>
              <p class="achado-descricao">{{ achado.descricao }}</p>
              <div class="achado-footer">
                <span class="categoria">{{ achado.categoria }}</span>
                <span class="evidencia">Evidência: {{ achado.evidencia }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Pontos Fortes -->
        <div class="secao pontos-fortes">
          <h4 class="secao-titulo">
            <span class="icone">✅</span>
            Pontos Fortes ({{ diagnostico.pontosFortesIdentificados.length }})
          </h4>
          <ul class="lista-pontos">
            <li *ngFor="let ponto of diagnostico.pontosFortesIdentificados">
              <span class="circulo"></span>
              {{ ponto }}
            </li>
          </ul>
        </div>

        <!-- Áreas Críticas -->
        <div class="secao areas-criticas">
          <h4 class="secao-titulo">
            <span class="icone">🔴</span>
            Áreas Críticas ({{ diagnostico.areaCritica.length }})
          </h4>
          <div class="tags">
            <span class="tag" *ngFor="let area of diagnostico.areaCritica">
              {{ area }}
            </span>
          </div>
        </div>

        <!-- Oportunidades -->
        <div class="secao oportunidades">
          <h4 class="secao-titulo">
            <span class="icone">💡</span>
            Oportunidades Identificadas ({{ diagnostico.oportunidadesIdentificadas.length }})
          </h4>
          <ul class="lista-pontos">
            <li *ngFor="let oportunidade of diagnostico.oportunidadesIdentificadas">
              <span class="circulo"></span>
              {{ oportunidade }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrl: './diagnostico-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiagnosticoCard {
  @Input() diagnostico!: Diagnostico;

  getImpactoLabel(impacto: string): string {
    const labels: Record<string, string> = {
      'alto': 'Impacto Alto',
      'medio': 'Impacto Médio',
      'baixo': 'Impacto Baixo'
    };
    return labels[impacto] || impacto;
  }
}
