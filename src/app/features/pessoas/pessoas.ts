import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { PessoasService } from '../../core/services';
import { PessoasIndicadores, Pessoa } from '../../core/models';
import { PessoasSkeletonComponent } from '../../shared/components/skeletons/pessoas-skeleton';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [CommonModule, PessoasSkeletonComponent],
  templateUrl: './pessoas.html',
  styleUrl: './pessoas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pessoas implements OnInit {
  indicadores$!: Observable<PessoasIndicadores>;
  pessoas$!: Observable<Pessoa[]>;
  loading$ = new BehaviorSubject(true);

  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.indicadores$ = this.pessoasService.getIndicadores().pipe(
      tap(() => this.loading$.next(false))
    );
    this.pessoas$ = this.pessoasService.getPessoas();
  }

  getAvaliacaoClasse(avaliacao: string): string {
    const classes: Record<string, string> = {
      'excelente': 'status-positivo',
      'otimo': 'status-positivo',
      'bom': 'status-neutro',
      'atencao': 'status-atencao',
      'critico': 'status-critico'
    };
    return classes[avaliacao] || '';
  }

  getTendenciaIcone(tendencia: string): string {
    const icons: Record<string, string> = {
      'crescente': '📈',
      'estavel': '➡️',
      'decrescente': '📉'
    };
    return icons[tendencia] || '';
  }
}
