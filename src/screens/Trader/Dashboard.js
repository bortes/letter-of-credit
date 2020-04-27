import React from 'react';
import PageComponent from '../components/Common/Page';
import {
    ComposedChart, Legend,
    AreaChart, Area,
    PieChart, Pie,
    LineChart, Line,
    BarChart, Bar,
    ResponsiveContainer
} from 'recharts';


/**
 * Componente responsavel por exibir a pagina principal da aplicacao.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderDashboard(props) {
    const dataACaminho = [
        { name: 'Group A', value: 400, fill: '#fdac41d9' },
        { name: 'Group B', value: 300 },
    ];

    const dataAguardando = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
    const dataBancos = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];

    const dataDocumentos = [
        {
            name: 'Page A', uv: 590, pv: 800, amt: 1400, cnt: 490,
        },
        {
            name: 'Page B', uv: 868, pv: 967, amt: 1506, cnt: 590,
        },
        {
            name: 'Page C', uv: 1397, pv: 1098, amt: 989, cnt: 350,
        },
        {
            name: 'Page D', uv: 1480, pv: 1200, amt: 1228, cnt: 480,
        },
        {
            name: 'Page E', uv: 1520, pv: 1108, amt: 1100, cnt: 460,
        },
        {
            name: 'Page F', uv: 1400, pv: 680, amt: 1700, cnt: 380,
        },
    ];
    const dataFinalizado = [
        {
            name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
        },
        {
            name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
        },
        {
            name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
        },
        {
            name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
        },
        {
            name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
        },
        {
            name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
        },
        {
            name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
        },
    ];
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
                            <p className="card-title text-md-center text-xl-left h-15">A CAMINHO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-direction icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <div style={{ height: 80 }}>
                                <ResponsiveContainer>
                                    <PieChart
                                        margin={{
                                            top: 0, right: 0, bottom: 0, left: 0,
                                        }}>
                                        <Pie dataKey="value" startAngle={180} endAngle={0} data={dataACaminho} cy={80} innerRadius={60} outerRadius={80} />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left h-15">AGUARDANDO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-time icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <div style={{ height: 80 }}>
                                <ResponsiveContainer>
                                    <LineChart data={dataAguardando}>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left h-15">CARREGANDO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-anchor icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <div style={{ height: 80 }}>
                                <ResponsiveContainer>
                                    <LineChart data={dataAguardando}>
                                        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left h-15">BANCO</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-medall icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <div style={{ height: 80 }}>
                                <ResponsiveContainer>
                                    <BarChart data={dataBancos}>
                                        <Bar dataKey="uv" fill="#8884d8" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left h-15">DOCUMENTOS RECEBIDOS</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-clipboard icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <div style={{ height: 80 }}>
                                <ResponsiveContainer>
                                    <ComposedChart data={dataDocumentos}>
                                        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
                                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                                    </ComposedChart>
                                </ResponsiveContainer>
                            </div>
                            <p className="mb-0 mt-2 text-danger">0.20% <span className="text-black ml-1"><small>(30 days)</small></span></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left h-15">FINALIZADOS</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                <i className="ti-wallet icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                            </div>
                            <div style={{ height: 80 }}>
                                <ResponsiveContainer>
                                    <AreaChart data={dataFinalizado}>
                                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                    </AreaChart>
                                </ResponsiveContainer>
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

export default ScreensTraderDashboard;