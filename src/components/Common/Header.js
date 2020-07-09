import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import AuthService from '../../services/ServiceAuth';


/**
 * Componente responsavel por exibir o cabecalho da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function HeaderComponent(props) {
    const [isMailMenuOpen, setIsMailMenuOpen] = useState(false);
    const [isAlertMenuOpen, setIsAlertMenuOpen] = useState(false);
    const [isUserMenuOpen, seUserMenuOpen] = useState(false);
    
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
        AuthService.logout();
    }

    return (
        <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center bg-white">
                <Link className="navbar-brand btn btn-link pl-2" title="contrair menu" to="/trader">
                    <img src={Logo} alt="logo" className="w-auto ml-lg-4 mr-lg-3 img-sm" />
                    <span className="d-none d-lg-inline mb-0">SILK ROAD VAULT</span>
                </Link>
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
                            <input type="text" className="form-control" id="navbar-search-input" placeholder="Pesquisar por ajuda" aria-label="search" aria-describedby="search" />
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item m-1">
                        <Link className="btn btn-light btn-lg p-3 d-none d-md-block" to="/trader/trade/new" title="CRIAR NOVA CARTA">
                            <i className="ti-pencil-alt"></i>
                            <span className="sr-only d-none">CRIAR</span>
                        </Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="btn btn-light btn-lg p-3 d-none d-md-block" to="/trader/trade/list" title="TRANSAÇÕES DE REALIZADAS">
                            <i className="ti-package"></i>
                            <span className="sr-only d-none">CARGAS</span>
                        </Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="btn btn-light btn-lg p-3 d-none d-md-block" to="/trader/partner" title="PARCEIROS DE NEGÓCIOS">
                            <i className="ti-bookmark-alt"></i>
                            <span className="sr-only d-none">PARCEIROS</span>
                        </Link>
                    </li>
                    <li className="nav-item m-1">
                        <Link className="btn btn-light btn-lg p-3 d-none d-md-block" to="/trader/bank" title="BANCOS PARTICIPANTES">
                            <i className="ti-wallet"></i>
                            <span className="sr-only d-none">BANCOS</span>
                        </Link>
                    </li>
                    <li className="nav-item dropdown m-1">
                        <button className="btn btn-light btn-lg p-3" onClick={handleToggleMailMenu}>
                            <i className="ti-email m-0"></i>
                            <span className="sr-only d-none">AVISOS</span>
                        </button>
                        <div className={'dropdown-menu dropdown-menu-right position-absolute ' + (isMailMenuOpen ? 'show' : '')}>
                        </div>
                    </li>
                    <li className="nav-item dropdown m-1">
                        <button className="btn btn-light btn-lg p-3" onClick={handleToggleAlertMenu}>
                            <i className="ti-bell m-0"></i>
                            <span className="sr-only d-none">ALERTAS</span>
                        </button>
                        <div className={'dropdown-menu dropdown-menu-right position-absolute ' + (isAlertMenuOpen ? 'show' : '')}>
                        </div>
                    </li>
                    <li className="nav-item dropdown m-1">
                        <button className="btn-link border-0 h3 display-5 bg-secondary rounded-circle p-2 mt-2" onClick={handleToggleUserMenu}>
                            <i className="ti-user text-white m-0 align-top"></i>
                        </button>
                        <div className={'dropdown-menu dropdown-menu-right position-absolute ' + (isUserMenuOpen ? 'show' : '')}>
                            <Link className="dropdown-item" to="/">
                                <i className="ti-eraser"></i>
                                Alterar Perfil
                            </Link>
                            <Link className="dropdown-item" to="/">
                                <i className="ti-info-alt"></i>
                                Dados da Empresa
                            </Link>
                            <Link className="dropdown-item" to="/">
                                <i className="ti-more"></i>
                                Alterar Senha
                            </Link>
                            <div className="dropdown-divider"></div>
                            <span className="dropdown-item disabled">Gerenciar Certificados Digitais</span >
                            <div className="pl-4">
                                <Link className="dropdown-item" to="/">
                                    <i className="ti-import"></i>
                                    Carregar certificado da Empresa
                                </Link>
                                <Link className="dropdown-item" to="/">
                                    <i className="ti-medall-alt"></i>
                                    Informar URL de chave de assinatura
                                </Link>
                            </div>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/">
                                <i className="ti-ticket"></i>
                                Consultar Extrato de Transações
                            </Link>
                            <Link className="dropdown-item" to="/">
                                <i className="ti-pie-chart"></i>
                                Consultar Cobranças de Transações
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" to="/" onClick={handleLogout}>
                                <i className="ti-power-off"></i>
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