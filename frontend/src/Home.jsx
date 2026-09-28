import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [];

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto p-4">
        <section className="bg-orange-500 text-white rounded-2xl p-10">
          <h1 className="text-3xl font-bold">
            Desconto de 10% no Pix
          </h1>

          <p className="mt-2">
            Aproveite nossas promoções.
          </p>
        </section>

        <input
          type="text"
          placeholder="Buscar produto..."
          className="mt-6 w-full border rounded-xl p-3"
        />

        <h2 className="mt-8 text-2xl font-bold">
          Mais Vendidos
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mt-4">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </>
  );
}