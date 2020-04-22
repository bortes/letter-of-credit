import React from 'react';
import PageComponent from '../../components/Common/Page';

/**
 * Componente responsavel por exibir a pagina consulta das negociacoes registradas.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderList(props) {
    return (
        <PageComponent>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">Carta de crédito emitidas</h2>
                        </div>
                    </div>
                </div>
            </div>
        </PageComponent>
    );
}

export default ScreensTraderList;