import React from 'react';

/**
 * Componente responsavel por exibir um banco registrado.
 *
 * @param props parametros do componente
 * @author bortes
 */
function BankForm(props) {
    const data = props.data;

    return (
        <div className="col-lg-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-title text-md-center text-xl-left h-15">{data.name}</p>
                    <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                        <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            <small className="text-gray">código swift</small>
                            <br />
                            {data.swift_code}
                        </h3>
                        <h4 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            <small className="text-gray">ISBAN</small>
                            <br />
                            {data.iban_code}
                        </h4>
                        <div>
                            <img src={require(`../../../assets/countries/${data.address.country_id}/60.png`)} alt={data.address.country_id} className="img-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BankForm;