import React, { Component } from 'react';
import Logo from '../../assets/images/logo.svg';
import Avatar from '../../assets/images/default-avatar.svg';
import { Link } from 'react-router-dom';

/**
 * Componente responsavel por exibir o menu de navegacao principal da pagina.
 *
 * @author bortes
 */
class MainNavComponent extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <nav class="sidebar sidebar-offcanvas" id="sidebar">
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="ti-bar-chart-alt menu-icon"></i>
                            <Link to="/trade/view" className="text-warning">
                                <span class="menu-title">DASHBOARD</span>
                            </Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="ti-pencil-alt menu-icon"></i>
                            <Link to="/trade/view" className="text-warning">
                                <span class="menu-title">NEW LETTER OF CREDIT</span>
                                </Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="ti-check-box menu-icon"></i>
                            <Link to="/trade/view" className="text-warning">
                                <span class="menu-title">MY TRADES</span>
                                </Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="ti-wallet menu-icon"></i>
                            <Link to="/trade/view" className="text-warning">
                                <span class="menu-title">MY BANK ACCOUNTS</span>
                                </Link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            <i class="ti-more-alt menu-icon"></i>
                            <Link to="/trade/view" className="text-warning">
                                <span class="menu-title">MY SETTINGS</span>
                                </Link>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MainNavComponent;