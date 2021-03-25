import React, { Component } from "react";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };
  }

  render() {
    return <div>Registration goes here</div>;
  }
}

export default Registration;
