# FinanceLive

Dashboard financeiro em tempo real desenvolvido com **React + TypeScript**, consumindo dados via **WebSocket** para atualização instantânea de cotações.

---

## Objetivo

O projeto simula uma plataforma de monitoramento de ativos financeiros em tempo real, permitindo:

- Login do usuário
- Rotas protegidas
- Visualização de ativos
- Atualização automática das cotações via WebSocket
- Gerenciamento global de estado

---

# Tecnologias Utilizadas

## Frontend

### React

Biblioteca utilizada para construção da interface.

**Motivos da escolha:**

- Componentização
- Reutilização de código
- Ecossistema consolidado

**Status:** Obrigatório ✅

---

### TypeScript

Superset do JavaScript com tipagem estática.

**Motivos da escolha:**

- Segurança em tempo de compilação
- Melhor experiência de desenvolvimento
- Redução de bugs

**Recursos utilizados:**

- Interfaces
- Type Aliases
- Generics
- Tipagem explícita

**Status:** Obrigatório ✅

---

### Vite

Ferramenta responsável pelo build e servidor de desenvolvimento.

**Motivos da escolha:**

- Inicialização rápida
- Hot Reload eficiente
- Configuração moderna

**Status:** Recomendado ✅

---

### React Router DOM

Biblioteca responsável pelo gerenciamento de rotas.

**Motivos da escolha:**

- Navegação SPA
- Controle de acesso
- Rotas protegidas

**Funcionalidades implementadas:**

- Página de Login
- Dashboard
- ProtectedRoute

**Status:** Obrigatório ✅

---

### Zustand

Biblioteca para gerenciamento global de estado.

**Motivos da escolha:**

- API simples
- Menos boilerplate que Redux
- Excelente integração com TypeScript

**Estados gerenciados:**

- Autenticação
- Dados do mercado

**Status:** Obrigatório (escolha justificada) ✅

---

### TailwindCSS

Framework utilitário para estilização.

**Motivos da escolha:**

- Desenvolvimento rápido
- Padronização visual
- Menos CSS manual

**Status:** Opcional ✅

---

### Vitest

Framework de testes.

**Motivos da escolha:**

- Integração nativa com Vite
- Excelente performance

**Status:** Recomendado ✅

---

### Testing Library

Biblioteca para testes de componentes React.

**Motivos da escolha:**

- Simula comportamento real do usuário
- Incentiva boas práticas

**Status:** Recomendado ✅

---

## Backend

### Node.js

Ambiente de execução JavaScript.

**Motivos da escolha:**

- Compatível com Socket.IO
- Facilidade de integração com React

**Status:** Necessário para execução ✅

---

### Express

Servidor HTTP.

**Motivos da escolha:**

- Simplicidade
- Integração rápida com Socket.IO

**Status:** Opcional ✅

---

### Socket.IO

Biblioteca utilizada para comunicação em tempo real.

**Motivos da escolha:**

- Atualização instantânea
- Reconexão automática
- Facilidade de implementação

**Responsável por:**

- Enviar cotações
- Atualizar dashboard em tempo real

**Status:** Obrigatório (WebSocket) ✅

---

# Arquitetura do Projeto

```txt
finance-live/
│
├── server/
│   ├── index.ts
│   └── package.json
│
├── src/
│
├── app/
│   └── providers.tsx
│
├── components/
│
├── pages/
│   ├── LoginPage.tsx
│   └── DashboardPage.tsx
│
├── routes/
│   └── ProtectedRoute.tsx
│
├── services/
│   └── websocket/
│       └── socket.ts
│
├── store/
│   ├── authStore.ts
│   └── marketStore.ts
│
├── tests/
│
├── types/
│   └── asset.ts
│
├── vite.config.ts
│
└── package.json
```

---

# Como Executar o Projeto

## Pré-requisitos

### Node.js

Versão recomendada:

```txt
Node.js 22 LTS
```

Verificar instalação:

```bash
node -v
```

---

### PNPM

Instalar globalmente:

```bash
npm install -g pnpm
```

Verificar instalação:

```bash
pnpm -v
```

---

## 1. Clonar o Projeto

```bash
git clone URL_DO_REPOSITORIO
```

Entrar na pasta:

```bash
cd finance-live
```

---

## 2. Instalar Dependências do Frontend

Na raiz do projeto:

```bash
pnpm install
```

---

## 3. Instalar Dependências do Backend

Entrar na pasta do servidor:

```bash
cd server
```

Instalar dependências:

```bash
pnpm install
```

Voltar para a raiz:

```bash
cd ..
```

---

## 4. Executar o Backend

Abrir um terminal:

```bash
cd server
pnpm dev
```

Saída esperada:

```txt
WebSocket server running on port 3333
```

---

## 5. Executar o Frontend

Abrir outro terminal:

```bash
pnpm dev
```

Saída esperada:

```txt
Local: http://localhost:3000
```

---

## 6. Utilizar a Aplicação

Abrir no navegador:

```txt
http://localhost:3000
```

Fluxo:

1. Acessar Login
2. Clicar em Entrar
3. Ser redirecionado para Dashboard
4. Visualizar ativos em tempo real

---

# Executar Testes

Rodar testes:

```bash
pnpm test
```

Modo observação:

```bash
pnpm test --watch
```

---

# Requisitos Obrigatórios Atendidos

| Requisito | Status |
|------------|---------|
| React | ✅ |
| TypeScript | ✅ |
| Sem `any` explícito | ✅ |
| Tipagem forte | ✅ |
| WebSocket | ✅ |
| Gerenciamento de Estado | ✅ |
| Zustand | ✅ |
| React Router | ✅ |
| Rota Protegida | ✅ |

---

# Requisitos Recomendados Atendidos

| Requisito | Status |
|------------|---------|
| Vite | ✅ |
| TailwindCSS | ✅ |
| Vitest | ✅ |
| Testing Library | ✅ |
| Design System | 🚧 Em desenvolvimento |
| Testes Unitários (mínimo 5) | 🚧 Em desenvolvimento |

---

# Melhorias Futuras

- Watchlist personalizada
- Persistência com LocalStorage
- Gráficos financeiros
- Dark Mode
- Reconexão automática do Socket.IO
- Histórico de preços
- Dashboard responsivo avançado
- Ampliação da cobertura de testes
- Design System completo

---

# Autor

Projeto desenvolvido para fins acadêmicos utilizando React, TypeScript e WebSocket como demonstração de aplicações em tempo real.