import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { Observable } from 'rxjs';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar implements OnInit {
  isExpanded$: Observable<boolean>;

  menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Processos', route: '/processos', icon: 'build' },
    { label: 'Pessoas', route: '/pessoas', icon: 'people' },
    { label: 'Planejamento', route: '/planejamento', icon: 'calendar_month' },
    { label: 'Relatórios', route: '/relatorios', icon: 'assessment' },
  ];

  constructor(private sidebarStateService: SidebarStateService) {
    this.isExpanded$ = this.sidebarStateService.isExpanded$;
  }

  ngOnInit(): void {
    // Inicialização se necessário
  }

  toggleSidebar(): void {
    this.sidebarStateService.toggle();
  }
}
