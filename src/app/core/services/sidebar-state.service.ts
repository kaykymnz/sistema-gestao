import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarStateService {
  private isExpandedSubject = new BehaviorSubject<boolean>(true);
  public isExpanded$: Observable<boolean> = this.isExpandedSubject.asObservable();

  constructor() {
    // Restaurar estado da sidebar do localStorage
    const savedState = localStorage.getItem('sidebar-expanded');
    if (savedState !== null) {
      this.isExpandedSubject.next(JSON.parse(savedState));
    }
  }

  toggle(): void {
    const newState = !this.isExpandedSubject.value;
    this.isExpandedSubject.next(newState);
    localStorage.setItem('sidebar-expanded', JSON.stringify(newState));
  }

  expand(): void {
    this.isExpandedSubject.next(true);
    localStorage.setItem('sidebar-expanded', 'true');
  }

  collapse(): void {
    this.isExpandedSubject.next(false);
    localStorage.setItem('sidebar-expanded', 'false');
  }

  getState(): boolean {
    return this.isExpandedSubject.value;
  }
}
