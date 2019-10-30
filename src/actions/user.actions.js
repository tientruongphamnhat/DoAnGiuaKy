import fetch from 'cross-fetch';

export const receiveUser = user => ({
  type: 'RECEIVE_USER',
  payload: {
    user
  }
});

export const callAPILogin = (email, password) => {
  console.log('-----xx', email);
  console.log('-----yy', password);
  let res = true;
  return dispatch => {
    fetch('https://api-jwt-1612700.herokuapp.com/users/login', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        password
      })
    })
      .then(response => {
        if (response.status !== 200) {
          res = false;
        }
        return response.json();
      })
      .then(response => {
        if (res) {
          dispatch(receiveUser(response));
        }
      });
  };
};

export const logout = () => ({
  type: 'LOGOUT',
  payload: {}
});
