import React from 'react';
import {
    makeStyles,
    Paper,
    Grid,
    Typography,
    Card,
    CardActions,
    CardContent,
    Button,
} from '@material-ui/core';

import { Page } from '../components/Layout';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.disabled,
    },
}));

/**
 * Componente responsavel por exibir a pagina principal da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function Home(props) {
    const classes = useStyles();

    return (
        <Page title="DASHBOARD">
            <Grid container spacing={3}>

                <Grid item xs={12} md={2}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={2}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>xs=12</Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>xs=12</Paper>
                </Grid>
            </Grid>
        </Page>
    );
}

export default Home;