import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = (theme) => ({
  root: {
    margin: theme.spacing.unit * 8,
    padding: theme.spacing.unit * 3,
  },
  item: {
    padding: theme.spacing.unit * 2,
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
  }

  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <div>
        <div className={classes.root}>
          <Grid container direction="column" alignItems="center">
            <Grid item xs={12}>
              <form>
                <Grid item xs={12}>
                  <Typography
                    className={classes.item}
                    gutterBottom
                    variant="title"
                  >
                    Add New User
                  </Typography>
                </Grid>
                <Grid item className={classes.item}>
                  <TextField
                    label="email"
                    handleChange={this.handleChange("email")}
                    value={email}
                  />
                </Grid>
                <Grid item className={classes.item}>
                  <TextField
                    label="password"
                    handleChange={this.handleChange("password")}
                    value={password}
                  />
                </Grid>
                <Grid item className={classes.item}>
                  <TextField
                    label="password_confirmation"
                    handleChange={this.handleChange("password_confirmation")}
                  />
                </Grid>
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
