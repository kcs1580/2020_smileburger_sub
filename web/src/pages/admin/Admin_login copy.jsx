import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            Sola C
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '80%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const state = {
    id: '',
    password: ''
}

export default function SignIn() {

    const classes = useStyles();

    const [id, password] = useState(state);

    const loginsubmit = () => {
        console.log(`id는 : ${id} \n pw는 : ${password}`);
        if (id == "admin" && password == "pw123") {
            console.log('###############################');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper} >
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="adminid"
                        label="Admin Id"
                        name="adminid"
                        //autoComplete="adminid"
                        autoComplete={state.id}
                        //type="text"
                        //value={state.id}
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        //autoComplete="current-password"
                        autoComplete={state.password}
                    //type="password"
                    //value={state.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={loginsubmit}
                    >
                        Login
                     </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={1}>
                <Copyright />
            </Box>
        </Container>
    );
}