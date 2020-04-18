import React, { Component } from 'react';
import HeaderComponent from '../components/ui/HeaderComponent';
import ScreensHome from '../screens/Home';

/**
 * Componente responsavel por exibir a pagina principal.
 *
 * @author bortes
 */
class App extends Component {
    /**
     * Renderiza o componente.
     *
     * @author bortes
     */
    render() {
        return (
            <div class="container-scroller">
                <HeaderComponent />

                <ScreensHome />
            </div>
        );
    }
}

export default App;