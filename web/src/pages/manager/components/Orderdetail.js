import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles(theme => ({
    Card: {
        height: 300,
        width: 200,
    },
    numbering: {
        fontSize: 30,
    }
}))

const Orderdetail = () => {
    const classes = useStyles();
    const orderlist = [
        {
            "orderNum": 100,
            "menu": "상하이스파이시SET",
            "amount": 1,
            "isEatin": false
        },
        {
            "orderNum": 101,
            "menu": "선데이아이스크림",
            "amount": 1,
            "isEatin": true
        },
        {
            "orderNum": 102,
            "menu": "콘파이",
            "amount": 1,
            "isEatin": true
        },
        {
            "orderNum": 103,
            "menu": "싸이버거",
            "amount": 1,
            "isEatin": false
        },
    ]

    const good = orderlist.map(order => {
        return (
            <Card className={classes.Card} variant="outlined" display="inline">
                <CardContent>
                    <Typography className={classes.numbering} color="textSecondary" align="center">
                        {order.orderNum}
                    </Typography>
                    <h3>{order.menu}</h3>
                    <h4>{order.amount}</h4>
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