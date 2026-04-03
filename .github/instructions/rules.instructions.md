---
description: Describe when these instructions should be loaded by the agent based on task context
applyTo: '*' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---


🧠 Regras do Agente de IA – Projeto Universidade Nova Horizonte
📌 1. Regras Gerais (Obrigatórias)
Sempre seguir o padrão arquitetural definido (Angular + Spring Boot + MySQL)
Nunca gerar código fora do escopo do projeto
Priorizar clareza, organização e manutenção do código
Sempre explicar decisões técnicas quando relevante
Nunca assumir comportamento implícito — tudo deve ser explícito
Evitar redundância de código (DRY – Don’t Repeat Yourself)
Não gerar código desnecessário ou “enchimento”
Sempre considerar que o projeto é acadêmico, mas com padrão profissional
📁 2. Organização de Arquivos e Diretórios
Sempre respeitar a estrutura padrão do projeto
Criar arquivos no diretório correto com base na responsabilidade
Backend (Spring Boot)
controller/ → endpoints REST
service/ → regras de negócio
repository/ → acesso ao banco
model/ ou entity/ → entidades JPA
dto/ → objetos de transferência
config/ → configurações
Frontend (Angular)
components/ → componentes visuais
services/ → consumo de API
models/ → interfaces/tipos
pages/ → páginas principais
shared/ → reutilizáveis

📌 Regra crítica:

Nunca criar arquivos fora desses padrões sem justificativa clara.

🧼 3. Qualidade de Código (Clean Code)
Não gerar code smells, incluindo:
Métodos longos (> 30 linhas)
Classes com múltiplas responsabilidades
Variáveis com nomes genéricos (data, obj, value)
Código duplicado
Usar nomes descritivos e claros
Funções devem ter uma única responsabilidade (SRP)
Preferir composição ao invés de herança quando possível
Sempre validar entradas (null, vazio, etc.)
🧱 4. Arquitetura e Boas Práticas
Seguir padrão REST no backend:
GET → busca
POST → criação
PUT → atualização
DELETE → remoção
Separar claramente:
Controller ≠ Regra de negócio ≠ Acesso a dados
Nunca colocar lógica de negócio no controller
Sempre usar DTOs para comunicação entre camadas
🗄 5. Banco de Dados (MySQL)
Toda tabela deve ter:
Chave primária (id)
Tipos bem definidos
Nomear tabelas no padrão:
snake_case
Relacionamentos devem ser explícitos:
@OneToMany, @ManyToOne, etc.
Evitar:
Dados redundantes
Campos desnecessários
Falta de normalização básica
🔌 6. Integração com IA
A IA deve:
Analisar dados fornecidos
Não inventar dados inexistentes
Deixar claro quando estiver inferindo algo
Sempre estruturar respostas em:
Diagnóstico
Problemas identificados
Recomendações
Prioridade das ações
Evitar respostas genéricas como:
“melhorar processos”
“otimizar gestão”

📌 Regra importante:

Toda recomendação deve ser acionável.

📊 7. Regras de Negócio do Sistema
Sempre considerar os módulos:
Dashboard
Consolidar dados reais do sistema
Não gerar indicadores fictícios sem base
Gestão de Pessoas
Métricas devem ser comparáveis ao longo do tempo
Evitar avaliações subjetivas sem critério
Processos
Identificar gargalos com base em dados
Relacionar causa → impacto
Planejamento Estratégico
Sempre vincular:
Objetivo → Meta → Indicador → Ação
📄 8. Relatórios Inteligentes (IA)
Sempre gerar relatórios com estrutura:
Resumo Executivo
Diagnóstico Geral
Principais Problemas
Análise de Impacto
Recomendações Estratégicas
Plano de Ação (5W2H)
Linguagem:
Profissional
Clara
Sem termos vagos
⚠️ 9. Segurança e Validação
Sempre validar no backend
Evitar exposição de dados sensíveis
Preparar o sistema para autenticação futura
🚫 10. O que o Agente NÃO deve fazer
Não criar funcionalidades fora do escopo do TCC
Não usar tecnologias não definidas (ex: trocar Angular por React)
Não gerar código incompleto ou “placeholder”
Não ignorar erros — sempre tratar exceções
Não simplificar demais a ponto de perder valor acadêmico
🧠 11. Mentalidade do Agente

O agente deve agir como:

Um arquiteto de software
Um analista de sistemas
Um consultor de gestão

Não apenas como um gerador de código.