import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home";

import { ThemeContainer } from "./components/Styles/ThemeSwitching.styled";
import { ThemeProvider } from "styled-components";
import { useContext, useState } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";

import { light, dark } from "./components/Styles/Theme.styled";
import { GlobalStyles } from "./components/Styles/Global";
import { ThemeHero } from "./components/Styles/PageContent.styled";

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyles />
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

function PrivateOutlet() {
  let user = JSON.parse(localStorage.getItem("profile"));

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default App;
