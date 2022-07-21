import React from "react";
import { AppBar, Box, Button, Toolbar, Typography, Grid } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { keluarDariAplikasi } from "../authentication/firebase";

import logo from "../image/MMovieslogo.png";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariAplikasi();
    navigate("/login");
  };
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#141414" }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item sx>
              <img src={logo} alt="MMovies logo" />
            </Grid>
            <Grid item display="flex">
              <span>
                <Typography variant="body1">Home</Typography>
              </span>
              <span>
                <Typography variant="body1">Series</Typography>
              </span>
              <span>
                <Typography variant="body1">Movies</Typography>
              </span>
              <span>
                <Typography variant="body1">New and Popular</Typography>
              </span>
              <span>
                <Typography variant="body1">My List</Typography>
              </span>
            </Grid>
            <Grid item sx="auto">
              <Button
                color="primary"
                variant="contained"
                onClick={buttonLogoutOnClickHandler}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
