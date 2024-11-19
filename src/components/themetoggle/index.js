import React, { useEffect, useState } from "react";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

const Themetoggle = () => {
  // Obtém o tema atual armazenado no localStorage ou define 'light' como padrão
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Função para alternar o tema
  const themetoggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  // Quando o tema for alterado, atualiza o atributo 'data-theme' do elemento html e armazena no localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Salva o tema no localStorage
  }, [theme]);

  return (
    <div className="nav_ac" onClick={themetoggle}>
      <WiMoonAltWaningCrescent4 />
    </div>
  );
};

export default Themetoggle;
