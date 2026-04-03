import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SugestoMelhoria } from '../../../../core/models';

/**
 * Componente para exibição da lista de sugestões de melhoria com prioridade, impacto e ROI
 */
@Component({
  selector: 'app-sugestoes-lista',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sugestoes-container">
      <h3 class="titulo">Sugestões de Melhoria</h3>
      <p class="total">Total: {{ sugestoes.length }} recomendações</p>

      <div class="sugestoes-lista">
        <div class="sugestao-card" *ngFor="let sugestao of sugestoes" 
             [ngClass]="'prioridade-' + sugestao.prioridade">
          
          <div class="card-header">
            <div class="info-principal">
              <h4 class="sugestao-titulo">{{ sugestao.titulo }}</h4>
              <p class="sugestao-descricao">{{ sugestao.descricao }}</p>
            </div>

            <div class="badges">
              <span class="badge prioridade" [ngClass]="'prio-' + sugestao.prioridade">
                {{ getPrioridadeLabel(sugestao.prioridade) }}
              </span>
              <span class="badge impacto" [ngClass]="'imp-' + sugestao.impactoEstimado">
                {{ getImpactoLabel(sugestao.impactoEstimado) }}
              </span>
              <span class="badge status" 
                    *ngIf="sugestao.status"
                    [ngClass]="'sts-' + sugestao.status">
                {{ getStatusLabel(sugestao.status) }}
              </span>
            </div>
          </div>

          <div class="card-metrics">
            <div class="metrica">
              <span class="label">Esforço</span>
              <div class="barra">
                <div class="preenchimento" [style.width.%]="sugestao.esforco"></div>
              </div>
              <span class="valor">{{ sugestao.esforco }}%</span>
            </div>

            <div class="metrica">
              <span class="label">ROI Estimado</span>
              <div class="barra">
                <div class="preenchimento" [style.width.%]="sugestao.retornoOnInvestimento"></div>
              </div>
              <span class="valor">{{ sugestao.retornoOnInvestimento }}%</span>
            </div>

            <div class="metrica">
              <span class="label">Dias para Implementar</span>
              <span class="valor-dias">{{ sugestao.diasParaImplementacao }} dias</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="responsavel" *ngIf="sugestao.responsavel">
              <span class="label">Responsável:</span>
              <span class="valor">{{ sugestao.responsavel }}</span>
            </div>
            <div class="acao" *ngIf="sugestao.status === 'proposta' || sugestao.status === 'em_analise'">
              <button class="btn-detalhe">Ver Detalhes</button>
            </div>
          </div>
        </div>

        <div class="vazio" *ngIf="sugestoes.length === 0">
          <p>Nenhuma sugestão disponível</p>
        </div>
      </div>
    </div>
  `,
  styleUrl: './sugestoes-lista.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SugestoesLista {
  @Input() sugestoes: SugestoMelhoria[] = [];

  getPrioridadeLabel(prioridade: string): string {
    const labels: Record<string, string> = {
      'alta': 'Alta Prioridade',
      'media': 'Média Prioridade',
      'baixa': 'Baixa Prioridade'
    };
    return labels[prioridade] || prioridade;
  }

  getImpactoLabel(impacto: string): string {
    const labels: Record<string, string> = {
      'transformador': 'Transformador',
      'significativo': 'Significativo',
      'moderado': 'Moderado'
    };
    return labels[impacto] || impacto;
  }

  getStatusLabel(status: string): string {
    const labels: Record<string, string> = {
      'proposta': 'Proposta',
      'em_analise': 'Em Análise',
      'aprovada': 'Aprovada',
      'implementando': 'Implementando',
      'concluida': 'Concluída'
    };
    return labels[status] || status;
  }
}
