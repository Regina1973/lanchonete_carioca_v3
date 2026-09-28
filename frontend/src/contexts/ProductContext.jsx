// src/contexts/ProductContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ProductContext = createContext();

export function useProducts() {
  return useContext(ProductContext);
}

export default function ProductProvider({
  children,
}) {
  const [products, setProducts] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("all");

  useEffect(() => {
    const savedProducts =
      localStorage.getItem(
        "lc_products"
      );

    if (savedProducts) {
      setProducts(
        JSON.parse(savedProducts)
      );
      return;
    }

    const initialProducts = [
      {
        id: crypto.randomUUID(),
        name: "X-Bacon",
        description:
          "Hambúrguer artesanal",
        category: "Lanches",
        price: 22.9,
        active: true,
      },
      {
        id: crypto.randomUUID(),
        name: "X-Tudo",
        description:
          "Completo da casa",
        category: "Lanches",
        price: 29.9,
        active: true,
      },
      {
        id: crypto.randomUUID(),
        name: "Coca-Cola",
        description:
          "Lata 350ml",
        category: "Bebidas",
        price: 7,
        active: true,
      },
    ];

    setProducts(initialProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "lc_products",
      JSON.stringify(products)
    );
  }, [products]);

  const categories = useMemo(() => {
    return [
      "all",
      ...new Set(
        products.map(
          product =>
            product.category
        )
      ),
    ];
  }, [products]);

  const filteredProducts =
    products.filter(product => {
      const matchSearch =
        product.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        selectedCategory === "all" ||
        product.category ===
          selectedCategory;

      return (
        matchSearch &&
        matchCategory &&
        product.active
      );
    });

  const addProduct = product => {
    setProducts(prev => [
      ...prev,
      {
        ...product,
        id: crypto.randomUUID(),
      },
    ]);
  };

  const updateProduct = (
    id,
    updatedData
  ) => {
    setProducts(prev =>
      prev.map(product =>
        product.id === id
          ? {
              ...product,
              ...updatedData,
            }
          : product
      )
    );
  };

  const deleteProduct = id => {
    setProducts(prev =>
      prev.filter(
        product =>
          product.id !== id
      )
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        categories,
        search,
        setSearch,
        selectedCategory,
        setSelectedCategory,
        addProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}