// src/contexts/OrderContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const OrderContext = createContext();

export function useOrders() {
  return useContext(OrderContext);
}

export default function OrderProvider({
  children,
}) {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "lc_orders"
      );

    if (saved) {
      setOrders(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "lc_orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  const createOrder = ({
    customer,
    items,
    total,
    paymentMethod,
    address,
  }) => {
    const order = {
      id: crypto.randomUUID(),
      customer,
      items,
      total,
      paymentMethod,
      address,
      status: "Recebido",
      createdAt:
        new Date().toISOString(),
    };

    setOrders(prev => [
      order,
      ...prev,
    ]);

    return order;
  };

  const updateStatus = (
    id,
    status
  ) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === id
          ? {
              ...order,
              status,
            }
          : order
      )
    );
  };

  const cancelOrder = id => {
    updateStatus(
      id,
      "Cancelado"
    );
  };

  const getOrder = id =>
    orders.find(
      order => order.id === id
    );

  return (
    <OrderContext.Provider
      value={{
        orders,
        createOrder,
        updateStatus,
        cancelOrder,
        getOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}