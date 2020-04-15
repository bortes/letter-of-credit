import React, { Component } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import ScreensHome from './Home';

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
          <div>
            <HeaderComponent />
            <main role="main" className="container mt-4">
              <ScreensHome />
            </main>
          </div>
        );
    }
}

export default App;