import { FETCH_AGENT, FETCH_AGENTS } from "../constants/actionTypes";

const agentReducer = (
  state = [{ isLoading: true, agent: [], agents: [] }],
  action
) => {
  switch (action.type) {
    case FETCH_AGENT:
      return {
        ...state,
        agent: action.payload,
      };
    case FETCH_AGENTS:
      return {
        ...state,
        agents: action.payload,
      };

    default:
      return state;
  }
};

export default agentReducer;
