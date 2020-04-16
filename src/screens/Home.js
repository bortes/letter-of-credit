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
                <div>
                    <h2>Dashboard</h2>
                    <hr className="mt-4" />
                </div>

                <div className="row">
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">OPEN</h5>
                                <p className="card-text">Number of initiated trade transactions</p>
                                <a href="#" className="btn btn-primary btn-lg">See details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="progress">
                                    <div className="progress-bar w-25 bg-info" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">IN PROGRESS</h5>
                                <p className="card-text">Number of aggred trade transactions in progress</p>
                                <a href="#" className="btn btn-primary btn-lg">See details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="progress">
                                    <div className="progress-bar w-50 bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">DELIVERY</h5>
                                <p className="card-text">Number of trade transactions in deliveru</p>
                                <a href="#" className="btn btn-primary btn-lg">See details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="progress">
                                    <div className="progress-bar w-75 bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">AWAITING PAYMENT</h5>
                                <p className="card-text">Number of trade transactions wating for payment</p>
                                <a href="#" className="btn btn-primary btn-lg">See details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="progress">
                                    <div className="progress-bar w-100 bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">PAID</h5>
                                <p className="card-text">Number of trade transactions paid in the last 30 days</p>
                                <a href="#" className="btn btn-primary btn-lg">See details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="card">
                            <div className="card-header border-0">
                                <div className="progress">
                                    <div className="progress-bar w-25 bg-danger" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">OVERDUE</h5>
                                <p className="card-text">Number of overdue trade transactions</p>
                                <a href="#" className="btn btn-primary btn-lg">See details</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6">
                        <div>
                            <h3>Alerts</h3>
                            <hr className="mt-4" />
                            <p className="lead">No recent actvities.</p>
                        </div>
                    </div>
                    <div className="col-6">
                        <div>
                            <h3>Notifications</h3>
                            <hr className="mt-4" />
                            <p className="lead">No recent actvities.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">[INDICADOR]</h5>
                                <h6 className="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p className="card-text">[grafico]</p>
                                <a href="#" className="card-link">[link 1]</a>
                                <a href="#" className="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">[INDICADOR]</h5>
                                <h6 className="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p className="card-text">[grafico]</p>
                                <a href="#" className="card-link">[link 1]</a>
                                <a href="#" className="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">[INDICADOR]</h5>
                                <h6 className="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p className="card-text">[grafico]</p>
                                <a href="#" className="card-link">[link 1]</a>
                                <a href="#" className="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">[INDICADOR]</h5>
                                <h6 className="card-subtitle mb-2 text-muted">[descricao]</h6>
                                <p className="card-text">[grafico]</p>
                                <a href="#" className="card-link">[link 1]</a>
                                <a href="#" className="card-link">[link 2]</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ScreensHome;