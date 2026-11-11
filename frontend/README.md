# React + Vite

## Navegação e produtos

- `/` é a Home provisória e oferece acesso ao catálogo. A futura Landing Page
  deve substituir essa Home, preservando o link para `/products`.
- `/products` usa `src/pages/products/Products.jsx` como catálogo oficial;
  `/products/:id` usa `src/pages/products/ProductDetail.jsx` para detalhes.
  O catálogo renderiza `ProductCard` e ambas as páginas leem o mesmo
  `ProductContext`.
- `/categories` e `/orders` estão reservadas, com páginas provisórias. Rotas
  desconhecidas exibem uma página de não encontrado.
- O `ProductProvider` começa com uma lista vazia e aceita produtos no formato
  `{ id, nome, descricao, preco }`. Ainda não há integração com dados reais:
  o servidor iniciado pelo pacote raiz não registra uma API de produtos, e
  os arquivos de backend existentes referenciam componentes ou dados ausentes.
  O catálogo e os detalhes exibem estados vazios até essa integração existir.
- Não existem, neste checkout, páginas duplicadas de produtos, `DashboardLayout`,
  `ThemeProvider` ou os arquivos de tema mencionados na auditoria. As variáveis
  em `index.css` usam a preferência clara/escura do sistema. A Landing Page
  poderá reutilizá-las; integração com layout e temas adicionais fica pendente.

Para validar o frontend: `npm install`, `npm run lint` e `npm run build` no
diretório `frontend`. Não há infraestrutura de testes automatizados para o
frontend neste checkout.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
