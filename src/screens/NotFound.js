import React from "react";
import PageComponent from '../components/PageComponent';

/**
 * Componente responsavel por exibir a pagina para conteudo nao encontrado.
 *
 * @param props parametros do componente
 * @author bortes
 */
function NotFoundLogin(props) {
    return (
        <PageComponent>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">Pagina nao encontrada</h2>
                        </div>
                    </div>
                </div>
            </div>
        </PageComponent >
    );
}

export default NotFoundLogin;