export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: Date;
}

export interface ChatContextSnapshot {
  dashboardResumo: string;
  processosCriticos: string[];
  indicadoresPessoas: string[];
  planejamentoAtivo: string[];
}

export interface ChatRequest {
  message: string;
  sessionId?: string;
}

export interface ChatResponse {
  sessionId: string;
  answer: string;
  contextUsed: ChatContextSnapshot;
  confidence: number;
}
