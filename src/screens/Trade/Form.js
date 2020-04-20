import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente responsavel por exibir a pagina principal.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTradeForm(props) {
    return (
        <main role="main">
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3"><span className="text-danger">Olá</span>, voce está em <span className="text-info">form</span>!!</h1>
                    <p>
                        - <Link to="/" className="text-warning">/</Link>
                        <br/>
                        - <Link to="/trade/" className="text-warning">/trade</Link>
                        <br/>
                        - <Link to="/trade/list" className="text-warning">/trade/list</Link>
                        <br/>
                        - <Link to="/trade/view" className="text-warning">/trade/view</Link>
                    </p>
                </div>
            </div>
        </main>
    );
}

export default ScreensTradeForm;