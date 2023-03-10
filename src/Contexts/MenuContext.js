import React, { createContext, useReducer, useContext } from "react";

export const MenuContext = createContext();

// Initial state
const initialItems = [
  "Extract Menu state to menu context",
  "Implement menu provider"
];

// Actions
export const SHOW_MENU = "SHOW_MENU";
export const HIDE_MENU = "HIDE_MENU";


// Action creators
export function showMenu(e) {
    e.preventDefault()
  return { type: SHOW_MENU };
}

export function hideMenu(index) {
  return { type: HIDE_MENU };
}



// Reducer
export function menuReducer(state = { settingsMenu: false }, action) {
  switch (action.type) {
    case SHOW_MENU:
      return {...state, settingsMenu:true};
    case HIDE_MENU:
        return {...state, settingsMenu:false};

 
    default:
      return state;
  }
}

function MenuProvider(props) {
  const [items, dispatch] = useReducer(menuReducer, initialItems);

  const menuData = { items, dispatch };

  return <MenuContext.Provider value={menuData} {...props} />;
}

function useMenuContext() {
  return useContext(MenuContext);
}

export { MenuProvider, useMenuContext };