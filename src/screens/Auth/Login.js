import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from '../../assets/images/logo.svg';
import AuthService from '../../services/ServiceAuth';

/**
 * Componente responsavel por exibir a pagina para autenticao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensAuthLogin(props) {
    const [isLogged, setIsLogged] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        AuthService
            .login(username, password)
            .then(result => {
                setHasError(false);
                setIsLogged(true);
            }).catch(e => {
                setHasError(true);
            });
    }

    if (isLogged) {
        return <Redirect to="/trader" />;
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-stretch auth auth-img-bg">
                    <div className="row flex-grow">
                        <div className="col-10 offset-1 d-flex align-items-center justify-content-center">
                            <div className="card p-2">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h1 className="h3">
                                            <img src={Logo} width="60" height="60" className="mr-3" alt="logo" />
                                            SILK ROAD VAULT
                                        </h1>
                                    </div>
                                    {
                                        hasError &&
                                        <div className="alert alert-danger text-center shadow-sm" role="alert">
                                            Usuário e/ou senha inválidos.
                                        </div>
                                    }
                                    <form className="pt-3 " autoComplete="off" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="username">Usuário</label>
                                            <div className="input-group shadow-sm">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="ti-user text-primary"></i>
                                                    </span>
                                                </div>
                                                <input type="username" className="form-control form-control-lg border-left-0" id="username" placeholder="Usuário"
                                                    value={username} onChange={e => { setUsername(e.target.value); }} />
                                            </div>
                                            <small id="username" className="form-text text-right"><Link className="text-primary alert-link" to="/password-reset">Esqueceu a senha?</Link></small>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Senha</label>
                                            <div className="input-group shadow-sm">
                                                <div className="input-group-prepend bg-transparent">
                                                    <span className="input-group-text bg-transparent border-right-0">
                                                        <i className="ti-lock text-primary"></i>
                                                    </span>
                                                </div>
                                                <input type="password" className="form-control form-control-lg border-left-0" id="password" placeholder="Senha"
                                                    value={password} onChange={e => { setPassword(e.target.value); }} />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-block btn-dark btn-lg font-weight-medium auth-form-btn">LOGIN</button>
                                        </div>
                                        <p className="card-description">
                                            Não possui usuário? <Link className="text-danger" to="/signup">Entre em contato para obter sua conta.</Link>.
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreensAuthLogin;
