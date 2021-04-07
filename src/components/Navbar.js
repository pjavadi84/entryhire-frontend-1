import React from "react";
import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
import { NavDropdown, Container, Navbar, Nav } from "react-bootstrap";
// import Home from "../components/Home";

const nav = (props) => {
  return (
    // <nav className="navbar navbar-dark bg-dark">
    // <Navbar className="navbar navbar-dark bg-dark">
    //   <div className="navbar-nav">
    //     <div>
    //       <Link to="/dashboard">Dashboard</Link>
    //     </div>
    //     <br></br>
    //     {/* <Link to="../components/Home.js">Home</Link>
    //      */}
    //     <div>
    //       <Link to="/">Home</Link>
    //     </div>
    //     <div>
    //       <a href="www.google.com">Google</a>
    //     </div>
    //   </div>
    // </Navbar>
    // </nav>

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">EntryHire</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default nav;
