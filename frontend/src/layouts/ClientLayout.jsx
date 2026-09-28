import { Outlet } from "react-router-dom";

export default function ClientLayout() {
  return (
    <div>
      <h1>Lanchonete Carioca</h1>
      <Outlet />
    </div>
  );
}