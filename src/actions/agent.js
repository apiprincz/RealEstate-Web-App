import { FETCH_AGENT , FETCH_AGENTS} from "../constants/actionTypes";
import * as api from '../api'

export const getAgents = () => async (dispatch) => {
  try {
    const { data } = await api.fetchAgents();
    console.log("textDispatch", true);
    dispatch({ type: FETCH_AGENTS, payload: data });
  } catch (error) {}
};

export const getAgent = (id) => async (dispatch) => {
  try {
    console.log("jdfjjjf", id)
    const { data } = await api.fetchAgent(id);
    console.log("textDispatch", true);
    dispatch({ type: FETCH_AGENT, payload: data });
  } catch (error) {}
};

