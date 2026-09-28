// src/contexts/CartContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export default function CartProvider({
  children,
}) {
  const [items, setItems] =
    useState([]);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "lc_cart"
      );

    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "lc_cart",
      JSON.stringify(items)
    );
  }, [items]);

  const addItem = (
    product,
    quantity = 1
  ) => {
    setItems(prev => {
      const existing =
        prev.find(
          item =>
            item.id ===
            product.id
        );

      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity +
                  quantity,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  const removeItem = id => {
    setItems(prev =>
      prev.filter(
        item => item.id !== id
      )
    );
  };

  const increaseQuantity = id => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = id => {
    setItems(prev =>
      prev
        .map(item =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          item =>
            item.quantity > 0
        )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const subtotal = useMemo(
    () =>
      items.reduce(
        (acc, item) =>
          acc +
          item.price *
            item.quantity,
        0
      ),
    [items]
  );

  const deliveryFee = 5;

  const total =
    subtotal + deliveryFee;

  const cartCount = items.reduce(
    (acc, item) =>
      acc + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        subtotal,
        deliveryFee,
        total,
        addItem,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}