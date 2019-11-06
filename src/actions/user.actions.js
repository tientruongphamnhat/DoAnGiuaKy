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
    fetch('https://btcn6.herokuapp.com/users/login', {
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

export const changeName = (email, name) => {
  let res = true;
  return dispatch => {
    fetch('https://btcn6.herokuapp.com/users/changeName', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        email,
        name
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

export const changePassword = (email, password) => {
  let res = true;
  return dispatch => {
    fetch('https://btcn6.herokuapp.com/users/changePassword', {
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
