import CartItem from "./CartItem";

export default function Cart() {
  const items = [];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">
        Meu Carrinho
      </h1>

      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ 0,00</span>
        </div>

        <div className="flex justify-between">
          <span>Entrega</span>
          <span>R$ 5,00</span>
        </div>

        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>R$ 0,00</span>
        </div>
      </div>

      <button className="w-full mt-6 bg-orange-500 text-white p-4 rounded-xl">
        Finalizar Pedido
      </button>
    </div>
  );
}