import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardOverview } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:8080/api/dashboard';

  constructor(private http: HttpClient) {}

  getOverview(): Observable<DashboardOverview> {
    return this.http.get<DashboardOverview>(this.apiUrl);
  }
}
