import React from "react";
import { FC } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBarProps } from "../interfaces";
import { logout } from "../firebase/auth";

const useStyles = makeStyles((theme: Theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    marginRight: theme.spacing(2),
  },
}));

export const DenseAppBar: FC<AppBarProps> = ({ currentUser }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.button} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Firebase React sample app
          </Typography>
          <div className={classes.grow} />
          <Typography
            className={classes.button}
            variant="subtitle1"
            color="inherit"
            display="block"
          >
            {currentUser?.email}
          </Typography>
          <Button variant="outlined" color="inherit" onClick={() => logout()}>
            Log Out
          </Button>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
