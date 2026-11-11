import { Link, Route, Routes } from "react-router-dom";
import Products from "../pages/products/Products";
import ProductDetail from "../pages/products/ProductDetail";

export default function AppRoutes() {
  return (
    <>
      <nav aria-label="Navegação principal">
        <Link to="/">Home</Link>{" "}
        <Link to="/products">Catálogo</Link>{" "}
        <Link to="/categories">Categorias</Link>{" "}
        <Link to="/orders">Pedidos</Link>
      </nav>
      <Routes>
        <Route path="/" element={<main><h1>Home</h1><Link to="/products">Ver catálogo</Link></main>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/categories" element={<main><h1>Categorias</h1><p>Em breve.</p></main>} />
        <Route path="/orders" element={<main><h1>Pedidos</h1><p>Em breve.</p></main>} />
        <Route path="*" element={<main><h1>Página não encontrada</h1><Link to="/">Voltar à Home</Link></main>} />
      </Routes>
    </>
  );
}
