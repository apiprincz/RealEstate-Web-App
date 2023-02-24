
import { combineComponents } from '../Utils/CombineComponents';
import { FilterProvider } from './FilterContext';
import { MenuProvider } from './MenuContext';
import { ThemeProvider } from './ThemeContext';



export const AppContextProvider = combineComponents(
  ThemeProvider,MenuProvider, FilterProvider
 
);