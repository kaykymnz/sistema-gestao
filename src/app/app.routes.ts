import { Routes } from '@angular/router';
import { MainLayout } from './core/layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard')
            .then(m => m.Dashboard)
      },
      {
        path: 'processos',
        loadComponent: () =>
          import('./features/processos/processos')
            .then(m => m.Processos)
      },
      {
        path: 'pessoas',
        loadComponent: () =>
          import('./features/pessoas/pessoas')
            .then(m => m.Pessoas)
      },
      {
        path: 'planejamento',
        loadComponent: () =>
          import('./features/planejamento/planejamento')
            .then(m => m.Planejamento)
      },
      {
        path: 'relatorios',
        loadComponent: () =>
          import('./features/relatorios/relatorios')
            .then(m => m.Relatorios)
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];