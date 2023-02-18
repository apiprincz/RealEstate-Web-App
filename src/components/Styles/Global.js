import { createGlobalStyle } from "styled-components";
import Bg1 from "../../../src/images/bg1.jpg";
import * as theme from "./Theme.styled";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Quicksand', sans-serif;
  overflow-x: hidden;
}

// theme buttons color
.light {
  background-color: ${theme.light.colors.header};
}
.dark {
  background-color: ${theme.dark.colors.header};
}


// active theme
.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
}
//all icons
 .icon {
  color:${({ theme }) => theme.colors.lineColor}
}
 .searchInput >div > input {
  color:${({ theme }) => theme.colors.inputColor};
  font-size:'0.9rem';
 
  padding:10px;
  font-family: 'Quicksand', sans-serif;
  
}
 .searchInput{
  border-bottom:1px solid ${({ theme }) => theme.colors.lineColor} !important;
}

`;

