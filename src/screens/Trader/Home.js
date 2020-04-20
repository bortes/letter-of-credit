import React from 'react';
import PageComponent from '../../components/PageComponent';
import {
    ResponsiveContainer, PieChart, Pie,
    BarChart, Bar,
    AreaChart, Area, LineChart, Line,
} from 'recharts';

/**
 * Componente responsavel por exibir a pagina principal para o modulo de negociacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderHome(props) {
    return (
        <PageComponent>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">DASHBOARD</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">A CAMINHO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">AGUARDANDO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">CARREGANDO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">BANCO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">DOCUMENTOS RECEBIDOS</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">FINALIZADOS</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">Open</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">In progress</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">20202</h3>
                                <i className="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.30% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">Delivery</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">30303</h3>
                                <i className="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-success">20.00%<span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left">Awaiting Payment</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40404</h3>
                                <i className="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <p className="mb-0 mt-2 text-success">30.00%<span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title">something</p>
                            <p className="text-muted font-weight-light">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                            <div id="sales-legend" className="chartjs-legend mt-4 mb-2"></div>
                            <canvas id="sales-chart"></canvas>
                        </div>
                        <div className="card border-right-0 border-left-0 border-bottom-0">
                            <div className="d-flex justify-content-center justify-content-md-end">
                                <div className="dropdown flex-md-grow-1 flex-xl-grow-0">
                                    <button className="btn btn-lg btn-outline-light dropdown-toggle rounded-0 border-top-0 border-bottom-0" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        Today
                                            </button>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                                        <a className="dropdown-item" href="#">January - March</a>
                                        <a className="dropdown-item" href="#">March - June</a>
                                        <a className="dropdown-item" href="#">June - August</a>
                                        <a className="dropdown-item" href="#">August - November</a>
                                    </div>
                                </div>
                                <button className="btn btn-lg btn-outline-light text-primary rounded-0 border-0 d-none d-md-block" type="button"> View all </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 grid-margin stretch-card">
                    <div className="card border-bottom-0">
                        <div className="card-body pb-0">
                            <p className="card-title">something</p>
                            <p className="text-muted font-weight-light">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                            <div className="d-flex flex-wrap mb-5">
                                <div className="mr-5 mt-3">
                                    <p className="text-muted">Status</p>
                                    <h3>362</h3>
                                </div>
                                <div className="mr-5 mt-3">
                                    <p className="text-muted">New users</p>
                                    <h3>187</h3>
                                </div>
                                <div className="mr-5 mt-3">
                                    <p className="text-muted">Chats</p>
                                    <h3>524</h3>
                                </div>
                                <div className="mt-3">
                                    <p className="text-muted">Feedbacks</p>
                                    <h3>509</h3>
                                </div>
                            </div>
                        </div>
                        <canvas id="order-chart" className="w-100"></canvas>
                    </div>
                </div>
            </div>
        </PageComponent>
    );
}

export default ScreensTraderHome;