import React from 'react';

/**
 * Componente responsavel por exibir a pagina principal para o modulo do auditor.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensAuditorHome(props) {
    return (
        <div className="row">
            <div className="col-md-12 grid-margin">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <h2 className="font-weight-bold mb-0">AUDITOR</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreensAuditorHome;