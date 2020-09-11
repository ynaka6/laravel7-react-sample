import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function DefaultHeader(props) {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          React Demo
        </Link>
        <Nav className="ml-auto">
          <Link to="/" className="nav-link">HOME</Link>
          <Link to="/about" className="nav-link">About</Link>
          { props.isAuth ? <a className="nav-link" onClick={props.handleLogout}>Logout</a> : <Link to="/login" className="nav-link">Login</Link> }
        </Nav>
      </Navbar>
    </>
  )
}
