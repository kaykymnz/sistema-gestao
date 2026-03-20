import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { UserProfileService } from '../../../core/services/user-profile.service';
import { UserProfile } from '../../../core/models/user-profile.model';

@Component({
  selector: 'app-user-profile-card',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './user-profile-card.html',
  styleUrl: './user-profile-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileCard implements OnInit {
  userProfile: UserProfile | null = null;
  storagePercentage: number = 0;

  constructor(private userProfileService: UserProfileService) {}

  ngOnInit(): void {
    this.userProfileService.getUserProfile().subscribe((profile) => {
      this.userProfile = profile;
      this.calculateStoragePercentage();
    });
  }

  private calculateStoragePercentage(): void {
    if (this.userProfile && this.userProfile.storageLimit) {
      this.storagePercentage =
        ((this.userProfile.storageUsed || 0) / this.userProfile.storageLimit) * 100;
    }
  }

  onActionClick(action: string): void {
    console.log('Action clicked:', action);
    // Aqui será integrado com lógica real futuramente
  }
}
