import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { ChatRequest, ChatResponse } from '../models';
import { gerarRespostaChatMock } from './chat.mock';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private readonly apiUrl = 'http://localhost:8080/api/chat';
  private readonly usarMockData = true;

  constructor(private readonly http: HttpClient) {}

  enviarMensagem(request: ChatRequest): Observable<ChatResponse> {
    const mensagem = request.message?.trim();

    if (!mensagem) {
      return throwError(() => new Error('A mensagem é obrigatória para consultar a IA.'));
    }

    const sessionId = request.sessionId ?? this.gerarSessionId();

    if (this.usarMockData) {
      return of(gerarRespostaChatMock(mensagem, sessionId)).pipe(delay(900));
    }

    return this.http
      .post<ChatResponse>(this.apiUrl, {
        message: mensagem,
        sessionId
      })
      .pipe(
        map(response => this.validarResposta(response)),
        catchError(error => this.tratarErro('Erro ao consultar assistente IA', error))
      );
  }

  private validarResposta(response: ChatResponse): ChatResponse {
    if (!response.answer || !response.sessionId || !response.contextUsed) {
      throw new Error('Resposta da IA em formato inválido.');
    }

    const confidence = Math.max(0, Math.min(1, response.confidence));

    return {
      ...response,
      confidence
    };
  }

  private tratarErro(contexto: string, erro: unknown): Observable<never> {
    const mensagem = erro instanceof Error ? erro.message : 'Erro desconhecido';
    return throwError(() => new Error(`${contexto}: ${mensagem}`));
  }

  private gerarSessionId(): string {
    const random = Math.random().toString(36).slice(2, 10);
    return `sess-${Date.now()}-${random}`;
  }
}
