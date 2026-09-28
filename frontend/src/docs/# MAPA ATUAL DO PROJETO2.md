# MAPA ATUAL DO PROJETO

## Informações Gerais

**Projeto:** Sistema de Lanchonete Carioca  
**Data da Auditoria:** ____/____/______  
**Responsável:** Aline Regina Pereira Nunes  
**Versão Atual:** ____________

---

# 1. Estrutura de Pastas

## Status da Estrutura

| Pasta | Existe | Organizada | Observações |
|---------|---------|---------|---------|
| src/api | ⬜ | ⬜ | |
| src/assets | ⬜ | ⬜ | |
| src/components | ⬜ | ⬜ | |
| src/contexts | ⬜ | ⬜ | |
| src/hooks | ⬜ | ⬜ | |
| src/layouts | ⬜ | ⬜ | |
| src/pages | ⬜ | ⬜ | |
| src/routes | ⬜ | ⬜ | |
| src/services | ⬜ | ⬜ | |
| src/utils | ⬜ | ⬜ | |
| src/tests | ⬜ | ⬜ | |

---

# 2. Componentes

## Componentes Existentes

| Componente | Status | Observação |
|------------|---------|------------|
| Button | ⬜ | |
| Input | ⬜ | |
| Modal | ⬜ | |
| Card | ⬜ | |
| Table | ⬜ | |
| Navbar | ⬜ | |
| Sidebar | ⬜ | |
| Loader | ⬜ | |

Legenda:

- ✅ Funcional
- ⚠ Precisa Ajuste
- ❌ Refazer
- 🗑 Remover

---

# 3. Contexts

| Context | Existe | Status | Observação |
|----------|---------|---------|------------|
| AuthContext | ⬜ | ⬜ | |
| UserContext | ⬜ | ⬜ | |
| OrderContext | ⬜ | ⬜ | |
| NotificationContext | ⬜ | ⬜ | |

---

# 4. Rotas

## Rotas Públicas

| Rota | Funciona | Observação |
|--------|--------|--------|
| /login | ⬜ | |
| /register | ⬜ | |
| /forgot-password | ⬜ | |

## Rotas Cliente

| Rota | Funciona | Observação |
|--------|--------|--------|
| /client/dashboard | ⬜ | |
| /client/orders | ⬜ | |
| /client/profile | ⬜ | |

## Rotas Atendente

| Rota | Funciona | Observação |
|--------|--------|--------|
| /attendant/dashboard | ⬜ | |
| /attendant/orders | ⬜ | |

## Rotas Admin

| Rota | Funciona | Observação |
|--------|--------|--------|
| /admin/dashboard | ⬜ | |
| /admin/users | ⬜ | |
| /admin/settings | ⬜ | |

---

# 5. Autenticação

## Checklist

- [ ] Login
- [ ] Logout
- [ ] Persistência de Sessão
- [ ] Recuperação de Usuário
- [ ] PrivateRoute
- [ ] RoleRoute
- [ ] Controle de Perfis
- [ ] Tela de Acesso Negado

### Avaliação

Status:

⬜ Funcional

⬜ Precisa Ajuste

⬜ Refazer

Observações:

________________________________________________

---

# 6. Módulo Cliente

## Funcionalidades

- [ ] Dashboard
- [ ] Criar Pedido
- [ ] Listar Pedidos
- [ ] Detalhes do Pedido
- [ ] Perfil

### Observações

________________________________________________

---

# 7. Módulo Atendente

## Funcionalidades

- [ ] Dashboard
- [ ] Visualizar Pedidos
- [ ] Atualizar Status
- [ ] Histórico

### Observações

________________________________________________

---

# 8. Módulo Admin

## Funcionalidades

- [ ] Dashboard
- [ ] Listar Usuários
- [ ] Criar Usuários
- [ ] Editar Usuários
- [ ] Gerenciar Perfis
- [ ] Configurações

### Observações

________________________________________________

---

# 9. Serviços e API

| Serviço | Existe | Status | Observação |
|----------|----------|----------|----------|
| authService | ⬜ | ⬜ | |
| orderService | ⬜ | ⬜ | |
| userService | ⬜ | ⬜ | |
| api.js | ⬜ | ⬜ | |

### Tratamento de Erros

- [ ] 401
- [ ] 403
- [ ] 404
- [ ] 500
- [ ] Timeout
- [ ] Offline

---

# 10. Qualidade do Código

## Verificações

- [ ] ESLint configurado
- [ ] Prettier configurado
- [ ] Sem código duplicado
- [ ] Sem arquivos órfãos
- [ ] Sem console.log esquecidos
- [ ] Imports organizados

---

# 11. Testes

## Unitários

- [ ] Auth
- [ ] Contexts
- [ ] Hooks
- [ ] Services

## Integração

- [ ] Login
- [ ] Pedidos
- [ ] Usuários
- [ ] Rotas

## Cobertura

- [ ] Acima de 80%

---

# 12. Recursos Avançados

## Implementados

- [ ] Retry Queue
- [ ] Backoff Exponencial
- [ ] Atualização Otimista
- [ ] Lazy Loading
- [ ] Cache
- [ ] Sincronização Offline


# 13. CHECKLIST DE AUDITORIA

## ETAPA 1 - ESTRUTURA

### Pastas

- [ ] assets
- [ ] components
- [ ] contexts
- [ ] hooks
- [ ] layouts
- [ ] modules
- [ ] routes
- [ ] services
- [ ] utils

### Conferir

- [ ] Existem arquivos órfãos
- [ ] Existem pastas vazias
- [ ] Existem componentes duplicados
- [ ] Existem páginas duplicadas

---

## ETAPA 2 - AUTENTICAÇÃO

### AuthContext

- [ ] Login
- [ ] Logout
- [ ] Persistência
- [ ] Recuperação de Sessão
- [ ] Loading
- [ ] Tratamento de erro

### Login

- [ ] Campos funcionam
- [ ] Botão funciona
- [ ] Mensagens de erro
- [ ] Redirecionamento

### Segurança

- [ ] PrivateRoute
- [ ] Controle de acesso
- [ ] Usuário não logado bloqueado

---

## ETAPA 3 - ROTAS

### Públicas

- [ ] /
- [ ] /products
- [ ] /products/:id
- [ ] /cart
- [ ] /checkout
- [ ] /orders
- [ ] /orders/success/:id
- [ ] /tracking/:id
- [ ] /login
- [ ] /forgot-password

### Atendente

- [ ] /attendant
- [ ] /attendant/dashboard
- [ ] /attendant/orders
- [ ] /attendant/orders/:id

### Cozinha

- [ ] /kitchen
- [ ] /kitchen/dashboard
- [ ] /kitchen/preparing
- [ ] /kitchen/completed

### Entregador

- [ ] /delivery
- [ ] /delivery/dashboard
- [ ] /delivery/orders
- [ ] /delivery/orders/:id

### Admin

- [ ] /admin
- [ ] /admin/dashboard
- [ ] /admin/products
- [ ] /admin/categories
- [ ] /admin/orders
- [ ] /admin/users
- [ ] /admin/reports
- [ ] /admin/settings

---

## ETAPA 4 - MÓDULO CLIENTE

### Home

- [ ] Página existe
- [ ] Abre sem erro
- [ ] Layout correto

### Produtos

- [ ] Lista produtos
- [ ] Navega para detalhes

### ProductDetails

- [ ] Exibe produto
- [ ] Adiciona ao carrinho

### Cart

- [ ] Lista itens
- [ ] Aumenta quantidade
- [ ] Diminui quantidade
- [ ] Remove item

### Checkout

- [ ] Captura dados
- [ ] Valida campos
- [ ] Gera pedido

### Orders

- [ ] Lista pedidos

### OrderTracking

- [ ] Mostra status

### OrderSuccess

- [ ] Exibe pedido criado

---

## ETAPA 5 - CONTEXTS

### AuthContext

- [ ] Auditado

### ProductContext

- [ ] Existe
- [ ] Funciona

### CartContext

- [ ] Existe
- [ ] Adiciona item
- [ ] Remove item
- [ ] Atualiza quantidade

### OrderContext

- [ ] Existe
- [ ] Cria pedido
- [ ] Lista pedido
- [ ] Atualiza status

### NotificationContext

- [ ] Existe
- [ ] Funciona

---

## ETAPA 6 - LAYOUTS

### ClientLayout

- [ ] Possui Outlet
- [ ] Possui navegação

### AdminLayout

- [ ] Possui Outlet
- [ ] Possui menu

### AttendantLayout

- [ ] Possui Outlet

### KitchenLayout

- [ ] Possui Outlet

### DeliveryLayout

- [ ] Possui Outlet

---

## ETAPA 7 - ADMIN

### Dashboard

- [ ] Existe
- [ ] Funciona

### Produtos

- [ ] Lista
- [ ] Cadastro
- [ ] Edição

### Categorias

- [ ] Lista
- [ ] Cadastro

### Pedidos

- [ ] Lista
- [ ] Atualiza status

### Usuários

- [ ] Lista
- [ ] Cadastro
- [ ] Edição

### Relatórios

- [ ] Existe

### Configurações

- [ ] Existe

---

## ETAPA 8 - TESTES

- [ ] Login
- [ ] Logout
- [ ] Produtos
- [ ] Carrinho
- [ ] Checkout
- [ ] Pedidos
- [ ] Rotas
- [ ] Admin

---

## ETAPA 9 - LIMPEZA

- [ ] Remover código morto
- [ ] Remover imports não usados
- [ ] Remover console.log
- [ ] Organizar comentários
- [ ] Verificar arquivos órfãos