import React from "react";
import { red } from "@material-ui/core/colors";
import { Grid, Typography } from "@material-ui/core";
const BurgerModalRequests = props => {
  const onClickPriceChanger = num => {
    props.priceChanger(num);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={1} style={{ background: red[500] }}></Grid>
        <Grid item xs={11} style={{ background: red[100] }}>
          요청사항
        </Grid>
      </Grid>
      {/* 여기서부터 */}
      <Grid container style={{ margin: 0, width: 900, padding: 20 }}>
        <Grid item xs={3} style={{ margin: 0, textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            요청없음
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ margin: 0, textAlign: "center" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            onClick={onClickPriceChanger(4000)}
          >
            피클제거
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ margin: 0, textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            양파제거
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ margin: 0, textAlign: "center" }}>
          <Typography gutterBottom variant="h5" component="h2">
            피클, 양파제거
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default BurgerModalRequests;
