import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserProfile } from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private apiUrl = 'http://localhost:8080/api/user-profile';

  private userProfileSubject = new BehaviorSubject<UserProfile | null>(null);
  public userProfile$: Observable<UserProfile | null> = this.userProfileSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadUserProfile();
  }

  private loadUserProfile(): void {
    this.http.get<UserProfile>(this.apiUrl).pipe(
      tap(profile => this.userProfileSubject.next(profile)),
      catchError(error => {
        console.error('Erro ao carregar perfil do usuário:', error);
        return of(null);
      })
    ).subscribe();
  }

  getUserProfile(): Observable<UserProfile | null> {
    return this.userProfileSubject.asObservable();
  }

  getCurrentProfile(): UserProfile | null {
    return this.userProfileSubject.value;
  }

  updateUserProfile(profile: Partial<UserProfile>): void {
    const currentProfile = this.userProfileSubject.value;
    if (currentProfile) {
      this.userProfileSubject.next({
        ...currentProfile,
        ...profile
      });
    }
  }
}
