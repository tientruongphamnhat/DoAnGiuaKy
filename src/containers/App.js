import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Game from './Game';
import Login from './Login';
import Register from '../components/Register/index';
import Home from '../components/Home/index';
import Nav from '../components/NavBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Nav>Nav</Nav>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route path="/Game" render={() => <Game />} />
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </>
    );
  }
}

export default App;
