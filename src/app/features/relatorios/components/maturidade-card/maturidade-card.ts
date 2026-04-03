import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassificacaoMaturidade } from '../../../../core/models';

/**
 * Componente para exibição da classificação de maturidade organizacional
 * Mostra score atual, nível, comparativo e trajetória
 */
@Component({
  selector: 'app-maturidade-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="maturidade-container">
      <h3 class="titulo">Índice de Maturidade Organizacional</h3>

      <div class="content">
        <!-- Score e Nível -->
        <div class="score-box">
          <div class="score-visual">
            <div class="circulo-score" [ngClass]="'nivel-' + maturidade.niveau">
              <span class="numero">{{ maturidade.score }}</span>
              <span class="unidade">/100</span>
            </div>
          </div>

          <div class="info-score">
            <div class="nivel">
              <span class="label">Nível de Maturidade:</span>
              <span class="badge" [ngClass]="'nivel-badge-' + maturidade.niveau">
                {{ getNivelLabel(maturidade.niveau) }}
              </span>
            </div>

            <div class="comparativo">
              <span class="label">Comparativo com Setor:</span>
              <div class="comparacao">
                <span class="seu-score">Você: {{ maturidade.score }}/100</span>
                <span class="setor-score">Setor: {{ maturidade.comparativoSetor }}/100</span>
                <span class="diferenca" [ngClass]="maturidade.score >= maturidade.comparativoSetor ? 'acima' : 'abaixo'">
                  {{ maturidade.score >= maturidade.comparativoSetor ? '+' : '' }}
                  {{ maturidade.score - maturidade.comparativoSetor }} pontos
                </span>
              </div>
            </div>

            <div class="descricao">
              <p>{{ getNivelDescricao(maturidade.niveau) }}</p>
            </div>
          </div>
        </div>

        <!-- Trajetória de Melhoria -->
        <div class="trajetoria">
          <h4 class="titulo-secao">Trajetória de Melhoria (12 meses)</h4>

          <div class="visao-geral">
            <div class="ponto-atual">
              <span class="label">Score Atual</span>
              <span class="valor">{{ maturidade.trajetoriaMelhoria.scoreAtual }}/100</span>
              <span class="data">{{ maturidade.trajetoriaMelhoria.dataAtual | date: 'dd/MMM/yy' }}</span>
            </div>

            <div class="seta">→</div>

            <div class="ponto-projetado">
              <span class="label">Projeção em 12 Meses</span>
              <span class="valor">{{ maturidade.trajetoriaMelhoria.scoreProjetado12Meses }}/100</span>
              <span class="crescimento">
                +{{ maturidade.trajetoriaMelhoria.scoreProjetado12Meses - maturidade.trajetoriaMelhoria.scoreAtual }} pontos
              </span>
            </div>
          </div>

          <div class="barra-progresso">
            <div class="preenchimento" 
                 [style.width.%]="(maturidade.trajetoriaMelhoria.scoreProjetado12Meses / 100) * 100">
            </div>
          </div>

          <div class="caminho">
            <h5 class="caminho-titulo">Plano de Ação para Maturidade:</h5>
            <ol class="lista-caminho">
              <li *ngFor="let passo of maturidade.trajetoriaMelhoria.caminhoMelhor">
                {{ passo }}
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './maturidade-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MaturidadeCard {
  @Input() maturidade!: ClassificacaoMaturidade;

  getNivelLabel(nivel: string): string {
    const labels: Record<string, string> = {
      'iniciante': 'Iniciante',
      'em_desenvolvimento': 'Em Desenvolvimento',
      'operacional': 'Operacional',
      'otimizado': 'Otimizado',
      'lider_industria': 'Líder de Indústria'
    };
    return labels[nivel] || nivel;
  }

  getNivelDescricao(nivel: string): string {
    const descricoes: Record<string, string> = {
      'iniciante': 'Organização com processos informais e baixo grau de padronização. Decisões baseadas em percepção, não em dados estruturados.',
      'em_desenvolvimento': 'Organização em transição com processos parcialmente padronizados. Começam a utilizar dados para algumas decisões estratégicas.',
      'operacional': 'Organização com processos bem estruturados e integrados. Decisões apoiadas por dados consolidados e indicadores.',
      'otimizado': 'Organização com processos otimizados e contínuo aprimoramento. Cultura de inovação e agilidade estabelecida.',
      'lider_industria': 'Organização reconhecida como referência no setor. Excelência em processes, people e estratégia.'
    };
    return descricoes[nivel] || 'Nível não identificado';
  }
}
