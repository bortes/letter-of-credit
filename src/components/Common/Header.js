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
    const [isMailMenuOpen, setIsMailMenuOpen] = useState(false);
    const [isAlertMenuOpen, setIsAlertMenuOpen] = useState(false);
    const [isUserMenuOpen, seUserMenuOpen] = useState(false);

    function handleToggleMenu(event) {
        event.preventDefault();

        if (document.body.classList.contains('sidebar-icon-only')) {
            document.body.classList.remove('sidebar-icon-only');
        } else {
            document.body.classList.add('sidebar-icon-only');
        }
    }

    function handleToggleMailMenu(event) {
        event.preventDefault();

        setIsMailMenuOpen(!isMailMenuOpen);
        setIsAlertMenuOpen(false);
        seUserMenuOpen(false);
    }

    function handleToggleAlertMenu(event) {
        event.preventDefault();

        setIsMailMenuOpen(false);
        setIsAlertMenuOpen(!isAlertMenuOpen);
        seUserMenuOpen(false);
    }

    function handleToggleUserMenu(event) {
        event.preventDefault();

        setIsMailMenuOpen(false);
        setIsAlertMenuOpen(false);
        seUserMenuOpen(!isUserMenuOpen);
    }

    function handleLogout(event) {
        authService.logout();
    }

    return (
        <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
                <button className="navbar-brand btn btn-link pl-2" title="contrair menu">
                    <img src={Logo} width="60" height="60" alt="logo" className="w-auto ml-lg-4 mr-lg-3" />
                    <span className="d-none d-lg-inline mb-0">SILK ROAD VAULT</span>
                </button>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item nav-search d-none d-lg-block">
                        <div className="input-group rounded-lg shadow-sm">
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
                    <li className="nav-item">
                        <Link className="btn-link border-0 bg-transparent text-secondary text-center" to="/trader/new" title="CRIAR NOVA CARTA">
                            <i className="ti-pencil-alt h3"></i>
                            <span className="d-none d-lg-block">CRIAR</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn-link border-0 bg-transparent text-secondary text-center" to="/trader/list" title="TRANSAÇÕES DE REALIZADAS">
                            <i className="ti-package h3"></i>
                            <span className="d-none d-lg-block">CARGAS</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn-link border-0 bg-transparent text-secondary text-center" to="/trader/partner" title="PARCEIROS DE NEGÓCIOS">
                            <i className="ti-bookmark-alt h3"></i>
                            <span className="d-none d-lg-block">PARCEIROS</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="btn-link border-0 bg-transparent text-secondary text-center" to="/trader/bank" title="BANCOS PARTICIPANTES">
                            <i className="ti-wallet h3"></i>
                            <span className="d-none d-lg-block">BANCOS</span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="btn-link border-0 bg-transparent text-secondary" onClick={handleToggleMailMenu}>
                            <i className="ti-email h3 m-0 align-top"></i>
                            <span className="d-none d-lg-block">AVISOS</span>
                        </button>
                        <div className={'dropdown-menu dropdown-menu-right position-absolute ' + (isMailMenuOpen ? 'show' : '')}>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="btn-link border-0 bg-transparent text-secondary" onClick={handleToggleAlertMenu}>
                            <i className="ti-bell h3 m-0 align-top"></i>
                            <span className="d-none d-lg-block">ALERTAS</span>
                        </button>
                        <div className={'dropdown-menu dropdown-menu-right position-absolute ' + (isAlertMenuOpen ? 'show' : '')}>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <button className="btn-link border-0 h3 bg-secondary rounded-circle p-2" onClick={handleToggleUserMenu}>
                            <i className="ti-user text-white m-0 align-top"></i>
                        </button>
                        <div className={'dropdown-menu dropdown-menu-right position-absolute ' + (isUserMenuOpen ? 'show' : '')}>
                            <a className="dropdown-item" href="#">
                                Alterar Perfil
                            </a>
                            <a className="dropdown-item" href="#">
                                Dados da Empresa
                            </a>
                            <a className="dropdown-item" href="#">
                                Alterar Senha
                            </a>
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item disabled">Gerenciar Certificados Digitais</span >
                            <div className="pl-4">
                                <a className="dropdown-item" href="#">
                                    Carregar certificado da Empresa
                                </a>
                                <a className="dropdown-item" href="#">
                                    Informar URL de chave de assinatura
                                </a>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Consultar Extrato de Transações
                            </a>
                            <a className="dropdown-item" href="#">
                                Consultar Cobranças de Transações
                            </a>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/" onClick={handleLogout}>
                                Encerrar Sessão
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default HeaderComponent;