import React, { useState } from "react";
import { Grid, Typography, Paper, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import { BACKEND_API } from "../../config/config";
import { toast } from "react-toastify";
import { loginSuccess } from "../../actions/user";
import logo from '../../assets/images/Aaveg Glyph - Black.png';

export const Login = (props) => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [webmail, setWebmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.user);

  if (user !== null) {
    history.push("/");
  }

  const handleLogin = () => {
    const loginData = {
      email: webmail,
      password: password,
    };

    axios
      .post(BACKEND_API + "/auth/login", JSON.stringify(loginData))
      .then((res) => {
        if (res.status_code === 200) {
          dispatch(loginSuccess(res.message));
          toast.success("logged in/ get from res", {
            position: "bottom-center",
          });
          history.push("/");
        } else {
          toast.error("error/get from res", { position: "bottom-center" });
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message, { position: "bottom-center" });
      });
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid container item direction="row" lg={9} md={9} alignItems="center">
        <Paper elevation={3} className={classes.paper}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            <Grid item>
						  <img src={logo} alt="logo" width={150} />
					  </Grid>
            <Typography variant="h2" component="h2" className={classes.title}>
              Login
            </Typography>
            <TextField
              label="Webmail ID"
              variant="filled"
              size=""
              onChange={(e) => setWebmail(e.target.value)}
              className={classes.TextFields}
            />
            <TextField
              label="Password"
              variant="filled"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.TextFields}
            />
            <Button
              className={classes.Button}
              variant="contained"
              size="large"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};
