import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScreensTraderHome from '../screens/Trader/Home';
import ScreensSettingsHome from '../screens/Settings/Home';
import ScreensAuthLogin from '../screens/Auth/Login';
import ScreensNotFound from "../screens/NotFound";
import PrivateRoute from '../components/PrivateRoute';

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
                <Route exact path="/" component={ScreensAuthLogin} />
                <Route path="/signup" component={() => <h1>SignUp</h1>} />
                <PrivateRoute path="/trader" component={ScreensTraderHome} />
                <PrivateRoute path="/settings" component={ScreensSettingsHome} />
                <Route path="*" component={ScreensNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;