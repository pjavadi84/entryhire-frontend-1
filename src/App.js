import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";

// I USED CAPITAL STRINGS FOR LOG STATUS TO MAKE EASIER TO DIFFERENTIATE VARIOUS CONDITIONALS
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      partner: {},
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "successfully Logged in!",
      partner: data.partner,
    });
  }

  handleLogOut() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      partner: {},
    });
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/v1/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "Logged In!!!",
            partner: response.data.partner,
          });
        } else if (
          !response.data.logged_in &
          (this.state.loggedInStatus === "LOGGED_IN")
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            partner: {},
          });
        }
      })
      .catch((error) => console.log("login error", error));
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) => (
                <Home
                  {...props}
                  handleLogin={this.handleLogin}
                  handleLogOut={this.handleLogOut}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />

            <Route
              exact
              path={"/dashboard"}
              render={(props) => (
                <Dashboard
                  {...props}
                  loggedInStatus={this.state.loggedInStatus}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
