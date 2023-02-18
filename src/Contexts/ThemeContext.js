import React, { createContext, useState } from "react";
import { light, dark } from "../components/Styles/Theme.styled";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(dark);
  const toggleDarkMode = () => {
    if (darkMode === light) {
      setDarkMode(dark);
    } else {
      setDarkMode(light);
    }
  };
  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {props.children}
      </ThemeContext.Provider>
    </div>
  );
}

export { ThemeContext, ThemeProvider };
