export default function Checkout() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Checkout
      </h1>

      <form className="space-y-4">
        <input
          placeholder="Nome"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Telefone"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Rua"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Número"
          className="w-full border p-3 rounded-xl"
        />

        <input
          placeholder="Bairro"
          className="w-full border p-3 rounded-xl"
        />

        <select className="w-full border p-3 rounded-xl">
          <option>Pix</option>
          <option>Dinheiro</option>
          <option>Crédito</option>
          <option>Débito</option>
        </select>

        <textarea
          placeholder="Observações"
          className="w-full border p-3 rounded-xl"
        />

        <button className="w-full bg-green-600 text-white p-4 rounded-xl">
          Confirmar Pedido
        </button>
      </form>
    </div>
  );
}