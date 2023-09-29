import { combineReducers } from "redux";
import { reducer } from "./reducer";

// In this file we can connect multiple reducers in a global root reducer.
// In large apps we have many reducers so there we need to combine them.
export default combineReducers({
    reducer
})