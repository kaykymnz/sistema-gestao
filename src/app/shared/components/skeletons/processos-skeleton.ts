import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-processos-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="processos-skeleton">
      <div class="page-header">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-subtitle"></div>
      </div>

      <!-- KPIs -->
      <div class="kpi-grid">
        <div class="kpi-card" *ngFor="let i of [1,2,3,4]">
          <div class="skeleton skeleton-small"></div>
          <div class="skeleton skeleton-value"></div>
        </div>
      </div>

      <!-- Info Box -->
      <div class="skeleton skeleton-info"></div>

      <!-- Processos List -->
      <div class="processos-list-skeleton">
        <div class="skeleton skeleton-subtitle"></div>
        <div class="processo-card" *ngFor="let i of [1,2,3]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text" style="width: 80%"></div>
          <div class="skeleton skeleton-bar"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .processos-skeleton {
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
      margin-bottom: 8px;
    }

    .skeleton-value {
      height: 40px;
      width: 100%;
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

    .skeleton-info {
      height: 60px;
      width: 100%;
      margin-bottom: 30px;
      border-radius: 8px;
    }

    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 30px;
    }

    .kpi-card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      padding: 16px;
    }

    .processos-list-skeleton {
      background: white;
      border-radius: 8px;
      padding: 20px;
    }

    .processo-card {
      padding: 16px 0;
      border-bottom: 1px solid #f0f0f0;
    }

    .processo-card:last-child {
      border-bottom: none;
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessosSkeletonComponent {}
