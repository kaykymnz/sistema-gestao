import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserProfileService } from '../../services/user-profile.service';
import { UserProfile } from '../../models/user-profile.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Topbar implements OnInit {
  userProfile$: Observable<UserProfile | null>;
  searchQuery: string = '';

  constructor(private userProfileService: UserProfileService) {
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
