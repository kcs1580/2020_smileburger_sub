import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useDispatch } from 'react-redux'


const useStyles = makeStyles(theme => ({
    Card: {
        height: 300,
        width: 200,
    },
    numbering: {
        fontSize: 30,
    }
}))



const Orderdetail = ({ orderlist }) => {
    const classes = useStyles();
    const good = orderlist.map(order => {
        return (
            <Card className={classes.Card} variant="outlined" display="inline" key={order.orderNum} onClick={() => { console.log("aa") }}>
                <CardContent>
                    <Typography className={classes.numbering} color="textSecondary" align="center">
                        {order.orderNum}
                    </Typography>
                    <h3>{order.itemList.menu}</h3>
                    <h4>{order.itemList.ea}</h4>
                </CardContent>
            </Card>

        )
    })

    return (
        <Container>
            <Grid container justify="space-between">
                {good}
            </Grid>
        </Container>

    )
}

export default Orderdetail