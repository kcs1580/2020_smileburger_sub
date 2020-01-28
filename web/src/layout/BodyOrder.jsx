import React, { useState, Fragment, useEffect } from "react";
// import BodyOrderHedaer from "./BodyOrderHedaer";
import BodyOrderChoiceList from "./BodyOrderChoiceList";
import BugerList from "../components/BugerList";
import SideList from "../components/SideList";
import BeverageList from "../components/BeverageList";
import { makeStyles, AppBar, Toolbar, Grid, Paper } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginTop: "120px",
    height: "120px"
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    height: "80px",
    width: "80px"
  },
  paper: {
    textAlign: "center",
    fontSize: "50px"
  },
  menuContext: {
    marginTop: "240px",
    height: "1020px"
  }
}));

const BodyOrder = () => {
  const classes = useStyles();
  const [list, setList] = useState(0);
  const menus = [
    { id: 0, text: "버거" },
    { id: 1, text: "사이드" },
    { id: 2, text: "음료" }
  ];
  const menuList = menus.map(menu => (
    <Grid item xs={2} key={menu.id}>
      <Paper className={classes.paper}>{menu.text}</Paper>
    </Grid>
  ));

  useEffect(() => (
    <BrowserRouter>
      <Route path="/order/buger" component={BugerList} />
    </BrowserRouter>
  ));

  return (
    <Fragment>
      <AppBar
        position="fixed"
        className={classes.appBar}
        style={{ backgroundColor: "yellow" }}
      >
        <Toolbar style={{ height: "120px" }}>
          <Grid container spacing={4} justify="center">
            {menuList}
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.menuContext} id="testMiddle">
        {/* <BugerList /> */}
        <BrowserRouter>
          <Switch>
            <Route exact path="/order/buger" component={BugerList} />
            <Route path="/order/side" component={SideList} />
            <Route path="/order/beverage" component={BeverageList} />
          </Switch>
        </BrowserRouter>
      </div>
      <BodyOrderChoiceList />
    </Fragment>
  );
};

export default BodyOrder;
