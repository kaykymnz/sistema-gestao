import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { PessoasService } from '../../core/services';
import { PessoasIndicadores, Pessoa } from '../../core/models';

@Component({
  selector: 'app-pessoas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pessoas.html',
  styleUrl: './pessoas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pessoas implements OnInit {
  indicadores$!: Observable<PessoasIndicadores>;
  pessoas$!: Observable<Pessoa[]>;
  searchQuery: string = '';
  selectedPessoa: Pessoa | null = null;

  constructor(private pessoasService: PessoasService) {}

  ngOnInit(): void {
    this.indicadores$ = this.pessoasService.getIndicadores();
    this.pessoas$ = this.pessoasService.getPessoas();
  }

  selectPessoa(pessoa: Pessoa): void {
    this.selectedPessoa = pessoa;
  }

  getInitials(nome: string): string {
    return nome
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
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

  getScoreColor(score: number): string {
    if (score >= 85) return '#10b981';
    if (score >= 70) return '#f59e0b';
    if (score >= 50) return '#ef4444';
    return '#dc2626';
  }

  getMonthsSincePromotion(data: Date): number {
    const now = new Date();
    const months = (now.getFullYear() - data.getFullYear()) * 12 + (now.getMonth() - data.getMonth());
    return Math.max(0, months);
  }

  filterPessoas(pessoas: Pessoa[]): Pessoa[] {
    if (!this.searchQuery) return pessoas;
    const query = this.searchQuery.toLowerCase();
    return pessoas.filter(p => 
      p.nome.toLowerCase().includes(query) || 
      p.departamento.toLowerCase().includes(query)
    );
  }
}
