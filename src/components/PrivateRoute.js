import React from "react";
import { Route, Redirect } from "react-router-dom";
import * as authService from '../services/ServiceAuth';

/**
 * Componente responsavel por controle das rotas com acesso restrito.
 *
 * @author bortes
 */
function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authService.isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );
}

export default PrivateRoute;