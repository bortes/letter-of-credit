import React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
} from '@material-ui/core';

import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/More';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Logo from '../../assets/images/logo.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    logo: {
        height: '34px',
        with: '34px',
    },
    toolbar: {
        minHeight: 128,
        alignItems: 'flex-start',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
    },
    title: {
        color: '#27367f',
    },
    search: {
        flexGrow: 2,
    },
}));

/**
 * Componente responsavel por exibir o cabecalho da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function Header(props) {
    const classes = useStyles();

    return (
        <AppBar color="default">
            <Toolbar>

                <IconButton
                    edge="start"
                    aria-label="open drawer"
                >
                    <img src={Logo} alt="logo" className={classes.logo} />
                </IconButton>

                <Typography className={classes.title} variant="h6">SILK ROAD VAULT</Typography>

                <Box className={classes.search}>
                    <IconButton aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                </Box>

                <IconButton aria-label="search" color="inherit">
                    <i className="ti-pencil-alt"></i>
                </IconButton>

                <IconButton aria-label="search" color="inherit">
                    <i className="ti-package"></i>
                </IconButton>

                <IconButton aria-label="search" color="inherit">
                    <i className="ti-bookmark-alt"></i>
                </IconButton>

                <IconButton aria-label="search" color="inherit">
                    <i className="ti-wallet"></i>
                </IconButton>

                <IconButton aria-label="search" color="inherit">
                    <i className="ti-email"></i>
                </IconButton>

                <IconButton aria-label="search" color="inherit">
                    <i className="ti-bell"></i>
                </IconButton>

                <IconButton aria-label="display more actions" edge="end" color="inherit">
                    <Avatar>P</Avatar>
                </IconButton>

            </Toolbar>
        </AppBar>
    );
}

export default Header;