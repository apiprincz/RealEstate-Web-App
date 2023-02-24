import React, { createContext, useReducer, useContext } from "react";

export const FilterContext = createContext();

// Initial state
const initialItems = {
  propertyType: [],
  location: [],
  listing: "",
  price: [],
  area: [],
  room: "",
  bathroom: "",
  propertyAmenities: [],
  search: "",
  didNo: "",
};

// Actions
export const SET_PROPERTY_TYPE = "SET_PROPERTY_TYPE";
export const SET_PROPERTY_TYPE_SINGLE = "SET_PROPERTY_TYPE_SINGLE";
export const SET_LOCATION = "SET_LOCATION";
export const SET_LOCATION_SINGLE = "SET_LOCATION_SINGLE";
export const SET_LISTING = "SET_LISTING";
export const SET_PRICE = "SET_PRICE";
export const SET_AREA = "SET_AREA";
export const SET_ROOM = "SET_ROOM";
export const SET_BATHROOM = "SET_BATHROOM";
export const SET_PROPERTY_AMENITIES = "SET_PROPERTY_AMENITIES";
export const SET_SEARCH = "SET_SEARCH";
export const SET_DID_NO = "SET_DID_NO";

// Action creators
export function setPropertyType(e) {
  // e.preventDefault();

  return { type: SET_PROPERTY_TYPE, payload: e };
}
export function setPropertyTypeSingle(e) {
  // e.preventDefault();

  return { type: SET_PROPERTY_TYPE_SINGLE, payload: e };
}
export function setLocation(e) {
  // e.preventDefault();

  return { type: SET_LOCATION, payload: e };
}
export function setLocationSingle(e) {
  // e.preventDefault();

  return { type: SET_LOCATION_SINGLE, payload: e };
}
export function setListing(e) {
  // e.preventDefault();

  return { type: SET_LISTING, payload: e };
}
export function setPrice(e) {
  // e.preventDefault();

  return { type: SET_PRICE, payload: e };
}
export function setArea(e) {
  // e.preventDefault();

  return { type: SET_AREA, payload: e };
}
export function setRoom(e) {
  // e.preventDefault();

  return { type: SET_ROOM, payload: e };
}
export function setBathroom(e) {
  // e.preventDefault();

  return { type: SET_BATHROOM, payload: e };
}
export function setPropertyAmenities(e) {
  // e.preventDefault();

  return { type: SET_PROPERTY_AMENITIES, payload: e };
}
export function setSearch(e) {
  // e.preventDefault();

  return { type: SET_SEARCH, payload: e };
}
export function setDidNo(e) {
  // e.preventDefault();

  return { type: SET_DID_NO, payload: e };
}

// Reducer
export function filterReducer(state = { ...initialItems }, action) {
  switch (action.type) {
    case SET_PROPERTY_TYPE:
      console.log("statePropertyType", state.propertyType);
      let propertyType = [...state.propertyType];
      console.log("newArray", propertyType);
      var index = propertyType.findIndex((x) => x === action.payload);
      if (index === -1) {
        propertyType.push(action.payload);
      } else {
      console.log("stateProperty2", propertyType)
        
         propertyType =propertyType.splice(index, 1);
         
        
      }

      console.log("stateProperty", propertyType)

      return { ...state, propertyType: propertyType };
   
    case SET_PROPERTY_TYPE_SINGLE:
     
      console.log("stateProperty",action.payload)

      return { ...state, propertyType: [action.payload] };
   
      case SET_LOCATION:
      let location = [...state.location];
      console.log("newArray", location);
      var locationIndex = location.findIndex((x) => x === action.payload);
      if (locationIndex === -1) {
        location.push(action.payload);
      } else {
        const myIndex = location.indexOf(action.payload);
        if (myIndex !== -1) {
          location.splice(myIndex, 1);
        }
      }

      return { ...state, location: location };

      case SET_LOCATION_SINGLE:
     
      console.log("stateProperty",action.payload)

      return { ...state, location: [action.payload] };
   
    
      case SET_LISTING:
      return { ...state, listing: action.payload };
    case SET_PRICE:
      let price = [...state.price];
      console.log("newArray", price);
      var priceIndex = price.findIndex((x) => x === action.payload);
      if (priceIndex === -1) {
        price.push(action.payload);
      } else {
        const myIndex = price.indexOf(action.payload);
        if (myIndex !== -1) {
          price.splice(myIndex, 1);
        }
      }

      return { ...state, price: price };
    case SET_AREA:
      let area = [...state.area];
      console.log("newArray", area);
      var areaIndex = area.findIndex((x) => x === action.payload);
      if (areaIndex === -1) {
        area.push(action.payload);
      } else {
        const myIndex = area.indexOf(action.payload);
        if (myIndex !== -1) {
          area.splice(myIndex, 1);
        }
      }

      return { ...state, area: area };
    case SET_ROOM:
      console.log("propertyType", state.room);

      return { ...state, room: action.payload };
    case SET_BATHROOM:
      console.log("propertyType", state.bathroom);

      return { ...state, bathroom: action.payload };

    case SET_PROPERTY_AMENITIES:
      let propertyAmenities = [...state.propertyAmenities];
      console.log("newArray", propertyAmenities);
      var propertyAmenitiesIndex = propertyAmenities.findIndex(
        (x) => x === action.payload
      );
      if (propertyAmenitiesIndex === -1) {
        propertyAmenities.push(action.payload);
      } else {
        const myIndex = propertyAmenities.indexOf(action.payload);
        if (myIndex !== -1) {
          propertyAmenities.splice(myIndex, 1);
        }
      }

      return { ...state, propertyAmenities: propertyAmenities };
    case SET_SEARCH:
      console.log("propertyType", state.search);

      return { ...state, search: action.payload };

    case SET_DID_NO:
      console.log("propertyType", state.didNo);

      return { ...state, didNo: action.payload };
 
    default:
      return state;
  }
}

function FilterProvider(props) {
  const [filterItems, dispatch] = useReducer(filterReducer, initialItems);
  const filterData = { filterItems, dispatch };

  return <FilterContext.Provider value={filterData} {...props} />;
}

function useFilterContext() {
  return useContext(FilterContext);
}

export { FilterProvider, useFilterContext };
