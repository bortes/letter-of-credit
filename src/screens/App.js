import React from 'react';
import {
    CssBaseline,
} from '@material-ui/core';

import Home from './Home';

/**
 * Componente responsavel por exibir a aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function App(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Home />
        </React.Fragment>
    );
}

export default App;