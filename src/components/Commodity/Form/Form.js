import React from 'react';

/**
 * Componente responsavel por exibir um banco registrado.
 *
 * @param props parametros do componente
 * @author bortes
 */
function CommodityForm(props) {
    const data = props.data;

    return (
        <div className="col-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                        <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">
                            {data.name}
                        </h3>
                        <div>
                            <img src={require(`../../../assets/commodity/${data.commodity_id}.png`)} alt={data.name} className="img-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommodityForm;