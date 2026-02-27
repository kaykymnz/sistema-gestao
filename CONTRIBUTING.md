# 🤝 Contribuindo com o Projeto
Plataforma Universidade

Este documento explica, do zero, como configurar seu ambiente e começar a contribuir com o projeto, mesmo que você nunca tenha usado Git antes.

---

# 📌 1. O que é Git?

Git é uma ferramenta que permite que várias pessoas trabalhem no mesmo projeto sem sobrescrever o trabalho umas das outras.

Imagine um trabalho em grupo da faculdade:

- Cada pessoa faz sua parte
- Depois juntamos tudo em um documento final
- Sem que um apague o que o outro fez

Git faz exatamente isso, mas para código.

---

# 📌 2. O que é uma Branch?

Uma *branch* (ramo) é como criar uma cópia do projeto para trabalhar em algo novo sem mexer na versão principal.

Exemplo do dia a dia:

Imagine que o projeto principal é um restaurante aberto ao público.

Você quer testar uma nova receita.

Você NÃO testa na cozinha principal com clientes esperando.

Você cria uma cozinha separada para testar.

Se a receita ficar boa, você leva para o restaurante principal.

Branch é essa "cozinha separada".

---

# 📌 3. Instalar o Git

## Windows

1. Acesse: https://git-scm.com/downloads
2. Baixe a versão para Windows
3. Instale com as opções padrão
4. Reinicie o computador (se necessário)

Depois abra o terminal (CMD ou PowerShell) e digite:


git --version


Se aparecer uma versão, está funcionando.

---

# 📌 4. Configurar seu nome e email

Depois de instalar, execute:


git config --global user.name "Seu Nome"
git config --global user.email "seuemail@email.com
"


Use o mesmo email da sua conta do GitHub.

---

# 📌 5. Criar conta no GitHub

Se ainda não tiver:

1. Acesse https://github.com
2. Crie uma conta gratuita
3. Confirme seu email

---

# 📌 6. Clonar o Projeto

Clonar significa baixar o projeto do GitHub para sua máquina.

No GitHub:

1. Vá até o repositório
2. Clique no botão verde "Code"
3. Copie o link HTTPS

No terminal:


git clone https://github.com/usuario/sistema-gestao.git


Depois:


cd sistema-gestao


Agora o projeto está no seu computador.

---

# 📌 7. Instalar dependências do projeto

Dentro da pasta do projeto, execute:


npm install


Isso baixa todas as bibliotecas necessárias.

Depois para rodar:


ng serve


Abra no navegador:


http://localhost:4200


---

# 📌 8. NUNCA Trabalhe na main

A branch `main` é a versão estável do projeto.

Você nunca deve desenvolver direto nela.

---

# 📌 9. Criar uma Nova Branch

Antes de começar qualquer tarefa:


git checkout develop
git pull
git checkout -b feature/nome-da-sua-feature


Exemplo:


git checkout -b feature/dashboard-kpis


Agora você está trabalhando em uma cópia isolada do projeto.

---

# 📌 10. Salvar suas alterações (Commit)

Depois de alterar arquivos:


git add .
git commit -m "feat: adiciona estrutura de KPIs no dashboard"


Mensagem deve explicar o que foi feito.

---

# 📌 11. Enviar para o GitHub


git push origin feature/dashboard-kpis


Depois:

1. Vá no GitHub
2. Clique em "Compare & pull request"
3. Crie o Pull Request para a branch `develop`

---

# 📌 12. O que é Pull Request?

Pull Request é como pedir para o grupo revisar seu trabalho antes de juntar com o projeto principal.

É como dizer:

"Terminei minha parte, vocês podem revisar antes de colocar no projeto oficial?"

---

# 📌 13. Fluxo do Projeto

main → versão estável  
develop → integração  
feature/* → desenvolvimento individual  

Sempre:

feature → develop → main

---

# 📌 14. Boas Práticas

- Não usar a branch main
- Não fazer commits gigantes
- Escrever mensagens claras
- Atualizar sua branch antes de começar
- Testar antes de enviar PR

---

# 📌 15. Se der erro

Use:


git status


Para entender o que está acontecendo.

E peça ajuda antes de forçar algo.

---

# 🎯 Objetivo

Trabalhar como equipe organizada, mantendo:

- Código limpo
- Histórico organizado
- Colaboração eficiente

Isso vai evitar:

Gente desenvolvendo na main

Merge bagunçado

Código perdido

Conflito desnecessário