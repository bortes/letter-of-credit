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
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/trader">
                        <i className="ti-bar-chart-alt menu-icon"></i>
                        <span className="menu-title">DASHBOARD</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/trader">
                        <i className="ti-pencil-alt menu-icon"></i>
                        <span className="menu-title">NEW LETTER OF CREDIT</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/trader">
                        <i className="ti-check-box menu-icon"></i>
                        <span className="menu-title">MY TRADES</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/banking">
                        <i className="ti-wallet menu-icon"></i>
                        <span className="menu-title">MY BANK ACCOUNTS</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavComponent;