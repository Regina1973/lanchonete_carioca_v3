import { useState } from "react";

export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState("");

  const product = {
    name: "X-Bacon",
    description: "Hambúrguer artesanal",
    price: 22.9,
    image: "/products/xbacon.jpg",
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow overflow-hidden">
        {product.image}

        <div className="p-6">
          <h1 className="text-3xl font-bold">
            {product.name}
          </h1>

          <p className="mt-2 text-gray-600">
            {product.description}
          </p>

          <p className="text-2xl font-bold text-orange-600 mt-4">
            R$ {product.price}
          </p>

          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={() =>
                setQuantity(Math.max(1, quantity - 1))
              }
              className="w-10 h-10 bg-gray-100 rounded"
            >
              -
            </button>

            <span>{quantity}</span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="w-10 h-10 bg-gray-100 rounded"
            >
              +
            </button>
          </div>

          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Observação"
            className="w-full border rounded-xl mt-6 p-3"
          />

          <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-xl">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </div>
  );
}