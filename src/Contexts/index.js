
import { combineComponents } from '../Utils/CombineComponents';
import { ThemeProvider } from './ThemeContext';


export const AppContextProvider = combineComponents(
  ThemeProvider,
 
);