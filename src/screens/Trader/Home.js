import React from 'react';
import { Switch } from "react-router-dom";
import PrivateRouteComponent from '../../components/Common/PrivateRoute';
import NotFoundComponent from '../../components/Common/NotFound';
import ScreensTraderBankHome from './Bank/Home';
import ScreensTraderCommodityHome from './Commodity/Home';
import ScreensTraderPartnerHome from './Partner/Home';
import ScreensTraderTradeHome from './Trade/Home';

/**
 * Componente responsavel por exibir a pagina principal para o modulo do negociante.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderHome(props) {
    return (
        <Switch>
            <PrivateRouteComponent path="/trader/bank" component={ScreensTraderBankHome} />
            <PrivateRouteComponent path="/trader/commodity" component={ScreensTraderCommodityHome} />
            <PrivateRouteComponent path="/trader/partner" component={ScreensTraderPartnerHome} />
            <PrivateRouteComponent path="/trader/trade" component={ScreensTraderTradeHome} />
            <PrivateRouteComponent path="*" component={NotFoundComponent} />
        </Switch>
    );
}

export default ScreensTraderHome;