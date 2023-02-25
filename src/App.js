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
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./Contexts/ThemeContext";

import { light, dark } from "./components/Styles/Theme.styled";
import { GlobalStyles } from "./components/Styles/Global";
import { ThemeHero } from "./components/Styles/PageContent.styled";
import { useDispatch } from "react-redux";
import { getProperties } from "./actions/properties";
import {   useFilterContext } from "./Contexts/FilterContext";
import { propertyData } from "./constants/data";
import PropertiesPage from "./Pages/PropertiesPage";

const App = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState(light);
  const { filterItems, dispatch } = useFilterContext()


  const dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getProperties())
  }, [])
 

  return (
    <ThemeProvider theme={darkMode}>
      <GlobalStyles />
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/properties" element={<PropertiesPage />}></Route>
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
