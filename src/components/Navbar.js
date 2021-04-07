import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
// import Home from "../components/Home";

const nav = (props) => {
  return (
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <h1>Navbar</h1>
      <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-nav">
          <Link to="/dashboard">Dashboard</Link>
          {/* <Link to="../components/Home.js">Home</Link>
           */}
          <Link to="/src/components/Home.js">Home</Link>
        </div>
      </Navbar>
    </div>
  );
};

export default nav;
