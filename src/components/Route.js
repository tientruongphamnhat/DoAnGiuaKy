import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GameWithBot from '../containers/GameWithBot';
import GameWithOthers from '../containers/GameWithOthers';
import Login from '../containers/Login';
import Register from './Register';
import Home from '../containers/Home';

class PVRoute extends React.Component {
  PrivateRoute = ({ children }) => {
    const { user } = this.props;
    return (
      <Route
        render={({ location }) =>
          Object.keys(user).length > 1 ? (
            children
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
        <this.PrivateRoute path="/GameWithBot">
          <GameWithBot />
        </this.PrivateRoute>
        <this.PrivateRoute path="/GameWithOthers">
          <GameWithOthers />
        </this.PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
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
