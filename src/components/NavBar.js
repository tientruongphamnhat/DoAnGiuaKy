import React from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  handleLogout = () => {
    const { logOut } = this.props;
    logOut();
  };

  render() {
    const { user } = this.props;
    if (Object.keys(user).length <= 1) {
      return (
        <Navbar variant="primary">
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Nav>
            <Nav.Link>
              <Link to="/register">Register</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
        </Navbar>
      );
    }
    return (
      <Navbar variant="primary">
        <Navbar.Brand>
          <Link to="/">Home</Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/game">PlayWithBot</Link>
          </Nav.Link>
        </Nav>
        <Nav className="mr">
          <Button onclick={this.handleClick}>Logout</Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
