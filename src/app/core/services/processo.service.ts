import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Processo, ProcessoAnalytics, ProcessoBench } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  constructor() {}

  getProcessos(): Observable<Processo[]> {
    const mockData: Processo[] = [
      {
        id: '1',
        nome: 'Processo de Matrícula',
        descricao: 'Fluxo de inscrição e matrícula de alunos',
        departamento: 'Registros Acadêmicos',
        tempMedioExecucao: 6,
        gargalos: ['Validação de documentos', 'Processamento burocrático'],
        status: 'atencao',
        eficiencia: 65,
        ultimaAtualizacao: new Date('2026-02-20')
      },
      {
        id: '2',
        nome: 'Aprovação de Planos de Ensino',
        descricao: 'Análise e aprovação dos planos de aula docente',
        departamento: 'Graduação',
        tempMedioExecucao: 8,
        gargalos: ['Múltiplas aprovações', 'Falta de clareza em critérios'],
        status: 'critico',
        eficiencia: 45,
        ultimaAtualizacao: new Date('2026-02-15')
      },
      {
        id: '3',
        nome: 'Requisição de Compras',
        descricao: 'Solicitação, aprovação e aquisição de materiais',
        departamento: 'Administrativo',
        tempMedioExecucao: 15,
        gargalos: ['Aprovações em cascata', 'Fornecedores lentos'],
        status: 'critico',
        eficiencia: 35,
        ultimaAtualizacao: new Date('2026-02-01')
      },
      {
        id: '4',
        nome: 'Emissão de Certificados',
        descricao: 'Processamento e emissão de certificados de cursos',
        departamento: 'Registros Acadêmicos',
        tempMedioExecucao: 3,
        gargalos: [],
        status: 'eficiente',
        eficiencia: 92,
        ultimaAtualizacao: new Date('2026-02-22')
      },
      {
        id: '5',
        nome: 'Avaliação de Desempenho',
        descricao: 'Avaliação anual do desempenho de colaboradores',
        departamento: 'Recursos Humanos',
        tempMedioExecucao: 45,
        gargalos: ['Coleta de dados manual', 'Consolidação demorada'],
        status: 'atencao',
        eficiencia: 58,
        ultimaAtualizacao: new Date('2026-02-10')
      }
    ];

    return of(mockData).pipe(delay(600));
  }

  getAnalytics(): Observable<ProcessoAnalytics> {
    const mockData: ProcessoAnalytics = {
      totalProcessos: 24,
      processosEficientes: 8,
      processosAtencao: 10,
      processosCriticos: 6,
      tempoMedioGeral: 11.3,
      tendenciaGeral: 'piorando'
    };

    return of(mockData).pipe(delay(500));
  }

  getBenchmark(): Observable<ProcessoBench[]> {
    const mockData: ProcessoBench[] = [
      {
        nome: 'Matrícula',
        melhorTempo: 2,
        piorTempo: 14,
        tempoMedio: 6.2,
        variacao: 85
      },
      {
        nome: 'Plano de Ensino',
        melhorTempo: 3,
        piorTempo: 21,
        tempoMedio: 8.5,
        variacao: 140
      },
      {
        nome: 'Certificado',
        melhorTempo: 1,
        piorTempo: 5,
        tempoMedio: 3.1,
        variacao: 62
      }
    ];

    return of(mockData).pipe(delay(400));
  }
}
