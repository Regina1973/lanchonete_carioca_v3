export default function Orders() {
  const orders = [];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Meus Pedidos
      </h1>

      <div className="space-y-4">
        {orders.map(order => (
          <div
            key={order.id}
            className="bg-white rounded-xl shadow p-4"
          >
            <h3 className="font-bold">
              Pedido #{order.id}
            </h3>

            <p>{order.status}</p>

            <p>R$ {order.total}</p>
          </div>
        ))}
      </div>
    </div>
  );
}