import React, { useState, useEffect } from 'react';
import ServiceCommodity from '../../../services/ServiceCommodity';
import CommodityForm from '../Form/Form';

/**
 * Componente responsavel por exibir as mercadorias registradas.
 *
 * @param props parametros do componente
 * @author bortes
 */
function CommodityList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        ServiceCommodity.get().then(response => setList(response.items))
    });

    return (
        <>
            {list.map((item, index) => (
                <CommodityForm key={index} data={item} />
            ))}
        </>
    );
}

export default CommodityList;