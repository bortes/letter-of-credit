import React from 'react';

/**
 * Componente responsavel por exibir uma companhia registrada.
 *
 * @param props parametros do componente
 * @author bortes
 */
function CompanyForm(props) {
    const data = props.data;

    return (
        <div className="col-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <p className="card-title text-md-center text-xl-left h-15">EMPRESA</p>
                    <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                        <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            {data.name}
                        </h3>
                        <div>
                            <img src={require(`../../../assets/countries/${data.address.country_id}/60.png`)} alt={data.address.country_id} className="img-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CompanyForm;