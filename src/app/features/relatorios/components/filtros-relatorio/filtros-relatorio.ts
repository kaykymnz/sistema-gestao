import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParametrosGeracao } from '../../../../core/models';

/**
 * Componente para capturar parâmetros de geração de relatórios
 */
@Component({
  selector: 'app-filtros-relatorio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="filtros-container" *ngIf="mostrar">
      <div class="overlay" (click)="fechar()"></div>
      <div class="modal">
        <div class="modal-header">
          <h3>Gerar Novo Relatório</h3>
          <button class="btn-fechar" (click)="fechar()">×</button>
        </div>

        <div class="modal-content">
          <p class="instrucoes">Configure os parâmetros para gerar um novo relatório diagnóstico com análise por IA.</p>

          <form (ngSubmit)="gerar()">
            <div class="form-group">
              <label for="dataInicio">Data de Início</label>
              <input 
                type="date" 
                id="dataInicio"
                [(ngModel)]="params.dataInicio"
                name="dataInicio"
                [max]="params.dataFim | date: 'yyyy-MM-dd'"
                required
              >
            </div>

            <div class="form-group">
              <label for="dataFim">Data de Fim</label>
              <input 
                type="date" 
                id="dataFim"
                [(ngModel)]="params.dataFim"
                name="dataFim"
                [min]="params.dataInicio | date: 'yyyy-MM-dd'"
                required
              >
            </div>

            <div class="form-group">
              <label for="filtro">Filtro por Área (opcional)</label>
              <select 
                id="filtro"
                [(ngModel)]="params.filtro"
                name="filtro"
              >
                <option value="">Todas as áreas</option>
                <option value="processos">Processos Administrativos</option>
                <option value="pessoas">Gestão de Pessoas</option>
                <option value="estrategia">Planejamento Estratégico</option>
                <option value="governanca">Governança e Conformidade</option>
                <option value="financeiro">Finanças</option>
              </select>
            </div>

            <div class="form-group checkbox">
              <label>
                <input 
                  type="checkbox" 
                  [(ngModel)]="params.incluirComparativo"
                  name="incluirComparativo"
                >
                Incluir Análise Comparativa com Setor
              </label>
            </div>

            <div class="aviso">
              <span class="icone">ℹ️</span>
              <p>O relatório será processado por IA e pode levar 2-4 minutos para conclusão.</p>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secundario" (click)="fechar()">Cancelar</button>
              <button type="submit" class="btn btn-primário" [disabled]="!formularioValido()">Gerar Relatório</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,
  styleUrl: './filtros-relatorio.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltrosRelatorio {
  @Input() mostrar = false;
  @Output() gerarEvent = new EventEmitter<ParametrosGeracao>();
  @Output() fecharEvent = new EventEmitter<void>();

  params: ParametrosGeracao = {
    dataInicio: this.getData30DiasAtras(),
    dataFim: new Date(),
    incluirComparativo: true
  };

  private getData30DiasAtras(): Date {
    const data = new Date();
    data.setDate(data.getDate() - 30);
    return data;
  }

  formularioValido(): boolean {
    return !!(this.params.dataInicio && 
             this.params.dataFim && 
             this.params.dataInicio <= this.params.dataFim);
  }

  gerar(): void {
    if (this.formularioValido()) {
      this.gerarEvent.emit(this.params);
      this.fechar();
    }
  }

  fechar(): void {
    this.fecharEvent.emit();
  }
}
