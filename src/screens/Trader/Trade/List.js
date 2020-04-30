import React from 'react';
import PrivateBC from '../../../assets/images/money.svg';
import PublicBC from '../../../assets/images/money.svg';

/**
 * Componente responsavel por exibir a pagina consulta das negociacoes registradas.
 *
 * @param props parametros do componente
 * @author Bortes && @author SkyKnight
 * 
 */
function ScreensTraderTradeList(props) {
    return (
        <>
            <div className="row">
                <div className="col-md-12 grid-margin">
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h2 className="font-weight-bold mb-0">Gerenciamento de cargas</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 grid-margin text-md-center">
                    <button className="btn btn-dark btn-lg p-3 ml-1 mr-1 shadow-sm">
                        <i className="ti-shift-right"></i>
                        <span className="pl-2">A CAMINHO</span>
                    </button>

                    <button className="btn btn-dark btn-lg p-3 ml-1 mr-1 shadow-sm">
                        <i className="ti-files"></i>
                        <span className="pl-2">DOCUMENTOS</span>
                    </button>

                    <button className="btn btn-dark btn-lg p-3 ml-1 mr-1 shadow-sm">
                        <i className="ti-reload"></i>
                        <span className="pl-2">CARREGANDO</span>
                    </button>

                    <button className="btn btn-dark btn-lg p-3 ml-1 mr-1 shadow-sm">
                        <i className="ti-na"></i>
                        <span className="pl-2">AGUARDANDO</span>
                    </button>

                    <button className="btn btn-dark btn-lg p-3 ml-1 mr-1 shadow-sm">
                        <i className="ti-check-box"></i>
                        <span className="pl-2">FINALIZADO</span>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">

                    <div className="card">
                        <div className="card-body">
                            <p className="card-description">Lista de cargas associadas às cartas de créditos emitidas pela aplicação.</p>
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Importador</th>
                                            <th>Exportador</th>
                                            <th width="70">Status</th>
                                            <th width="70">Origem</th>
                                            <th width="70">Destino</th>
                                            <th>Navio</th>
                                            <th>Banco</th>
                                            <th width="86">L/C (%)</th>
                                            <th width="86">Carga (MM)</th>
                                            <th width="86">Produto</th>
                                            <th width="86">Deadline</th>
                                            <th width="86">Publicação</th>
                                            {/* <th width="150"> </th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Amaggi</td>
                                            <td>Amaggi</td>
                                            <td><i className="ti-shift-right display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/cn/60.png" alt="CN" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td><img src={PrivateBC} className="img-lg" /></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>Louis Dreyfus Company</td>
                                            <td>Louis Dreyfus Company</td>
                                            <td><i className="ti-files display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/cn/60.png" alt="CN" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td><img src={PrivateBC} className="img-lg" /></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>Archer Daniels Midland</td>
                                            <td>Archer Daniels Midland</td>
                                            <td><i className="ti-reload display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/cn/60.png" alt="CN" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td><img src={PrivateBC} className="img-lg" /></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>Cargill</td>
                                            <td>Cargill</td>
                                            <td><i className="ti-na display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/us/60.png" alt="US" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td><img src={PrivateBC} className="img-lg" /></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>Bayer</td>
                                            <td>Bayer</td>
                                            <td><i className="ti-files display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/cn/60.png" alt="CN" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>Bunge Limited</td>
                                            <td>Bunge Limited</td>
                                            <td><i className="ti-reload display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/nl/60.png" alt="NL" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td><img src={PrivateBC} className="img-lg" /></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                        <tr>
                                            <td>Eldorado Brasil</td>
                                            <td>Eldorado Brasil</td>
                                            <td><i className="ti-check-box display-5 bg-secondary text-white font-weight-bold rounded-circle p-3"></i></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/sa/60.png" alt="SA" className="img-lg" /></td>
                                            <td><img src="https://www.apple.com/ac/flags/1/images/br/60.png" alt="BR" className="img-lg" /></td>
                                            <td>Navio I</td>
                                            <td>Banco I</td>
                                            <td>1,00</td>
                                            <td>$ 77,99</td>
                                            <td>Soja (B)</td>
                                            <td><span className="text-secondary">15/05/2020</span></td>
                                            <td><img src={PublicBC} className="img-lg" /></td>
                                            {/* <td>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-comment-alt"></i>
                                                    <span className="sr-only d-none">COMENTAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-pencil-alt"></i>
                                                    <span className="sr-only d-none">EDITAR</span>
                                                </a>
                                                <a className="btn btn-light btn-lg p-3 ml-1 mr-1">
                                                    <i className="ti-close"></i>
                                                    <span className="sr-only d-none">EXCLUIR</span>
                                                </a>
                                            </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ScreensTraderTradeList;