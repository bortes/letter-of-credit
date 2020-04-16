import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import Logo from '../assets/images/logo.svg';
import Avatar from '../assets/images/default-avatar.svg';

/**
 * Componente responsavel por exibir a pagina principal.
 *
 * @author bortes
 */
class App extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <div class="container-scroller">
                <nav class="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
                    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                        <a class="navbar-brand" href="index.html">
                            <img src={Logo} width="60" height="60" />
                            LETTER of CREDIT
                        </a>
                    </div>
                    <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                        <ul class="navbar-nav mr-lg-2">
                            <li class="nav-item nav-search d-none d-lg-block">
                                <div class="input-group">
                                    <div class="input-group-prepend hover-cursor" id="navbar-search-icon">
                                        <span class="input-group-text" id="search">
                                            <i class="ti-search"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" id="navbar-search-input" placeholder="Search" aria-label="search" aria-describedby="search" />
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav navbar-nav-right">
                            <li class="nav-item dropdown">
                                <a class="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                                    <i class="ti-bell mx-0"></i>
                                    <span class="count"></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="notificationDropdown">
                                    <p class="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                                    <a class="dropdown-item">
                                        <div class="item-thumbnail">
                                            <div class="item-icon bg-success">
                                                <i class="ti-info-alt mx-0"></i>
                                            </div>
                                        </div>
                                        <div class="item-content">
                                            <h6 class="font-weight-normal">Application Error</h6>
                                            <p class="font-weight-light small-text mb-0 text-muted">
                                                Just now
                                            </p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item">
                                        <div class="item-thumbnail">
                                            <div class="item-icon bg-warning">
                                                <i class="ti-settings mx-0"></i>
                                            </div>
                                        </div>
                                        <div class="item-content">
                                            <h6 class="font-weight-normal">Settings</h6>
                                            <p class="font-weight-light small-text mb-0 text-muted">
                                                Private message
                                            </p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item">
                                        <div class="item-thumbnail">
                                            <div class="item-icon bg-info">
                                                <i class="ti-user mx-0"></i>
                                            </div>
                                        </div>
                                        <div class="item-content">
                                            <h6 class="font-weight-normal">New user registration</h6>
                                            <p class="font-weight-light small-text mb-0 text-muted">
                                                2 days ago
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li class="nav-item nav-profile dropdown">
                                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                                    <img src={Avatar} alt="profile" />
                                </a>
                                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                                    <a class="dropdown-item">
                                        <i class="ti-settings text-primary"></i>
                                        Settings
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="ti-power-off text-primary"></i>
                                        Logout
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class="container-fluid page-body-wrapper">
                    <nav class="sidebar sidebar-offcanvas" id="sidebar">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="ti-bar-chart-alt menu-icon"></i>
                                    <span class="menu-title">DASHBOARD</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="ti-pencil-alt menu-icon"></i>
                                    <span class="menu-title">NEW LETTER OF CREDIT</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="ti-check-box menu-icon"></i>
                                    <span class="menu-title">MY TRADES</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="ti-wallet menu-icon"></i>
                                    <span class="menu-title">MY BANK ACCOUNTS</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <i class="ti-more-alt menu-icon"></i>
                                    <span class="menu-title">MY SETTINGS</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div class="main-panel">
                        <div class="content-wrapper">
                            <div class="row">
                                <div class="col-md-12 grid-margin">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div>
                                            <h2 class="font-weight-bold mb-0">DASHBOARD</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title text-md-center text-xl-left">Open</p>
                                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                                <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                                <i class="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                            </div>
                                            <p class="mb-0 mt-2 text-danger">0.20% <span class="text-black ml-1"><small>(30 days)</small></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title text-md-center text-xl-left">In progress</p>
                                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                                <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">20202</h3>
                                                <i class="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                            </div>
                                            <p class="mb-0 mt-2 text-danger">0.30% <span class="text-black ml-1"><small>(30 days)</small></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title text-md-center text-xl-left">Delivery</p>
                                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                                <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">30303</h3>
                                                <i class="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                            </div>
                                            <p class="mb-0 mt-2 text-success">20.00%<span class="text-black ml-1"><small>(30 days)</small></span></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 grid-margin stretch-card">
                                    <div class="card">
                                        <div class="card-body">
                                            <p class="card-title text-md-center text-xl-left">Awaiting Payment</p>
                                            <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                                <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40404</h3>
                                                <i class="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                            </div>
                                            <p class="mb-0 mt-2 text-success">30.00%<span class="text-black ml-1"><small>(30 days)</small></span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;