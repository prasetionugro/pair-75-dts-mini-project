import React, { useState, useEffect } from "react";

import styles from "./LoginOrRegisterForm.module.css";

import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  ThemeProvider,
} from "@mui/material";
import theme from "../themes/theme";

import { useNavigate, Link } from "react-router-dom";

import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";

import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [user, loading] = useAuthState(auth);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };

  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [loading, user, navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "95vh" }}
      >
        <Box className={styles.boxy} component="form" noValidate>
          <TextField
            label="Email"
            type="email"
            variant="filled"
            size="small"
            value={credential.email}
            onChange={textFieldEmailOnChangeHandler}
          />

          <TextField
            label="Password"
            type="password"
            variant="filled"
            size="small"
            value={credential.password}
            onChange={textFieldPasswordOnChangeHandler}
          />

          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={buttonLoginOrRegisterOnClickHandler}
          >
            {loginOrRegister === "login" ? "Login" : "Register Account"}
          </Button>

          {loginOrRegister === "login" ? (
            <Link to="/register">
              <Typography variant="body1">Or do you want Register?</Typography>
            </Link>
          ) : (
            <Link to="/login">
              <Typography variant="body1">Or do you want Login?</Typography>
            </Link>
          )}
        </Box>
      </Grid>
    </ThemeProvider>
  );
};

export default LoginOrRegisterForm;
