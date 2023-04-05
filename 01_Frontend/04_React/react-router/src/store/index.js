import { combineReducers } from 'redux';
import todo from './modules/todo';
import weight from './modules/weight';

export default combineReducers({
  todo,
  weight,
});
