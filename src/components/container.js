import React, {useContext} from 'react';
import Lightswitch from '../components/switch';
import {ThemeContext} from '../Contexts/ThemeContext';

function Container() {
    const {darkMode} = useContext(ThemeContext);
    return (
        <div className={darkMode ? `Container Container-dark` : `Container Container-light`}>
       
            <Lightswitch />
        </div>
    )
}

export default Container