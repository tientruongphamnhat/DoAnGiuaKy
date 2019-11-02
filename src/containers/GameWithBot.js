import { connect } from 'react-redux';
import GameWithBot from '../components/GameWithBot';

import {
  changeHistory,
  addCheck,
  changeStepNumber,
  setXIsNext,
  setWin,
  sort
} from '../actions/gameWithBot';

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  win: state.setWin,
  isAscending: state.sort
});

const mapDispatchToProps = dispatch => ({
  changeStepNumber: stepNumber => dispatch(changeStepNumber(stepNumber)),
  addCheck: (squares, localtion) => dispatch(addCheck(squares, localtion)),
  changeHistory: history => dispatch(changeHistory(history)),
  setWin: win => dispatch(setWin(win)),
  sort: () => dispatch(sort()),
  setXIsNext: xIsNext => dispatch(setXIsNext(xIsNext))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameWithBot);
