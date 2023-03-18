import {
  START_LOADING,
  END_LOADING,
  FETCH_PROPERTIES,
} from "../constants/actionTypes";

const propertiesReducer = (
  state = [{ isLoading: true, properties: [] }],
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case FETCH_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };

    default:
      return state;
  }
};

export default propertiesReducer;
