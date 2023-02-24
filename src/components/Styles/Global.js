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
a,li {
  text-decoration:none
}
li {
  list-style-type:none
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
.css-1d3z3hw-MuiOutlinedInput-notchedOutline {
  border-color: ${({ theme }) => theme.colors.lineColor} !important;
  color: ${({ theme }) => theme.colors.lineColor} !important;
  
}
.css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root{
  color: ${({ theme }) => theme.colors.inputColor2} !important;
  font-size: 0.9rem !important;

}
.inputLabel {
  font-family: "Jost", sans-serif !important;

}
`;

