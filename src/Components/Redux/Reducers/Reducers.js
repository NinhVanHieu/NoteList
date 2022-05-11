import { ADD_LIST } from "../Constants/Constants";
import { DELETE_LIST } from "../Constants/Constants";
import { REMOVE_LIST } from "../Constants/Constants";
import { EDIT_LIST } from "../Constants/Constants";
import { UPDATE_LIST } from "../Constants/Constants";
import { SEARCH_LIST } from "../Constants/Constants";

const initial = {
  content: [],
  id: "",
  editId: "",
  search: {
    nameSearch: "",
    status: "All",
  },
};
export const reducers = (state = initial, action) => {
  switch (action.type) {
    case ADD_LIST:
      console.log(action.payload);
      state = { ...state, content: [...state.content, action.payload] };
      return state;
    case DELETE_LIST:
      state = { ...state, id: action.payload };
      return state;
    case REMOVE_LIST:
      state = {
        ...state,
        content: [
          ...state.content.filter((item) => item.id !== action.payload),
        ],
      };
      return state;
    case EDIT_LIST:
      state = { ...state, editId: action.payload };
      return state;
    case UPDATE_LIST:
      state = {
        ...state,
        content: [
          ...state.content.map((item) => {
            return item.id === action.payload.id ? action.payload : item;
          }),
        ],
      };
      return state;
    case SEARCH_LIST:
      console.log(action.payload);
      state = { ...state, search: action.payload };
      return state;
    default:
      return state;
  }
};
