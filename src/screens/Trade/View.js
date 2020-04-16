import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente responsavel por exibir a pagina principal.
 *
 * @author bortes
 */
class ScreensTradeView extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <div class="jumbotron">
                <h1>Navbar example</h1>
                <p class="lead">This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser's viewport.</p>
                <a class="btn btn-lg btn-primary" href="../../components/navbar/" role="button">View navbar docs &raquo;</a>
            </div>
        );
    }
}

export default ScreensTradeView;