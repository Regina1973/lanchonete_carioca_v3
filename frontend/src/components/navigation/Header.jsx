import { useTheme } from "../../contexts/ThemeContext";

export default function Header() {
  const { changeTheme } = useTheme();

  return (
    <header>
      <button
        onClick={() => changeTheme("light")}
      >
        Claro
      </button>

      <button
        onClick={() => changeTheme("dark")}
      >
        Escuro
      </button>

      <button
        onClick={() => changeTheme("mono-light")}
      >
        Mono Claro
      </button>

      <button
        onClick={() => changeTheme("mono-dark")}
      >
        Mono Escuro
      </button>
    </header>
  );
}