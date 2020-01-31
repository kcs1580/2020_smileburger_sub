import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  background: {
    background: "gray",
    height: "660px",
    textAlign: "center"
  },
  text: {
    color: "white",
    padding: "0 auto",
    margin: "0"
  }
}));

const BodyOrderChoiceList = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <h1 className={classes.text}>선택메뉴 보여주고, 결제 컴포넌트 달기</h1>
    </div>
  );
};

export default BodyOrderChoiceList;
