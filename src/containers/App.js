import React from 'react';
import PVRoute from './Route';
import Nav from './NavBar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <Nav>Nav</Nav>
        <PVRoute />
      </>
    );
  }
}

export default App;
