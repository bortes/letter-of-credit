import React, { Component } from 'react';

/**
 * Componente responsavel por exibir a pagina inicial.
 *
 * @author bortes
 */
class ScreensHome extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">[INDICADOR]</h5>
                                <h6 class="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p class="card-text">[grafico]</p>
                                <a href="#" class="card-link">[link 1]</a>
                                <a href="#" class="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">[INDICADOR]</h5>
                                <h6 class="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p class="card-text">[grafico]</p>
                                <a href="#" class="card-link">[link 1]</a>
                                <a href="#" class="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">[INDICADOR]</h5>
                                <h6 class="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p class="card-text">[grafico]</p>
                                <a href="#" class="card-link">[link 1]</a>
                                <a href="#" class="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">[INDICADOR]</h5>
                                <h6 class="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p class="card-text">[grafico]</p>
                                <a href="#" class="card-link">[link 1]</a>
                                <a href="#" class="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScreensHome;