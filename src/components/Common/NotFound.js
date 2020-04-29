import React from "react";

/**
 * Componente responsavel por exibir a pagina para conteudo nao encontrado.
 *
 * @param props parametros do componente
 * @author bortes
 */
function NotFoundComponent(props) {
    return (
        <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="text-center m-3">
                <h2 className="h1 text-black-50">404</h2>

                <h3 className="text-secondary display-4 font-weight-bold mt-4">Página não encontrada.</h3>

                <p className="text-secondary">A página procurada não foi encontrada.{new Date().getTime()}</p>

                <form className="pb-0 mt-4 d-none">
                    <div className="input-group rounded-lg shadow-sm">
                        <div className="input-group-prepend hover-cursor">
                            <span className="input-group-text bg-white text-black-50">
                                <i className="ti-search"></i>
                            </span>
                        </div>
                        <input type="text" className="form-control border-left-0 pl-0" placeholder="Pesquisar por ajuda" aria-label="helpér" aria-describedby="helpér" />
                    </div>
                </form>

            </div>
        </div>
    );
}

export default NotFoundComponent;