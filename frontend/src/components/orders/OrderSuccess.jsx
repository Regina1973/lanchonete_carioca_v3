import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white shadow rounded-2xl p-8 text-center">
        <CheckCircle
          size={64}
          className="mx-auto text-green-500"
        />

        <h1 className="text-3xl font-bold mt-4">
          Pedido Confirmado
        </h1>

        <p className="mt-2">
          Pedido #LC000123
        </p>

        <Link
          to="/tracking/LC000123"
          className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-xl"
        >
          Acompanhar Pedido
        </Link>
      </div>
    </div>
  );
}