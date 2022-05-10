import React from "react";
import { combineReducers } from "redux";
import { reducers } from "./Reducers";

const Reducers = combineReducers({
  list: reducers,
});
export default Reducers;
