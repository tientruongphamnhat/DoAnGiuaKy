const initialState = null;

const setWin = (state = initialState, action) => {
  switch (action.type) {
    case 'SETWIN':
      return action.payload.win;
    default:
      return state;
  }
};

export default setWin;
