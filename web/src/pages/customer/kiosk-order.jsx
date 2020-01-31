import React from "react";
import Layout from "../../layout/Layout";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LayoutOrder from "../../layout/LayoutOrder";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: "100px",
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  subAppBarBackground: {
    background: "#ffeb3b",
    height: "120px"
  }
}));

const OrderPage = props => {
  const classes = useStyles();

  return (
    // <React.Fragment>
    <LayoutOrder />
  );
};

export default OrderPage;
