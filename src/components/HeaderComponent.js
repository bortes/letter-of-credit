import React, { Component } from 'react';
import Logo from '../logo.svg';

/**
 * Componente responsavel por exibir o cabecalho da pagina.
 *
 * @author bortes
 */
class HeaderComponent extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">
                    <img src={Logo} width="60" height="60" />
                    <span>
                        <span className="h4 pl-3 text-info">letter</span>
                        <span className="h5 pl-2 text-secondary">of</span>
                        <span className="h4 pl-2 text-warning">CREDIT</span>
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link h5" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link h5" href="#">Trade</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default HeaderComponent;