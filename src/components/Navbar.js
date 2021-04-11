import React from "react";
import { Link } from "react-router-dom";
// import { Navbar } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
// import Home from "../components/Home";

const nav = (props) => {
  return (
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
