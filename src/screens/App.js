import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScreensTraderForm from '../screens/Trader/Form';
import ScreensTraderHome from '../screens/Trader/Home';
import ScreensTraderList from '../screens/Trader/List';
import ScreensSettingsHome from '../screens/Settings/Home';
import ScreensAuthLogin from '../screens/Auth/Login';
import ScreensNotFound from "../screens/NotFound";
import PrivateRoute from '../components/Common/PrivateRoute';

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
                <Route path="/signup" component={() => <h1>SignUp</h1>} />
                <PrivateRoute exact path="/" component={ScreensTraderHome} />
                <PrivateRoute path="/trader/new" component={ScreensTraderForm} />
                <PrivateRoute path="/trader" component={ScreensTraderList} />
                <PrivateRoute path="/settings" component={ScreensSettingsHome} />
                <Route path="*" component={ScreensNotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;