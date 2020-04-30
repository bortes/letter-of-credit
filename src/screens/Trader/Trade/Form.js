import React from 'react';
import {
    ComposedChart, Legend,
    AreaChart, Area,
    PieChart, Pie,
    LineChart, Line,
    BarChart, Bar,
    ResponsiveContainer
} from 'recharts';

/**
 * Componente responsavel por exibir a pagina com o para cadastro e exibicao das negociacoes.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderTradeForm(props) {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">Nova carta de crédito</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title text-md-center text-xl-left h-15">IMPORTADOR</p>
                            <div className="d-flex flex-wrap justify-content-between justify-content-md-center justify-content-xl-between align-items-center">
                                <h3 className="mb-0 mb-md-2 mb-xl-0 order-md-1 order-xl-0">Amaggi</h3>
                                <div>
                                    {/* <ResponsiveContainer>
                                        <PieChart
                                            margin={{
                                                top: 0, right: 0, bottom: 0, left: 0,
                                            }}>
                                            <Pie dataKey="value" data={data} cx={120} cy={200} innerRadius={60} outerRadius={80} fill="#8884d8" paddingAngle={5} />
                                        </PieChart>
                                    </ResponsiveContainer> */}
                                </div>
                                <div>
                                    <img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-sm" />
                                </div>
                            </div>
                            <div style={{ height: 80 }}>

                            </div>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th>Contrato</th>
                                        <td>XP1-456-20200421165304</td>
                                    </tr>
                                    <tr>
                                        <th>Produto</th>
                                        <td>Soja (Bulk)</td>
                                    </tr>
                                    <tr>
                                        <th>Valor</th>
                                        <td>US% 18.000.00,00</td>
                                    </tr>
                                    <tr>
                                        <th>L/C</th>
                                        <td>value="1%</td>
                                    </tr>
                                    <tr>
                                        <th>Banco Emissor</th>
                                        <td>Banco 1</td>
                                    </tr>
                                    <tr>
                                        <th>Taxa L/C</th>
                                        <td>3%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-4">

                </div>
                <div className="col-4">

                </div>
            </div>
        </>
    );
}

export default ScreensTraderTradeForm;