import React from 'react';
import { Switch } from "react-router-dom";
import PrivateRouteComponent from '../../../components/Common/PrivateRoute';
import ScreensTraderTradeForm from './Form';
import ScreensTraderTradeList from './List';
import ScreensTraderDashboard from '../Dashboard';

/**
 * Componente responsavel por controlar as negociacoes.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderTradeHome(props) {
    return (
        <Switch>
            <PrivateRouteComponent path="/trader/trade/new" component={ScreensTraderTradeForm} />
            <PrivateRouteComponent path="/trader/trade/list" component={ScreensTraderTradeList} />
            <PrivateRouteComponent path="*" component={ScreensTraderDashboard} />
        </Switch>
    );
}

export default ScreensTraderTradeHome;