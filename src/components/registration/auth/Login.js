import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(8),
    padding: theme.spacing(3),
  },
  item: {
    padding: theme.spacing(2),
  },
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    const { email, password } = this.state;

    axios
      .post(
        "http://localhost:3001/v1/sessions",
        {
          partner: {
            email: email,
            password: password,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        <div className={classes.root}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <form onSubmit={this.handleSubmit}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.item}
                    gutterBottom
                    // variant="title"
                  >
                    Login
                  </Typography>
                </Grid>
                <Grid item className={classes.item}>
                  <TextField
                    label="email"
                    type="email"
                    onChange={this.handleChange("email")}
                    value={email}
                    required
                  />
                </Grid>
                <Grid item className={classes.item}>
                  <TextField
                    label="password"
                    type="password"
                    onChange={this.handleChange("password")}
                    value={password}
                    required
                  />
                </Grid>

                <button type="submit">Login</button>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
