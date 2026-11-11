import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <li>
      <Link to={`/products/${encodeURIComponent(product.id)}`}>{product.nome}</Link>
    </li>
  );
}
