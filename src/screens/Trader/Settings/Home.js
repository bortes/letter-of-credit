import React from 'react';
import PageComponent from '../../../components/Common/Page';

/**
 * Componente responsavel por exibir a pagina principal para o modulo de configuracao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensSettingsHome(props) {
    return (
        <PageComponent>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">Configurações pessoais</h2>
                        </div>
                    </div>
                </div>
            </div>
        </PageComponent>
    );
}

export default ScreensSettingsHome;