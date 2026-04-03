# Módulo de Chat IA — Arquitetura de Integração

## Objetivo
Criar um chat institucional no frontend (`sistema-gestao`) que consulta um endpoint no backend (`sistema-gestao-backend`) com contexto de dados reais (dashboard, processos, pessoas e planejamento).

## Fluxo recomendado
1. Usuário envia pergunta no módulo `Chat IA`.
2. Frontend chama `POST /api/chat` com `message` e `sessionId`.
3. Backend busca contexto no banco (MySQL) + aplica regras de acesso por perfil.
4. Backend monta prompt estruturado e consulta provedor de LLM.
5. Backend devolve resposta + nível de confiança + resumo do contexto utilizado.

## Contrato mínimo do endpoint
### Request
```json
{
  "message": "quais processos estão críticos?",
  "sessionId": "sess-123"
}
```

### Response
```json
{
  "sessionId": "sess-123",
  "answer": "Os gargalos principais estão em matrícula e validação documental...",
  "contextUsed": {
    "dashboardResumo": "...",
    "processosCriticos": ["..."],
    "indicadoresPessoas": ["..."],
    "planejamentoAtivo": ["..."]
  },
  "confidence": 0.84
}
```

## Segurança e governança (obrigatório)
- Nunca permitir acesso direto do frontend ao banco de dados.
- Aplicar controle de acesso por usuário/perfil em cada consulta.
- Registrar logs de auditoria (`pergunta`, `fontes consultadas`, `timestamp`, `usuário`).
- Sanitizar dados sensíveis (LGPD) antes de enviar ao modelo.
- Implementar limite de tokens e timeout por requisição.

## Sobre IA gratuita
É possível iniciar com opções de baixo custo/gratuitas para protótipo, mas com limitações de cota, estabilidade e privacidade.

### Opções comuns para prototipação
- **Hugging Face Inference Providers** (alguns modelos com camada gratuita limitada).
- **OpenRouter** (agrega provedores e oferece modelos com custo reduzido; disponibilidade muda com frequência).
- **Ollama local** (sem custo por requisição, porém exige infraestrutura local/servidor próprio).

> Recomendação prática: para TCC e ambiente interno, comece com modelo local (Ollama) ou cota pequena em provedor gerenciado, e mantenha a arquitetura preparada para troca de provedor.

## Próximos passos no backend
1. Criar endpoint `POST /api/chat`.
2. Criar serviço `ChatContextService` para consolidar queries SQL por módulo.
3. Criar `PromptBuilder` com template padronizado.
4. Implementar `LlmGateway` desacoplado por provider (`OpenAI`, `OpenRouter`, `Ollama`, etc.).
5. Adicionar testes de integração do endpoint.
