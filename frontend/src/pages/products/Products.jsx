import ProductCard from "../../components/ProductCard";
import { useProducts } from "../../context/useProducts";

export default function Products() {
  const products = useProducts();

  return (
    <main>
      <h1>Catálogo de produtos</h1>
      {products.length === 0 ? (
        <p>Não há produtos disponíveis no momento.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </main>
  );
}
