const initialState = true;

const sort = (state = initialState, action) => {
  switch (action.type) {
    case 'SORT':
      return !state;
    default:
      return state;
  }
};

export default sort;
