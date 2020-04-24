import React from 'react';
import PageComponent from '../../components/Common/Page';
//import chinaIcon from '../../assets/images/China.png';

/**
 * Componente responsavel por exibir a pagina consulta das negociacoes registradas.
 *
 * @param props parametros do componente
 * @author Bortes && @author SkyKnight
 * 
 */
function ScreensTraderList(props) {
    return (
        <PageComponent>
         <div>
        <h4 className="card-title">Gerenciamento de Cargas</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>
                  Importador
                </th>
                <th>
                  Exportador
                </th>
                <th>
                  Status
                </th>
                <th>
                  Origem
                </th>
                <th>
                  Destino
                </th>
                <th>
                  Navio
                </th>
                <th>
                  Banco
                </th>
                <th>
                  L/C(%)
                </th>
                <th>
                  Carga(MM)
                </th>
                <th>
                  Produto
                </th>
                <th>
                  Deadline
                </th>
                <th>
                  Publicação
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-1">
                  Emp.F
                </td>
                <td>
                  Emp.A
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                <img src="../../assets/images/China.png" alt="image" />
                </td>
                <td>
                  Irã ( ICONE )
                </td>
               
              </tr>
              <tr>
                <td className="py-1">
                    Emp.C
                </td>
                <td>
                  Emp.B
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                  Brsil (ICONE )
                </td>
                <td>
                  China ( ICONE )
                </td>
              </tr>
              <tr>
                <td className="py-1">
                  Emp.A
                </td>
                <td>
                  Emp.C
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                  China ( ICONE )
                </td>
                <td>
                  Espanha ( ICONE )
                </td>
              </tr>
              <tr>
                <td className="py-1">
                  Emp.D
                </td>
                <td>
                  Emp.A
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                  Brasil ( ICONE )
                </td>
                <td>
                  China ( ICONE )
                </td>
              </tr>
              <tr>
                <td className="py-1">
                 Emp.H
                </td>
                <td>
                 Emp.B
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '35%'}} aria-valuenow={35} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                  Brasil ( ICONE)
                </td>
                <td>
                  Emirados Arabes ( ICONE )
                </td>
              </tr>
              <tr>
                <td className="py-1">
                  Emp.J
                </td>
                <td>
                 Emp.F
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-info" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                 Golfo Pérsico ( ICONE)
                </td>
                <td>
                  Brasil ( ICONE)
                </td>
              </tr>
              <tr>
                <td className="py-1">
                  Emp.Z
                </td>
                <td>
                  Emp.D
                </td>
                <td>
                  <div className="progress">
                    <div className="progress-bar bg-warning" role="progressbar" style={{width: '20%'}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </td>
                <td>
                  EUA (ICONE)
                </td>
                <td>
                  China ( ICONE)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

        </PageComponent>
    );
}

export default ScreensTraderList;


