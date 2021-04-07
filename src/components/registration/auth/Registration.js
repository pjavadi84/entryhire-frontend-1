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

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company_name: "",
      contact_name: "",
      zipcode: "",
      website: "",
      about_us: "",
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
    const {
      company_name,
      contact_name,
      zipcode,
      website,
      about_us,
      email,
      password,
      password_confirmation,
    } = this.state;

    axios
      .post(
        "http://localhost:3001/v1/registrations",
        {
          partner: {
            company_name: company_name,
            contact_name: contact_name,
            zipcode: zipcode,
            website: website,
            about_us: about_us,
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    const {
      company_name,
      contact_name,
      zipcode,
      website,
      about_us,
      email,
      password,
      password_confirmation,
    } = this.state;

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
                    Partner Registration
                  </Typography>
                </Grid>

                <Grid item className={classes.item}>
                  <TextField
                    label="company_name"
                    type="text"
                    onChange={this.handleChange("company_name")}
                    value={company_name}
                  />
                </Grid>

                <Grid item className={classes.item}>
                  <TextField
                    label="contact_name"
                    type="contact_name"
                    onChange={this.handleChange("contact_name")}
                    value={contact_name}
                    required
                  />
                </Grid>

                <Grid item className={classes.item}>
                  <TextField
                    label="zipcode"
                    type="integer"
                    onChange={this.handleChange("zipcode")}
                    value={zipcode}
                  />
                </Grid>

                <Grid item className={classes.item}>
                  <TextField
                    label="website"
                    type="text"
                    onChange={this.handleChange("website")}
                    value={website}
                  />
                </Grid>

                <Grid item className={classes.item}>
                  <TextField
                    label="about_us"
                    type="text"
                    onChange={this.handleChange("about_us")}
                    value={about_us}
                  />
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
