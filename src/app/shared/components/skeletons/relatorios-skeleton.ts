import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorios-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relatorios-skeleton">
      <div class="page-header">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-subtitle"></div>
      </div>

      <!-- Maturidade Card -->
      <div class="card maturidade">
        <div class="skeleton skeleton-header-small"></div>
        <div class="skeleton skeleton-score"></div>
        <div class="skeleton skeleton-text"></div>
      </div>

      <!-- Diagnóstico -->
      <div class="card diagnostico" style="margin-top: 20px;">
        <div class="skeleton skeleton-header-small"></div>
        <div class="skeleton skeleton-text"></div>
        
        <div class="skeleton skeleton-subtitle"></div>
        <div class="achado" *ngFor="let i of [1,2,3]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width: 80%"></div>
        </div>

        <div class="skeleton skeleton-subtitle"></div>
        <div class="skeleton skeleton-text"></div>
        <div class="skeleton skeleton-text"></div>
      </div>

      <!-- Sugestões -->
      <div class="card sugestoes" style="margin-top: 20px;">
        <div class="skeleton skeleton-header-small"></div>
        <div class="sugestao" *ngFor="let i of [1,2,3]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-bar"></div>
        </div>
      </div>

      <!-- Relatórios Anteriores -->
      <div style="margin-top: 30px;">
        <div class="skeleton skeleton-subtitle"></div>
        <div class="relatorio-item" *ngFor="let i of [1,2]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-bar"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .relatorios-skeleton {
      padding: 20px;
    }

    .page-header {
      margin-bottom: 30px;
    }

    .skeleton {
      background: linear-gradient(90deg, #f0f0f0 0%, #e0e0e0 50%, #f0f0f0 100%);
      background-size: 200% 100%;
      animation: shimmer 1.5s infinite;
      border-radius: 8px;
    }

    .skeleton-title {
      height: 32px;
      width: 200px;
      margin-bottom: 10px;
    }

    .skeleton-subtitle {
      height: 18px;
      width: 150px;
      margin-bottom: 16px;
      margin-top: 20px;
    }

    .skeleton-small {
      height: 14px;
      width: 100px;
      margin-bottom: 8px;
    }

    .skeleton-header-small {
      height: 18px;
      width: 150px;
      margin-bottom: 12px;
    }

    .skeleton-text {
      height: 14px;
      width: 100%;
      margin-bottom: 8px;
    }

    .skeleton-score {
      height: 56px;
      width: 120px;
      margin-bottom: 12px;
    }

    .skeleton-bar {
      height: 24px;
      width: 100%;
      margin-top: 12px;
    }

    .card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
    }

    .maturidade {
      text-align: center;
    }

    .achado {
      padding: 12px 0;
      border-bottom: 1px solid #f0f0f0;
    }

    .achado:last-child {
      border-bottom: none;
    }

    .sugestao {
      padding: 16px;
      border-bottom: 1px solid #f0f0f0;
    }

    .sugestao:last-child {
      border-bottom: none;
    }

    .relatorio-item {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 12px;
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RelatoriosSkeletonComponent {}
