import React, { Component } from "react";
import Registration from "./registration/auth/Registration";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Registration />
      </div>
    );
  }
}

export default Home;
