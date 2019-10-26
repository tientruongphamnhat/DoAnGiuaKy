const initialState = true;

const xIsNext = (state = initialState, action) => {
  switch (action.type) {
    case 'SETISNEXT':
      return action.payload.xIsNext;
    default:
      return state;
  }
};

export default xIsNext;
