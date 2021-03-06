import React from 'react';
import BankList from '../../../components/Bank/List/List';

/**
 * Componente responsavel por exibir os bancos que participam do consorcio.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderBankHome(props) {

    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">BANCO</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <BankList />
            </div>
        </>
    );
}

export default ScreensTraderBankHome;