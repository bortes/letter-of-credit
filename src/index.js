import React from 'react';
import ReactDOM from 'react-dom';
import './assets/templates/royalui/template//vendors/ti-icons/css/themify-icons.css';
import './assets/templates/royalui/template//vendors/base/vendor.bundle.base.css';
import './assets/templates/royalui/template//css/style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './screens/App';
import ScreensTradeView from './screens/Trade/View';
import * as ServiceWorker from './services/ServiceWorker';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App} />
                <Route path="/trade/view" component={ScreensTradeView} />
            </Switch>
        </ BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.unregister();
