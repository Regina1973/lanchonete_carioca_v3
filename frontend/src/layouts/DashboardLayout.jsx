export default function DashboardLayout({
  children,
}) {
  return (
    <div>
      <header>
        <h1>Lanchonete Carioca</h1>
      </header>

      <div style={{ display: "flex" }}>
        <aside>
          <ul>
            <li>Dashboard</li>
            <li>Produtos</li>
            <li>Categorias</li>
            <li>Estoque</li>
            <li>Pedidos</li>
            <li>Relatórios</li>
          </ul>
        </aside>

        <main>
          {children}
        </main>
      </div>

      <footer>
        <p>Lanchonete Carioca v2.4.4</p>
        <p>Onde o lanche encontra a resenha.</p>
      </footer>
    </div>
  );
}
