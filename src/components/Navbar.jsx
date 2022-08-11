import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router";
// import { DashboardIcon } from "@mui/icons-material/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const handlePost = () => {
    navigate("/post");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <DashboardIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AUTHOBAHN
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button onClick={handleClick} color="inherit">
            Dashboard
          </Button>
          <Button onClick={handlePost} color="inherit">
            Post
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
