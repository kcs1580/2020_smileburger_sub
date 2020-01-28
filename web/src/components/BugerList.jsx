import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({}));

const BugerList = () => {
  const classes = useStyles();
  return <h1 id="bugerList">버거리스트 보여 줄거야~</h1>;
};

export default BugerList;
