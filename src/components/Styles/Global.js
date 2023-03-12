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
span {
  font-family: "Jost", sans-serif !important;
}
body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Quicksand', sans-serif;
  overflow-x: hidden;
}
.settingsMenuTabContainer a {
 
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Quicksand', sans-serif;

}
.siteText, input, select, textarea, checkbox {
 
  color: ${({ theme }) => theme.colors.text} !important;
  font-family: 'Quicksand', sans-serif !important;

}
.siteText svg{
 
  color: ${({ theme }) => theme.colors.textColored};
  font-family: 'Quicksand', sans-serif;

}

.siteContainerRow, .dropzone-ui.clickable  {
 
  background: ${({ theme }) => theme.colors.background2} !important;
  font-family: 'Quicksand', sans-serif;
  border-bottom:1px solid gray !important
  // border-bottom:1px solid ${({ theme }) => theme.colors.background2} !important;


}
.siteContainerContent  {
 
  background: ${({ theme }) => theme.colors.background} !important;
  font-family: 'Quicksand', sans-serif;

}
.settingsMenuTabContainer a:hover {
  
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
  font-size:'1rem';
 
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
.checkBoxContainer svg {
  color:gray !important
}
.modal button.modalBtn {
  position:fixed;
  bottom:20px;
  margin: 0 auto;
  left:50%;
  transform:translateX(-50%);
padding:10px 50px;
zIndex:1000;
font-family: "Jost", sans-serif !important;
white-space:nowrap
}
label{
  color:gray !important
}
th { 
  color:wheat !important;
  font-weight:600 !important
}
.css-78c6dr-MuiToolbar-root-MuiTablePagination-toolbar { 
  color:wheat !important
}
.css-10by3a5-MuiButtonBase-root-MuiMenuItem-root-MuiTablePagination-menuItem {
  color:white !important
}
`;

