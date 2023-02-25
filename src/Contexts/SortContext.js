import React, { createContext, useReducer, useContext } from "react";

export const SortContext = createContext();

// Initial state
const initialItems = {
  sortBy: "",
  sortByGrid: false,
  sortByList: false,
  sortByLocation: false,
};

// Actions
export const SET_SORT_BY = "SET_SORT_BY";
export const SET_SORT_BY_GRID = "SET_SORT_BY_GRID";
export const SET_SORT_BY_LIST = "SET_SORT_BY_LIST";
export const SET_SORT_BY_LOCATION = "SET_SORT_BY_LOCATION";

// Action creators
export function setSortBy(e) {
  // e.preventDefault();

  return { type: SET_SORT_BY, payload: e };
}
export function setSortByGrid(e) {
  // e.preventDefault();

  return { type: SET_SORT_BY_GRID, payload: e };
}
export function setSortByList(e) {
  // e.preventDefault();

  return { type: SET_SORT_BY_LIST, payload: e };
}
export function setSortByLocation(e) {
  // e.preventDefault();

  return { type: SET_SORT_BY_LOCATION, payload: e };
}

// Reducer
export function sortReducer(state = { ...initialItems }, action) {
  switch (action.type) {
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };

    case SET_SORT_BY_GRID:
      console.log("sort", action.payload);

      return { ...state, propertyType: action.payload };

    case SET_SORT_BY_LIST:
      return { ...state, sortByList: action.payload };

    case SET_SORT_BY_LOCATION:
      console.log("sort", action.payload);

      return { ...state, location: action.payload };

    default:
      return state;
  }
}

function SortProvider(props) {
  const [sortItems, dispatch] = useReducer(sortReducer, initialItems);
  const sortData = { sortItems, dispatch };

  return <SortContext.Provider value={sortData} {...props} />;
}

function useSortContext() {
  return useContext(SortContext);
}

export { SortProvider, useSortContext };
