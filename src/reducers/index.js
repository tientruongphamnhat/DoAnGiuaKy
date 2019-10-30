import { combineReducers } from 'redux';
import history from './history';
import sort from './sort';
import stepNumber from './step';
import setWin from './win';
import xIsNext from './xIsNext';
import user from './user';

export default combineReducers({
  stepNumber,
  history,
  sort,
  setWin,
  xIsNext,
  user
});
