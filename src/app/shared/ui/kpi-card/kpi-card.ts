import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kpi-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kpi-card.html',
  styleUrl: './kpi-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KpiCard {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() description?: string;
}