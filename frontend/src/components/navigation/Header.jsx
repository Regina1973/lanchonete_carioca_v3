import Navbar from "./Navbar";
import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { changeTheme } = useTheme();

  return (
    <header className="app-header">
      <div>
        <h1>Lanchonete Carioca</h1>
        <small>Onde o lanche encontra a resenha.</small>
      </div>

      <Navbar />

      <div>
        {/* botões de tema */}
      </div>
    </header>
  );
}