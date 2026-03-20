import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Processo, ProcessoAnalytics, ProcessoBench } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {
  private apiUrl = 'http://localhost:8080/api/processos';
  private apiUrlAnalytics = 'http://localhost:8080/api/processos/analytics';
  private apiUrlBenchmark = 'http://localhost:8080/api/processos/benchmark';

  constructor(private http: HttpClient) {}

  getProcessos(): Observable<Processo[]> {
    return this.http.get<Processo[]>(this.apiUrl);
  }

  getAnalytics(): Observable<ProcessoAnalytics> {
    return this.http.get<ProcessoAnalytics>(this.apiUrlAnalytics);
  }

  getBenchmark(): Observable<ProcessoBench[]> {
    return this.http.get<ProcessoBench[]>(this.apiUrlBenchmark);
  }
}
