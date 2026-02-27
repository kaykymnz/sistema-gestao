import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard-skeleton',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-skeleton">
      <div class="page-header">
        <div class="skeleton skeleton-title"></div>
        <div class="skeleton skeleton-subtitle"></div>
      </div>

      <div class="grid-container">
        <!-- Maturity Card -->
        <div class="card skeleton-card">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-score"></div>
          <div class="skeleton skeleton-text"></div>
        </div>

        <!-- Other KPI Cards -->
        <div class="card skeleton-card" *ngFor="let i of [1,2,3,4,5]">
          <div class="skeleton skeleton-header-small"></div>
          <div class="skeleton skeleton-value"></div>
          <div class="skeleton skeleton-bar"></div>
        </div>
      </div>

      <div class="footer skeleton">
        <div class="skeleton skeleton-small"></div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-skeleton {
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
      height: 16px;
      width: 400px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }

    .skeleton-card {
      padding: 20px;
    }

    .skeleton-header-small {
      height: 18px;
      width: 150px;
      margin-bottom: 15px;
    }

    .skeleton-score {
      height: 48px;
      width: 80px;
      margin-bottom: 12px;
    }

    .skeleton-text {
      height: 14px;
      width: 100%;
      margin-bottom: 8px;
    }

    .skeleton-value {
      height: 40px;
      width: 60px;
      margin-bottom: 15px;
    }

    .skeleton-bar {
      height: 24px;
      width: 100%;
    }

    .skeleton-small {
      height: 12px;
      width: 200px;
    }

    @keyframes shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    .card {
      background: white;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardSkeletonComponent {}
