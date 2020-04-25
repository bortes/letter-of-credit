import React, { useState } from "react";
import { Link, Redirect } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import Avatar from '../../assets/images/default-avatar.svg';
import MainNavComponent from './MainNav';
import * as authService from '../../services/ServiceAuth';


/**
 * Componente responsavel por exibir o cabecalho da pagina.
 *
 * @param props parametros do componente
 * @author bortes
 */
function HeaderComponent(props) {
    const [isNotifyMenuOpen, setIsNotifyMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    function handleToggleMenu(event) {
        event.preventDefault();

        if (document.body.classList.contains('sidebar-icon-only')) {
            document.body.classList.remove('sidebar-icon-only');
        } else {
            document.body.classList.add('sidebar-icon-only');
        }
    }

    function handleToggleNotifyMenu(event) {
        event.preventDefault();

        setIsNotifyMenuOpen(!isNotifyMenuOpen);
    }

    function handleToggleProfileMenu(event) {
        event.preventDefault();

        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

    function handleLogout(event) {
        authService.logout();
    }

    return (
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <button className="navbar-brand brand-logo btn btn-link pl-2" title="contrair menu" onClick={handleToggleMenu}>
                    <img src={Logo} width="60" height="60" alt="logo" className="w-auto ml-4 mr-3" />
                    <span className="d-inline mb-0">SILK ROAD VAULT</span>
                </button>
                <button className="navbar-brand brand-logo-mini btn btn-link pl-2" title="expandir menu" onClick={handleToggleMenu}>
                    <img src={Logo} width="60" height="60" alt="logo" className="w-auto ml-4 mr-3" />
                    <span className="d-inline mb-0">SRV</span>
                </button>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav mr-lg-2">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group">
                            <div className="input-group-prepend hover-cursor" id="navbar-search-icon">
                                <span className="input-group-text" id="search">
                                    <i className="ti-search"></i>
                                </span>
                            </div>
                            <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" aria-label="search" aria-describedby="search" />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li id="main">
                        <MainNavComponent />
                    </li>

                    <li className={isNotifyMenuOpen ? "nav-item dropdown show" : "nav-item dropdown"}>
                        <button className="nav-link count-indicator dropdown-toggle btn btn-link" data-toggle="dropdown" id="notifyDropdown" aria-expanded={isNotifyMenuOpen} onClick={handleToggleNotifyMenu}>
                            <i className="ti-bell mx-0"></i>
                            <span className="count"></span>
                        </button>
                        <div className={isNotifyMenuOpen ? "dropdown-menu dropdown-menu-right navbar-dropdown show" : "dropdown-menu dropdown-menu-right navbar-dropdown"} aria-labelledby="notifyDropdown">
                            <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                            <button className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-success">
                                        <i className="ti-info-alt mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">Application Error</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Just now
                                    </p>
                                </div>
                            </button>
                            <button className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-warning">
                                        <i className="ti-settings mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">Settings</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        Private message
                                    </p>
                                </div>
                            </button>
                            <button className="dropdown-item">
                                <div className="item-thumbnail">
                                    <div className="item-icon bg-info">
                                        <i className="ti-user mx-0"></i>
                                    </div>
                                </div>
                                <div className="item-content">
                                    <h6 className="font-weight-normal">New user registration</h6>
                                    <p className="font-weight-light small-text mb-0 text-muted">
                                        2 days ago
                                    </p>
                                </div>
                            </button>
                        </div>
                    </li>
                    <li className={isProfileMenuOpen ? "nav-item nav-profile dropdown show" : "nav-item nav-profile dropdown"}>
                        <button className="nav-link dropdown-toggle btn btn-link" data-toggle="dropdown" id="profileDropdown" aria-expanded={isProfileMenuOpen} onClick={handleToggleProfileMenu}>
                            <img src={Avatar} alt="profile" />
                        </button>
                        <div className={isProfileMenuOpen ? "dropdown-menu dropdown-menu-right navbar-dropdown show" : "dropdown-menu dropdown-menu-right navbar-dropdown"} aria-labelledby="profileDropdown">
                            <Link className="dropdown-item" to="/settings">
                                <i className="ti-settings text-primary"></i>
                                Settings
                            </Link>
                            <Link className="dropdown-item" to="/" onClick={handleLogout}>
                                <i className="ti-power-off text-primary"></i>
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderComponent;