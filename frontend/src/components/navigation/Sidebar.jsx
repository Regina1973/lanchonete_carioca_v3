import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="app-sidebar">
      <nav>
        <ul>
          <li><NavLink to="/">Dashboard</NavLink></li>
          <li><NavLink to="/produtos">Produtos</NavLink></li>
          <li><NavLink to="/categorias">Categorias</NavLink></li>
          <li><NavLink to="/estoque">Estoque</NavLink></li>
          <li><NavLink to="/pedidos">Pedidos</NavLink></li>
          <li><NavLink to="/relatorios">Relatórios</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
}