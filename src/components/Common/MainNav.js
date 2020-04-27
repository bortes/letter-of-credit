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
                <li className="nav-item">
                    <button className="btn btn-link btn-outline-light">
                        <i className="ti-angle-double-right text-dark"></i>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavComponent;