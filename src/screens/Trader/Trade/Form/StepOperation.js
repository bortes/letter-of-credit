import React from 'react';
import { FormGroup, FormControlLabel, Switch, Typography } from '@material-ui/core';

/**
 * Componente responsavel por exibir a pagina com o para cadastro e exibicao das negociacoes.
 *
 * @param props parametros do componente
 * @author bortes
 */
function StepOperation(props) {
    const { items, handleStepChange, selected } = props;

    const [ currentOperation, setCurrentOperation ] = React.useState(selected);

    if (props.active != true)
    {
        return null;
    }

    const handleChange = (event) => {
        const newValue = event.target.name;

        setCurrentOperation(newValue);
        handleStepChange(newValue);
    };

    return (
        <>
            <Typography component="h4" variant="h6">Informe o tipo de operação que será realizada.</Typography>

            <div className="row mt-4">
                <div className="col-md-4">
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={currentOperation === 'BUY'} onChange={handleChange} name="BUY" />}
                            label="operação de compra"
                        />
                        <FormControlLabel
                            control={<Switch checked={currentOperation === 'SELL'} onChange={handleChange} name="SELL" />}
                            label="operação de compra"
                        />
                    </FormGroup>
                </div>
            </div>
        </>
    );
}

export default StepOperation;