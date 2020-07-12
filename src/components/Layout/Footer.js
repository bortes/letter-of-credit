import React from "react";
import {
    makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer: {
        borderTop: '1px solid #0000000f',
        color: '#686868',
        lineHeight: '70px',
        paddingLeft: '24px',
        paddingRight: '24px',
    },
}));

/**
 * Componente responsavel por exibir o rodape da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function Footer(props) {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            Copyright &copy; { new Date().getFullYear() } <span>SILK ROAD VAULT</span>. All rights reserved.
        </footer>
    );
}

export default Footer;