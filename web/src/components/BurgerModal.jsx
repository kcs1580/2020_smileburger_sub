import React, { useState } from "react";
import {
  makeStyles,
  CardMedia,
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  IconButton,
  Grid,
  Paper
} from "@material-ui/core";
import { CancelOutlined } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  dialogTitle1: {
    backgroundColor: "red",
    width: "840px",
    color: "white",
    padding: 0
  },
  dialogBody1: {
    display: "flex",
    width: "840px",
    padding: 0
  },
  dialogTitle2: {
    backgroundColor: "red",
    width: "900px",
    color: "white",
    padding: 0
  },
  dialogBody2: {
    display: "flex",
    width: "900px",
    padding: 0
  },
  details: {
    display: "flex",
    flexDirection: "column",
    paddingRight: 20
  },
  img: {
    marginLeft: 40,
    marginRight: 40,
    width: 350
  },
  btnGridHeight: {
    height: 180
  },
  btnSingle: {
    color: "white",
    background: "red",
    height: 100,
    width: 200
  },
  btnSet: {
    color: "white",
    background: "yellow",
    height: 100,
    width: 200
  },
  btnPosition: {
    textAlign: "center",
    paddingTop: 50
  }
}));

const BurgerMoal = ({ burger }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onClickIncCnt = () => {
    setCount(() => count + 1);
  };

  const onClickdecCnt = () => {
    setCount(() => {
      if (count > 2) {
        return count - 1;
      } else {
        return 1;
      }
    });
  };

  const [openSingle, setOpenSingle] = useState(false);
  const handleClickOpenSingle = () => {
    setOpen(false);
    setOpenSingle(true);
  };
  const handleCloseSingle = () => {
    setOpenSingle(false);
  };

  const [openSet, setOpenSet] = useState(false);
  const handleClickOpenSet = () => {
    setOpen(false);
    setOpenSet(true);
  };
  const handleCloseSet = () => {
    setOpenSet(false);
  };

  return (
    <div>
      <CardMedia
        className={classes.cardMedia}
        image={burger.img}
        title={burger.title}
        onClick={handleClickOpen}
      />
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {burger.title}
      </Button> */}

      {/* 메뉴선택 모달 */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogTitle1}>
          <Typography variant="h4" style={{ paddingLeft: 25 }}>
            {burger.title}
            <IconButton style={{ color: "white", paddingLeft: 625 }}>
              <CancelOutlined onClick={handleClose} style={{ fontSize: 45 }} />
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent className={classes.dialogBody1}>
          <img src={burger.img} alt={burger.title} className={classes.img} />
          <Typography component="h6" variant="h6" className={classes.details}>
            <p>조리시간: {burger.cooking_time}분</p>
            <p>{burger.description}</p>
          </Typography>
        </DialogContent>
        <Grid container className={classes.btnGridHeight}>
          <Grid item xs={6} className={classes.btnPosition}>
            <Button
              className={classes.btnSingle}
              variant="contained"
              onClick={handleClickOpenSingle}
            >
              <Typography variant="h5">단품: {burger.price_single}</Typography>
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.btnPosition}>
            <Button
              className={classes.btnSet}
              variant="contained"
              onClick={handleClickOpenSet}
            >
              <Typography variant="h5">세트: {burger.price_set}</Typography>
            </Button>
          </Grid>
        </Grid>
      </Dialog>

      {/* 단품선택 모달 */}
      <Dialog
        open={openSingle}
        onClose={handleCloseSingle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="false"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className={classes.dialogTitle2}
        >
          <Typography variant="h4" style={{ paddingLeft: 25 }}>
            단품선택
            <IconButton style={{ color: "white", paddingLeft: 675 }}>
              <CancelOutlined
                onClick={handleCloseSingle}
                style={{ fontSize: 45 }}
              />
            </IconButton>
          </Typography>
        </DialogTitle>
        <DialogContent dividers className={classes.dialogBody2}>
          <img src={burger.img} alt={burger.title} className={classes.img} />
          <Typography component="h6" variant="h6" className={classes.details}>
            <p>조리시간: {burger.cooking_time}분</p>
            <p>{burger.description}</p>
            <p></p>
          </Typography>
        </DialogContent>
        <Grid container>
          <Grid item xs={6}>
            <Paper elevation={0} style={{ textAlign: "center" }}>
              <Button onClick={onClickdecCnt}>-</Button>
              {count}
              <Button onClick={onClickIncCnt}>+</Button>
            </Paper>
          </Grid>
          <Grid item xs={5}>
            <Paper elevation={0} style={{ textAlign: "Right" }}>
              {burger.price_single}
            </Paper>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Dialog>

      {/* 세트선택 모달 */}
      <Dialog
        open={openSet}
        onClose={handleCloseSet}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <Typography variant="h1">세트 모달</Typography>
      </Dialog>
    </div>
  );
};

export default BurgerMoal;
