
import { combineComponents } from '../Utils/CombineComponents';
import { FilterProvider } from './FilterContext';
import { MenuProvider } from './MenuContext';
import { SortProvider } from './SortContext';
import { ThemeProvider } from './ThemeContext';



export const AppContextProvider = combineComponents(
  ThemeProvider,MenuProvider, FilterProvider, SortProvider
 
);