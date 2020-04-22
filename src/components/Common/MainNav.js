import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente responsavel por exibir o menu de navegacao principal.
 *
 * @param props parametros do componente
 * @author bortes
 */
function MainNavComponent(props) {
    return (
        <nav className="sidebar sidebar-offcanvas">
            <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/" title="DASHBOARD">
                        <i className="ti-bar-chart-alt menu-icon"></i>
                        <span className="menu-title menu-title-label">DASHBOARD</span>
                        <span className="menu-title menu-title-acronym">DAS</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/trader/new" title="NEW LETTER OF CREDIT">
                        <i className="ti-pencil-alt menu-icon"></i>
                        <span className="menu-title menu-title-label">NEW LETTER OF CREDIT</span>
                        <span className="menu-title menu-title-acronym">NLC</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/trader" title="MY TRADES">
                        <i className="ti-check-box menu-icon"></i>
                        <span className="menu-title menu-title-label">MY TRADES</span>
                        <span className="menu-title menu-title-acronym">MYT</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/banking" title="MY BANK ACCOUNTS">
                        <i className="ti-wallet menu-icon"></i>
                        <span className="menu-title menu-title-label">MY BANK ACCOUNTS</span>
                        <span className="menu-title menu-title-acronym">MYA</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavComponent;