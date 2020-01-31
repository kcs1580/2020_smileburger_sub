import React, { Fragment, useContext } from "react";
import HeaderOrder from "./HeaderOrder";
import BodyOrder from "./BodyOrder";

import { CssBaseline, Container, makeStyles } from "@material-ui/core";
import { CommonContext } from "../context/CommonContext";

const useStyles = makeStyles(theme => ({
  content: {
    margin: "0 auto"
  }
}));

const LayoutOrder = props => {
  const classes = useStyles();
  const {} = useContext(CommonContext);

  return (
    <Fragment>
      <CssBaseline />
      <HeaderOrder />
      <BodyOrder />
    </Fragment>
  );
};

export default LayoutOrder;
