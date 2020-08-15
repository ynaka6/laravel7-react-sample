import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default class DefaultHeader extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Link to="/" className="navbar-brand">
            React Demo
          </Link>
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/about" className="nav-link">About</Link>
          </Nav>
        </Navbar>
      </>
    )
  }
}
