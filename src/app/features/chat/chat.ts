import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs/operators';
import { ChatMessage } from '../../core/models';
import { ChatService } from '../../core/services/chat.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chat {
  readonly messages = signal<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        'Olá! Sou seu assistente de gestão institucional. Posso responder perguntas com base em dados de dashboard, processos, pessoas e planejamento.',
      createdAt: new Date()
    }
  ]);

  readonly carregando = signal(false);
  readonly erro = signal<string | null>(null);

  perguntaAtual = '';
  sessionId: string | undefined;

  constructor(private readonly chatService: ChatService) {}

  enviarPergunta(): void {
    const pergunta = this.perguntaAtual.trim();

    if (!pergunta || this.carregando()) {
      return;
    }

    this.adicionarMensagem('user', pergunta);
    this.perguntaAtual = '';
    this.erro.set(null);
    this.carregando.set(true);

    this.chatService
      .enviarMensagem({
        message: pergunta,
        sessionId: this.sessionId
      })
      .pipe(finalize(() => this.carregando.set(false)))
      .subscribe({
        next: resposta => {
          this.sessionId = resposta.sessionId;
          const confiabilidade = Math.round(resposta.confidence * 100);
          const respostaFormatada = `${resposta.answer}\n\nConfiabilidade estimada: ${confiabilidade}%`;
          this.adicionarMensagem('assistant', respostaFormatada);
        },
        error: error => {
          const mensagem = error instanceof Error ? error.message : 'Falha ao consultar IA.';
          this.erro.set(mensagem);
        }
      });
  }

  trackByMessage(index: number, item: ChatMessage): string {
    return item.id || String(index);
  }

  private adicionarMensagem(role: 'assistant' | 'user', content: string): void {
    const current = this.messages();

    this.messages.set([
      ...current,
      {
        id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        role,
        content,
        createdAt: new Date()
      }
    ]);
  }
}
