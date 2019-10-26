const initialState = [
  {
    squares: Array(400).fill(null),
    location: null
  }
];

const history = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHECK':
      return [
        ...state,
        {
          squares: action.payload.squares,
          location: action.payload.location
        }
      ];
    case 'CHANGE_HISTORY':
      return action.payload.history;
    default:
      return state;
  }
};

export default history;
