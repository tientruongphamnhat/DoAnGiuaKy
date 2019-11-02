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
    if (Object.keys(user).length > 1) {
      return (
        <Navbar variant="primary">
          <Navbar.Brand>
            <Link to="/">Home</Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/GameWithBot">GameWithBot</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/GameWithOthers">GameWithOthers</Link>
            </Nav.Link>
          </Nav>
          <Nav className="mr">
            <span className="mt-2 mr-2">{user.user.name}</span>
            <Button onClick={this.handleLogout}>Logout</Button>
          </Nav>
        </Navbar>
      );
    }
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
}

export default NavBar;
