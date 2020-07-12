import React from 'react';
import {
    Box,
    Container,
    makeStyles,
    Typography,
} from '@material-ui/core';

import AuthService from '../../services/ServiceAuth';
import Header from './Header';
import Footer from './Footer';

const useStylesIn = makeStyles({
    root: {
        backgroundColor: '#dddce1',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        '& header': {
            height: '70px',
        },
        '& main': {
            flex: 'auto',
            marginBottom: '20px',
            marginTop: '90px',
            '& h1': {
                fontSize: '32.5px',
                fontWeight: '700',
            }
        },
        '& footer': {
            height: '70px',
        },
    },
});

const useStylesOut = makeStyles({
    root: {
    }
});

/**
 * Componente responsavel por exibir a estrutura padrao da pagina.
 *
 * @param props parametros do componente
 * @author bortes
 */
function Page(props) {
    const classes = useStylesIn();

    return (
        <Box className={classes.root}>
            <Header />
            <Container component="main" maxWidth="xl">
                {typeof props.title === 'string' && (
                    <Typography variant="h3" component="h1">{props.title}</Typography>
                )}
                {props.children}
            </Container>
            <Footer />
        </Box>
    );

    /*
        if (AuthService.isAuthenticated()) {
            return (
                <div className="container-scroller">
                    <HeaderComponent />
    
                    <div className="container-fluid page-body-wrapper">
                        <div className="main-panel w-100">
                            <div className="content-wrapper">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container-scroller">
                    <div className="container-fluid page-body-wrapper full-page-wrapper">
                        <div className="content-wrapper">
                            {props.children}
                        </div>
                    </div>
                </div>
            );
        }
    */
}

export default Page;