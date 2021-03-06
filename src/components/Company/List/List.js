import React, { useState, useEffect } from 'react';
import ServiceCompany from '../../../services/ServiceCompany';
import CompanyForm from '../Form/Form';

/**
 * Componente responsavel por exibir as companhias registradas.
 *
 * @param props parametros do componente
 * @author bortes
 */
function CompanyList(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        ServiceCompany.get().then(response => setList(response))
    }, []);

    return (
        <>
            {list.map((item, index) => (
                <CompanyForm key={index} data={item} />
            ))}
        </>
    );
}

export default CompanyList;