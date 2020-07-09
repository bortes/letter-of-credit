import React from 'react';
import HeaderComponent from './Header';
import AuthService from '../../services/ServiceAuth';

/**
 * Componente responsavel por exibir a estrutura padrao da pagina.
 *
 * @param props parametros do componente
 * @author bortes
 */
function PageComponent(props) {
    if (AuthService.isAuthenticated()) {
        return (
            <div className="container-scroller">
                <HeaderComponent />

                <div className="container-fluid page-body-wrapper">
                    <div className="main-panel w-100">
                        <div className="content-wrapper">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper">
                        {props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default PageComponent;