import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
// import Home from "../components/Home";

const nav = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Navbar>
        <div className="navbar-nav">
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <br></br>
          {/* <Link to="../components/Home.js">Home</Link>
           */}
          <div>
            <Link to="/">Home</Link>
          </div>
        </div>
      </Navbar>
    </nav>
  );
};

export default nav;
