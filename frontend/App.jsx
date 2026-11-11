import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ProductProvider } from "./src/context/ProductContext";
import AppRoutes from "./src/routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <AppRoutes />
      </ProductProvider>
    </BrowserRouter>
  );
}

export default App;
