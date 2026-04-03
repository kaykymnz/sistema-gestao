import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserProfileService } from '../../services/user-profile.service';
import { SidebarStateService } from '../../services/sidebar-state.service';
import { UserProfile } from '../../models/user-profile.model';
import { Observable } from 'rxjs';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MatIconModule, MatMenuModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Topbar implements OnInit {
  userProfile$: Observable<UserProfile | null>;
  searchQuery: string = '';

  menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { label: 'Processos', route: '/processos', icon: 'build' },
    { label: 'Pessoas', route: '/pessoas', icon: 'people' },
    { label: 'Planejamento', route: '/planejamento', icon: 'calendar_month' },
    { label: 'Relatórios', route: '/relatorios', icon: 'assessment' },
  ];

  constructor(
    private userProfileService: UserProfileService,
    private sidebarStateService: SidebarStateService
  ) {
    this.userProfile$ = this.userProfileService.getUserProfile();
  }

  ngOnInit(): void {
    // Inicialização se necessário
  }

  onSearch(query: string): void {
    this.searchQuery = query;
    console.log('Buscando por:', query);
  }

  onAction(action: string): void {
    console.log('Ação executada:', action);
  }
}
