import fetch from 'cross-fetch';

export const getUser = user => ({
  type: 'GET_USER',
  payload: {
    user
  }
});

export const loginFailed = message => ({
  type: 'LOGIN_FAILED',
  payload: {
    message
  }
});

export const callAPILogin = (email, password) => {
  let res = true;
  return dispatch => {
    fetch('http://localhost:5000/users/login', {
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
          dispatch(getUser(response));
        } else {
          dispatch(loginFailed(response.message));
        }
      });
  };
};

export const actionslogOut = () => ({
  type: 'LOGOUT',
  payload: {}
});
