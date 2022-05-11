import { ADD_LIST } from "../Constants/Constants";
import { DELETE_LIST } from "../Constants/Constants";
import { REMOVE_LIST } from "../Constants/Constants";
import { EDIT_LIST } from "../Constants/Constants";
import { UPDATE_LIST } from "../Constants/Constants";
import { SEARCH_LIST } from "../Constants/Constants";

export const addList = (action) => {
  return {
    type: ADD_LIST,
    payload: action,
  };
};
export const deletedList = (action) => {
  return {
    type: DELETE_LIST,
    payload: action,
  };
};
export const removedList = (action) => {
  return {
    type: REMOVE_LIST,
    payload: action,
  };
};
export const editList = (action) => {
  return {
    type: EDIT_LIST,
    payload: action,
  };
};
export const updateList = (id, user) => {
  return {
    type: UPDATE_LIST,
    payload: { id, user },
  };
};
export const searchList = (nameSearch, status) => {
  return {
    type: SEARCH_LIST,
    payload: { nameSearch, status },
  };
};
