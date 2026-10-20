import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="app-navbar">
      <ul className="app-navbar-list">
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/produtos">Produtos</NavLink>
        </li>

        <li>
          <NavLink to="/categorias">Categorias</NavLink>
        </li>

        <li>
          <NavLink to="/estoque">Estoque</NavLink>
        </li>

        <li>
          <NavLink to="/pedidos">Pedidos</NavLink>
        </li>

        <li>
          <NavLink to="/relatorios">Relatórios</NavLink>
        </li>
      </ul>
    </nav>
  );
}