# 🚀 GitHub Explorer

Aplicação web desenvolvida em **React** que consome a API do GitHub para buscar usuários, visualizar seus dados e explorar repositórios com ordenação dinâmica.

---

## 📂 Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis (ex: Layout futuramente mais complexo)
├── pages/             # Páginas da aplicação (Home, User, RepoDetails)
├── services/          # Configuração de APIs (Axios)
├── styles/            # Estilos globais
├── App.jsx            # Definição de rotas
├── main.jsx           # Entry point da aplicação
```

---

## ⚙️ Instalação e Execução

### 1. Clonar o repositório

```bash
git clone https://github.com/evertoncruz/github-explorer-code-group.git
cd github-explorer-code-group
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```
VITE_GITHUB_TOKEN=seu_token_aqui
```
**Observação**: Existe uma seção abaixo orientado sobre como proceder para a criação do token.
### 4. Rodar o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```

---

## 🧠 Tecnologias Utilizadas

### ⚛️ React

Utilizado para construção da interface baseada em componentes.

**Por quê?**

* Alta reutilização
* Ecossistema robusto
* Ideal para SPA

---

### 🔀 React Router

Responsável pela navegação entre páginas.

**Por quê?**

* Permite SPA com múltiplas rotas
* Controle de navegação sem reload

---

### 🌐 Axios

Cliente HTTP para consumo da API do GitHub.

**Por quê?**

* Interceptors
* Melhor controle de headers (token)
* Padronização das requisições

---

### 🎨 Bootstrap

Framework CSS para layout responsivo.

**Por quê?**

* Rápida prototipação
* Grid system robusto
* Consistência visual

---

### 🔐 GitHub API (REST)

Fonte de dados da aplicação.

**Por quê?**

* Simples de consumir
* Ideal para casos diretos (GET de usuários/repos)

---

## 📈 Funcionalidades

* 🔍 Busca de usuário do GitHub
* 👤 Exibição de perfil (avatar, bio, seguidores)
* 📦 Listagem de repositórios
* ⭐ Ordenação por estrelas (asc/desc)
* 📄 Tela de detalhes do repositório
* 🔗 Link direto para o GitHub
* ⬅️ Navegação com botão de voltar

---

## 🔐 Configuração do Token (.env)

### Por que usar token?

A API pública do GitHub possui limite de requisições baixo sem autenticação.

Com token:

* Limite maior
* Mais estabilidade

---

### Como gerar um token

1. Acesse:
   👉 https://github.com/settings/tokens

2. Clique em:
   **"Generate new token (classic)"**

3. Selecione:

* `public_repo` (já suficiente para este projeto)

4. Copie o token gerado

5. Adicione no `.env`:

```
VITE_GITHUB_TOKEN=seu_token_aqui
```

---

## 🚀 Melhorias Futuras

### 1. React Query (TanStack Query)

**Por quê?**

* Cache automático
* Evita requisições repetidas
* Melhor gerenciamento de loading e erro

---

### 2. Skeleton Loading

**Por quê?**

* UX superior
* Evita layout “piscando”

---

### 3. Paginação de Repositórios

**Por quê?**

* Performance
* Evita carregar listas grandes

---

### 4. Arquitetura limpa (Clean Architecture)

Separar responsabilidades:

```
hooks/
services/
mappers/
```

**Por quê?**

* Escalabilidade
* Manutenibilidade

---

### 5. Testes (Vitest + Testing Library)

**Por quê?**

* Confiabilidade
* Segurança para refatorações

---

### 6. Substituir Bootstrap (opcional)

Sugestões:

* Tailwind + Shadcn

**Por quê?**

* Design moderno
* Maior controle visual

---

## 🧩 Evoluções possíveis

* Integração com GraphQL API
* Favoritar repositórios (localStorage)
* Histórico de buscas
* Dark/Light mode toggle

---

## 📄 Licença

Este projeto é apenas para fins de estudo e avaliação técnica.
