import { Link, useParams } from "react-router-dom";
import { useProducts } from "../../context/useProducts";

export default function ProductDetail() {
  const { id } = useParams();
  const product = useProducts().find((item) => String(item.id) === id);

  return (
    <main>
      {product ? (
        <>
          <h1>{product.nome}</h1>
          {product.descricao && <p>{product.descricao}</p>}
          {typeof product.preco === "number" && (
            <p>{product.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
          )}
        </>
      ) : (
        <>
          <h1>Produto não encontrado</h1>
          <p>Este produto não está disponível.</p>
        </>
      )}
      <p><Link to="/products">Voltar ao catálogo</Link></p>
    </main>
  );
}
