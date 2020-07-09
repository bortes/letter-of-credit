import React from 'react';
import CompanyList from '../../../components/Company/List/List';

/**
 * Componente responsavel por exibir os parceiros de negocio.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderPartnerHome(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">PARCEIRO</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <CompanyList />
            </div>
        </>
    );
}

export default ScreensTraderPartnerHome;