import { ProductContext } from "./useProducts";

export function ProductProvider({ children, products = [] }) {
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}
