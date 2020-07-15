import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        '& .MuiCardMedia-root': {
            height: '140px',
        },
    },
});

/**
 * Componente responsavel por exibir a pagina com o para cadastro e exibicao das negociacoes.
 *
 * @param props parametros do componente
 * @author bortes
 */
function StepCommodity(props) {
    const { items, handleStepChange, selected } = props;

    const [ currentCommodity, setCurrentCommodity ] = React.useState(selected);

    const classes = useStyles();
    
    if (props.active != true)
    {
        return null;
    }

    const handleChange = (event, item) => {
        const newValue = item.commodity_id;

        setCurrentCommodity(newValue);
        handleStepChange(newValue);
    };

    return (
        <>
            <Typography component="h4" variant="h6">Selecione a mercadoria que será negociada.</Typography>

            <div className="row mt-4">
                {items.map((item, index) => (
                    <div className="col-md-2" key={item.commodity_id}>
                        <Card variant="outlined" className={classes.card}>
                            <CardActionArea className={currentCommodity === item.commodity_id ? '' : 'data-disabled'} onClick={e => handleChange(e, item)}>
                                <CardMedia image={require(`../../../../assets/commodity/${item.commodity_id}.png`)} title={item.name} />
                                <CardContent>
                                    <Typography variant="h5" component="h5">{item.name}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StepCommodity;