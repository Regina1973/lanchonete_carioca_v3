import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ClientLayout from "../layouts/ClientLayout";

import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import OrderSuccess from "../pages/OrderSuccess";
import OrderTracking from "../pages/OrderTracking";

import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route
          index
          element={<Home />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:id"
          element={<ProductDetail />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

        <Route
          path="/orders"
          element={<Orders />}
        />

        <Route
          path="/orders/success/:id"
          element={<OrderSuccess />}
        />

        <Route
          path="/tracking/:id"
          element={<OrderTracking />}
        />
      </Route>

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/404"
        element={<NotFound />}
      />

      <Route
        path="*"
        element={
          <Navigate
            to="/404"
            replace
          />
        }
      />
    </Routes>
  );
}
