import { combineReducers } from "redux";

import auth from "./auth"
import properties from "./properties"
import agents from "./agents"


export default combineReducers({
    auth,agents, properties
})