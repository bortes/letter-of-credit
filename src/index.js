import React from 'react';
import ReactDOM from 'react-dom';
import './assets/templates/royalui/template/vendors/ti-icons/css/themify-icons.css';
import './assets/templates/royalui/template/vendors/base/vendor.bundle.base.css';
import './assets/templates/royalui/template/css/style.css';
import './index.css';

import App from './screens/App';
import * as serviceWorker from './services/ServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
