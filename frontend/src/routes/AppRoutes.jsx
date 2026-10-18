import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import NotFoundPage from "../pages/notFound/NotFoundPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}