import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function navCp() {
  return (
    <Navbar variant="primary">
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
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

export default navCp;
