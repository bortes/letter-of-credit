import React, { useState, useEffect } from 'react';
import ServiceBank from '../../../services/ServiceBank';
import BankForm from '../Form/Form';

/**
 * Componente responsavel por exibir os bancos registrados.
 *
 * @param props parametros do componente
 * @author bortes
 */
function BankList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        ServiceBank.get().then(response => setList(response))
    }, []);

    return (
        <>
            {list.map((item, index) => (
                <BankForm key={index} data={item} />
            ))}
        </>
    );
}

export default BankList;