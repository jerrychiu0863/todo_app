import { combineReducers } from 'redux';

//Reducers
import { title, content, query } from './form';
import { todoLists } from './todoLists';

const reducers = combineReducers({
  title,
  content,
  query,
  lists: todoLists
});

export default reducers;
