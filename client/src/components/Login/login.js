import React, { useState } from "react";
import { Grid, Typography, Paper, TextField, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import { BACKEND_API } from "../../config";
import { toast } from "react-toastify";
import { loginSuccess } from "../../actions/user";

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
      className={classes.paper}
    >
      <Grid container item direction="column" lg={6} md={6} alignItems="center">
        <Paper elevation={6} className={classes.paper}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="space-between"
          >
            <Typography variant="h2" component="h2" className={classes.title}>
              Login
            </Typography>
            <TextField
              label="Webmail ID"
              variant="outlined"
              onChange={(e) => setWebmail(e.target.value)}
              className={classes.TextFields}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={classes.TextFields}
            />

            <Button
              className={classes.Button}
              variant="contained"
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
