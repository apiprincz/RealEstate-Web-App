import { FETCH_PROPERTIES } from "../constants/actionTypes";
import * as api from '../api'

export const getProperties = () => async (dispatch) => {
  try {
    const { data } = await api.fetchProperties();
    console.log("textDispatch", true);
    dispatch({ type: FETCH_PROPERTIES, payload: data });
  } catch (error) {}
};

