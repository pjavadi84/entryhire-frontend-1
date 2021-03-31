import React, { Component } from "react";
import axios from "axios";
import Login from "./registration/auth/Login";
import Registration from "./registration/auth/Registration";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogOutClick = this.handleLogOutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogOutClick() {
    axios
      .delete("http://localhost:3001/v1/logout", { withCredentials: true })
      .then((response) => {
        this.props.handleLogOut();
      })
      .catch((error) => console.log("logout error", error));
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogOutClick()}>Logout</button>
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
