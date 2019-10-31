import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Game from '../containers/Game';
import Login from '../containers/Login';
import Register from './Register/index';
import Home from './Home/index';

class PVRoute extends React.Component {
  PrivateRoute = ({ cb }) => {
    const { user } = this.props;
    return (
      <Route
        render={({ location }) =>
          Object.keys(user) > 1 ? (
            cb
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  };

  render() {
    return (
      <Switch>
        <this.PrivateRoute path="/game">
          <Game />
        </this.PrivateRoute>

        <Route exact path="/" render={() => <Home />} />
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}

export default PVRoute;
