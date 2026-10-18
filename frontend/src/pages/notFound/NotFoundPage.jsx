import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <main>
      <h1>404</h1>

      <h2>Página não encontrada</h2>

      <p>
        A página que você tentou acessar não existe.
      </p>

      <Link to="/">
        Voltar para a Home
      </Link>
    </main>
  );
}
