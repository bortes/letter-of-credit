import React from "react";

/**
 * Componente responsavel por exibir o rodape da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function HeaderComponent(props) {
    return (
        <footer className="footer">
            <div className="d-sm-flex justify-content-center justify-content-sm-between">
                <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">Copyright © { new Date().getFullYear() } <span className="text-dark">SILK ROAD VAULT</span>. <span className="d-inline-block">All rights reserved</span>.</span>
            </div>
        </footer>
    );
}

export default HeaderComponent;