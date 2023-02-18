import React, {useContext} from 'react';
import {ThemeContext} from '../Contexts/ThemeContext';
import Switch from "react-switch";
import { light, dark } from "./Styles/Theme.styled";

function Lightswitch() {
    const {darkMode, toggleDarkMode} = useContext(ThemeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <div className="Lightswitch">
            <p onClick={handleClick}>Switch</p> 
            <Switch onChange={handleClick} checked={darkMode === dark ? true : false}  />         
        </div>
    )
}

// Light Switch design by Jeremy Loyd, US - Public Domain
export default Lightswitch