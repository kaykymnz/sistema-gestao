Universidade Nova Horizonte — Plataforma Inteligente de Gestão
Contexto do Projeto

Este projeto é um TCC do curso de Gestão da Tecnologia da Informação.

Trata-se de uma plataforma web interna para apoio à alta gestão de uma universidade fictícia chamada “Universidade Nova Horizonte”.

A plataforma tem como objetivo apoiar decisões estratégicas com base em dados organizacionais, indicadores e análises geradas por Inteligência Artificial.

A aplicação é:

Interna (não pública)

Focada em alta gestão (reitoria, diretoria, coordenação)

Baseada em dados

Modular

Escalável

Stack atual:

Angular 21 (standalone)

Node.js (backend futuro)

MySQL (persistência futura)

API de IA para geração de análises

Arquitetura Frontend

Estrutura baseada em:

app/
├── core/
│ ├── layout/
│ ├── services/
│ ├── models/
│ └── guards/
├── features/
│ ├── dashboard/
│ ├── processos/
│ ├── pessoas/
│ ├── planejamento/
│ └── relatorios/
├── shared/
│ ├── components/
│ ├── directives/
│ └── ui/

Princípios obrigatórios:

Standalone components

ChangeDetectionStrategy.OnPush

Separação clara de responsabilidades

Nenhuma lógica de negócio dentro de componentes de UI

Uso de services para comunicação HTTP

Tipagem forte com interfaces

Não utilizar any

Não hardcodar endpoints

Não usar !important no CSS

Evitar duplicação de código

Contextualização das Telas
1. Dashboard Estratégico

Finalidade:
Exibir indicadores consolidados da universidade.

Dados esperados:

Índice de maturidade organizacional

Taxa de rotatividade docente

Tempo médio de matrícula

Nível de engajamento interno

Status do planejamento estratégico

Origem:
Endpoint futuro: GET /api/dashboard/overview

IA pode gerar:

Resumo executivo textual

Diagnóstico automático

Classificação de maturidade

2. Processos

Finalidade:
Mapear e analisar processos administrativos.

Dados:

Lista de processos

Tempo médio

Gargalos identificados

Status (eficiente, crítico, atenção)

Endpoint futuro:
GET /api/processos

3. Pessoas

Finalidade:
Gestão de indicadores de desempenho docente e administrativo.

Dados:

Taxa de turnover

Avaliações

Média de desempenho

Evolução histórica

Endpoint futuro:
GET /api/pessoas/indicadores

4. Planejamento

Finalidade:
Gerenciar planejamento estratégico e SWOT.

Dados:

Objetivos estratégicos

Metas

SWOT

Status de execução

Endpoint futuro:
GET /api/planejamento

5. Relatórios Inteligentes

Finalidade:
Gerar análises automáticas com apoio de IA.

Dados:

Diagnóstico organizacional

Sugestões de melhoria

Classificação de maturidade

Endpoint futuro:
POST /api/relatorios/gerar

Padrões Obrigatórios

Ao gerar código, siga:

Criação de interface para cada modelo de dados

Service responsável por chamadas HTTP

Component apenas consome service

Separar container (smart) de componentes visuais (dumb) quando necessário

Utilizar Observables corretamente

Preparar código para futura integração com backend real

Não gerar código simplista ou didático

Escrever código profissional de nível corporativo

Mock Strategy

Enquanto backend não estiver pronto:

Criar mock service simulando resposta HTTP

Utilizar RxJS (of, delay) para simular requisição

Manter mesma estrutura de retorno do backend futuro

Objetivo Técnico

Este projeto deve parecer:

Produto real corporativo

Sistema institucional

Arquitetura escalável

Código limpo

Sem code smell

Sem improviso