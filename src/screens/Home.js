import React from 'react';
import { Switch } from "react-router-dom";
import PrivateRoute from '../components/Common/PrivateRoute';
import HeaderComponent from '../components/Common/Header';
import FooterComponent from '../components/Common/Footer';
import NotFoundComponent from '../components/Common/NotFound';
import ScreensAuditorHome from './Auditor/Home';
import ScreensBankerHome from './Banker/Home';
import ScreensTraderHome from './Trader/Home';

/**
 * Componente responsavel por exibir a pagina principal da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensHome(props) {
    return (
        <div className="container-scroller">
            <HeaderComponent />

            <div className="container-fluid page-body-wrapper">

                <div className="main-panel w-100">
                    <div className="content-wrapper">
                        <Switch>
                            <PrivateRoute path="/auditor" component={ScreensAuditorHome} />
                            <PrivateRoute path="/banker" component={ScreensBankerHome} />
                            <PrivateRoute path="/trader" component={ScreensTraderHome} />
                            <PrivateRoute path="*" component={NotFoundComponent} />
                        </Switch>
                    </div>

                    <FooterComponent />
                </div>
            </div>
        </div>
    );
}

export default ScreensHome;