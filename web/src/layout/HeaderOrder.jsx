import React from "react";
import {
  makeStyles,
  Typography,
  AppBar,
  Toolbar,
  Fab
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  appBar: {
    height: "120px"
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    height: "80px",
    width: "80px"
  },
  title: {
    flexGrow: 1
  }
}));

const HeaderOrder = props => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      style={{ backgroundColor: "red" }}
    >
      <Toolbar style={{ height: "120px" }}>
        <Typography
          variant="h6"
          className={classes.title}
          style={{ textAlign: "center" }}
        >
          Head-Order
        </Typography>
        <Fab className={classes.menuButton}>포장</Fab>
        <Fab className={classes.menuButton}>매장</Fab>
        <Fab className={classes.menuButton}>첫화면</Fab>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderOrder;
