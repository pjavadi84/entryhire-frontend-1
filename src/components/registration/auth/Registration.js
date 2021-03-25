import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    margin: theme.spacing(8),
    padding: theme.spacing(3),
  },
  item: {
    padding: theme.spacing(2),
  },
});

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit(event) {
    console.log("form Submitted");
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const { email, password, password_confirmation } = this.state;

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
                    Add New Partner
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
                <Grid item className={classes.item}>
                  <TextField
                    label="password_confirmation"
                    type="password"
                    onChange={this.handleChange("password_confirmation")}
                    value={password_confirmation}
                    required
                  />
                </Grid>
                <button type="submit">Register</button>
              </form>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Registration.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Registration);
