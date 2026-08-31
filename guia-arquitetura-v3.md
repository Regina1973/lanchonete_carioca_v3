Clientes



Inicialmente simples.





1. {
2. &#x20; "\_id": "",
3. &#x20; "nome": "",
4. &#x20; "telefone": "",
5. &#x20; "email": ""
6. }



\----------------------------------------------------



Vendas



Collection principal.





1. {
2. &#x20; "\_id": "",
3. &#x20; "numeroVenda": "",
4. &#x20; "clienteId": "",
5. &#x20; "valorTotal": 85.90,
6. &#x20; "formaPagamento": "PIX",
7. &#x20; "status": "FINALIZADA"
8. }







Item da Venda



1. {
2. &#x20; "produtoId": "",
3. &#x20; "quantidade": 2,
4. &#x20; "precoUnitario": 18.90
5. }

\--------------------------------------------------------



Financeiro



Receitas



{

&#x20; "\_id": "",

&#x20; "categoria": "VENDA",

&#x20; "valor": 89.90

}



Despesas



{

&#x20; "\_id": "",

&#x20; "categoria": "ALUGUEL",

&#x20; "valor": 2500

}





Categorias:



1. ALUGUEL
2. ENERGIA
3. AGUA
4. INTERNET
5. SALARIOS
6. FORNECEDORES
7. IMPOSTOS
8. OUTROS



Dashboard

Rotas:

1. GET /dashboard/today
2. 
3. GET /dashboard/month
4. 
5. GET /dashboard/year





Retorno:

{

&#x20; "faturamentoDia": 1200,

&#x20; "ticketMedio": 28,

&#x20; "clientes": 48,

&#x20; "lucroEstimado": 380

}



\-------------------------------------------------------



Relatórios

Produtos Mais Vendidos



GET /reports/top-products



\---------------------------------------------------------

Desperdício



GET /reports/waste

\--------------------------------------------------------

Estoque Baixo



GET /reports/low-stock

\------------------------------------------------------

Lucro Mensal



GET /reports/profit





\------------------------------------------------------



Middlewares



1. auth.middleware
2. 
3. roles.middleware
4. 
5. error.middleware
6. 
7. validation.middleware
8. 
9. logger.middleware



\-----------------------------------------------------

Variáveis de Ambiente



PORT=3000



MONGO\_URI=



JWT\_SECRET=



JWT\_EXPIRES=1d



REFRESH\_SECRET=

\-----------------------------------------------------



Docker



1. backend
2. mongo
3. mongo-express



\---------------------------------------------------



Entidades que teremos prontas na versão 80%



✅ Autenticação



✅ Usuários



✅ Produtos



✅ Estoque



✅ Movimentação de Estoque



✅ Fornecedores



✅ Avaliação de Fornecedores



✅ Compras



✅ Clientes



✅ Vendas



✅ Financeiro



✅ Dashboard



✅ Relatórios



✅ Logs



✅ Controle de Permissões



\------------------------------------------------------

O que fica para a versão 2.0

* WhatsApp
* Delivery
* Programa de Fidelidade
* Integração iFood
* Emissão Fiscal
* Multiunidade
* Aplicativo Mobile
* IA para previsão de estoque



Essa base já sustenta uma lanchonete real e permite começar o frontend sem precisar refatorar o backend depois.

