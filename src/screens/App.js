import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRouteComponent from '../components/Common/PrivateRoute';
import ScreensAuthLogin from '../screens/Auth/Login';
import ScreensHome from "../screens/Home";

/**
 * Componente responsavel por exibir a aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function App(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={ScreensAuthLogin} />
                <PrivateRouteComponent path="*" component={ScreensHome} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;