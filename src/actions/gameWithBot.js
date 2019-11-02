export const addCheck = (squares, location) => ({
  type: 'ADD_CHECK',
  payload: {
    squares,
    location
  }
});

export const changeHistory = history => ({
  type: 'CHANGE_HISTORY',
  payload: {
    history
  }
});

export const changeStepNumber = stepNumber => ({
  type: 'CHANGE_STEPNUMBER',
  payload: {
    stepNumber
  }
});

export const setWin = win => ({
  type: 'SETWIN',
  payload: {
    win
  }
});

export const setXIsNext = xIsNext => ({
  type: 'SETISNEXT',
  payload: {
    xIsNext
  }
});

export const sort = () => ({
  type: 'SORT',
  payload: {}
});
