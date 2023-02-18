import React, { useContext } from 'react'
import { ThemeContext } from '../../Contexts/ThemeContext';
import { light, dark } from "../../components/Styles/Theme.styled";


const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div>Header
       {darkMode === light ? "light" : "dark"}


    </div>
  )
}

export default Header