import React, { Component } from 'react';
import HeaderComponent from '../components/ui/HeaderComponent';
import MainNavComponent from '../components/ui/MainNavComponent';
import {
    ResponsiveContainer, PieChart, Pie,
    BarChart, Bar, Cell,
    AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data1 = [
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

const data2 = [
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

const data3 = [
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

const data4 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
];


/**
 * Componente responsavel por exibir a pagina principal.
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
            <div class="container-fluid page-body-wrapper">
                <MainNavComponent />

                <div class="main-panel">
                    <div class="content-wrapper">
                        <div class="row">
                            <div class="col-md-12 grid-margin">
                                <div class="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h2 class="font-weight-bold mb-0">DASHBOARD</h2>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col-md-3 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-title text-md-center text-xl-left">Open</p>
                                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">10101</h3>
                                            <i class="ti-calendar icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                        </div>
                                        <p class="mb-0 mt-2 text-danger">0.20% <span class="text-black ml-1"><small>(30 days)</small></span></p>

                                        <ResponsiveContainer>
                                            <AreaChart
                                                data={data1}
                                            >
                                                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                                            </AreaChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-title text-md-center text-xl-left">In progress</p>
                                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">20202</h3>
                                            <i class="ti-user icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                        </div>
                                        <p class="mb-0 mt-2 text-danger">0.30% <span class="text-black ml-1"><small>(30 days)</small></span></p>

                                        <ResponsiveContainer>
                                            <LineChart data={data2}>
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-title text-md-center text-xl-left">Delivery</p>
                                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">30303</h3>
                                            <i class="ti-agenda icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                        </div>
                                        <p class="mb-0 mt-2 text-success">20.00%<span class="text-black ml-1"><small>(30 days)</small></span></p>

                                        <BarChart width={100} height={40} data={data3}>
                                            <Bar dataKey="uv" fill="#8884d8" />
                                        </BarChart>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-title text-md-center text-xl-left">Awaiting Payment</p>
                                        <div class="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                            <h3 class="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">40404</h3>
                                            <i class="ti-layers-alt icon-md text-muted mb-0 mb-md-3 mb-xl-0"></i>
                                        </div>
                                        <p class="mb-0 mt-2 text-success">30.00%<span class="text-black ml-1"><small>(30 days)</small></span></p>

                                        <ResponsiveContainer>
                                            <PieChart>
                                                <Pie dataKey="value" data={data4} fill="#8884d8" />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 grid-margin stretch-card">
                                <div class="card">
                                    <div class="card-body">
                                        <p class="card-title">something</p>
                                        <p class="text-muted font-weight-light">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                                        <div id="sales-legend" class="chartjs-legend mt-4 mb-2"></div>
                                        <canvas id="sales-chart"></canvas>
                                    </div>
                                    <div class="card border-right-0 border-left-0 border-bottom-0">
                                        <div class="d-flex justify-content-center justify-content-md-end">
                                            <div class="dropdown flex-md-grow-1 flex-xl-grow-0">
                                                <button class="btn btn-lg btn-outline-light dropdown-toggle rounded-0 border-top-0 border-bottom-0" type="button" id="dropdownMenuDate2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                    Today
                                                    </button>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate2">
                                                    <a class="dropdown-item" href="#">January - March</a>
                                                    <a class="dropdown-item" href="#">March - June</a>
                                                    <a class="dropdown-item" href="#">June - August</a>
                                                    <a class="dropdown-item" href="#">August - November</a>
                                                </div>
                                            </div>
                                            <button class="btn btn-lg btn-outline-light text-primary rounded-0 border-0 d-none d-md-block" type="button"> View all </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 grid-margin stretch-card">
                                <div class="card border-bottom-0">
                                    <div class="card-body pb-0">
                                        <p class="card-title">something</p>
                                        <p class="text-muted font-weight-light">Lorem ipsum is placeholder text commonly used in the graphic.</p>
                                        <div class="d-flex flex-wrap mb-5">
                                            <div class="mr-5 mt-3">
                                                <p class="text-muted">Status</p>
                                                <h3>362</h3>
                                            </div>
                                            <div class="mr-5 mt-3">
                                                <p class="text-muted">New users</p>
                                                <h3>187</h3>
                                            </div>
                                            <div class="mr-5 mt-3">
                                                <p class="text-muted">Chats</p>
                                                <h3>524</h3>
                                            </div>
                                            <div class="mt-3">
                                                <p class="text-muted">Feedbacks</p>
                                                <h3>509</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <canvas id="order-chart" class="w-100"></canvas>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default ScreensHome;