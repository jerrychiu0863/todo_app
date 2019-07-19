import { combineReducers } from "redux";

//Reducers
import { title, content } from "./form";
import { todoLists } from "./todoLists";

const reducers = combineReducers({
  title,
  content,
  lists: todoLists
});

export default reducers;
