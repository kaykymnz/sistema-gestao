import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planejamento-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="planejamento-skeleton">
      <div class="page-header">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-subtitle"></div>
      </div>

      <!-- Status Geral -->
      <div class="status-geral">
        <div class="skeleton skeleton-header-small"></div>
        <div class="skeleton skeleton-bar"></div>
        <div class="skeleton skeleton-small" style="width: 120px;"></div>
      </div>

      <!-- Objetivos -->
      <div style="margin-top: 30px;">
        <div class="skeleton skeleton-subtitle"></div>
        <div class="objetivo-card" *ngFor="let i of [1,2,3]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width: 80%"></div>
          <div class="skeleton skeleton-bar"></div>
          <div class="metas-skeleton">
            <div class="skeleton skeleton-small"></div>
            <div class="meta" *ngFor="let j of [1,2]">
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- SWOT -->
      <div style="margin-top: 30px;">
        <div class="skeleton skeleton-subtitle"></div>
        <div class="swot-grid">
          <div class="swot-item" *ngFor="let i of [1,2,3,4]">
            <div class="skeleton skeleton-header-small"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>
      </div>

      <!-- Riscos -->
      <div style="margin-top: 30px;">
        <div class="skeleton skeleton-subtitle"></div>
        <div class="risco-item" *ngFor="let i of [1,2,3]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-bar"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .planejamento-skeleton {
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
      margin-bottom: 20px;
    }

    .skeleton-small {
      height: 14px;
      width: 100px;
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

    .skeleton-bar {
      height: 24px;
      width: 100%;
      margin-top: 12px;
    }

    .status-geral {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 30px;
    }

    .objetivo-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
    }

    .metas-skeleton {
      margin-top: 12px;
      padding-top: 12px;
      border-top: 1px solid #f0f0f0;
    }

    .meta {
      margin-top: 8px;
    }

    .swot-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }

    .swot-item {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
    }

    .risco-item {
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
export class PlanejamentoSkeletonComponent {}
