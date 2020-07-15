import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    card: {
        '& .MuiCardActionArea-root': {
            paddingTop: '1rem',
        },
        '& .MuiCardMedia-root': {
            backgroundSize: 'contain',
            height: '60px',
        },
        '& .MuiCardContent-root': {
            padding: '8px 16px',
        },
    },
});

/**
 * Componente responsavel por exibir a pagina com o para cadastro e exibicao das negociacoes.
 *
 * @param props parametros do componente
 * @author bortes
 */
function StepSendFrom(props) {
    const { items, handleStepChange, selected } = props;

    const [ currentSendFrom, setCurrentSendFrom ] = React.useState(selected);

    const classes = useStyles();
    
    if (props.active != true)
    {
        return null;
    }

    const handleChange = (event, item) => {
        const newValue = item.port_id;

        setCurrentSendFrom(newValue);
        handleStepChange(newValue);
    };

    return (
        <>
            <Typography component="h4" variant="h6">Defina o porto de zarpagem.</Typography>

            <div className="row mt-4">
                {items.map((item, index) => (
                    <div className="col-md-2" key={item.port_id}>
                        <Card variant="outlined" className={classes.card}>
                            <CardActionArea className={currentSendFrom.includes(item.port_id) ? '' : 'data-disabled'} onClick={e => handleChange(e, item)}>
                                <CardMedia image={require(`../../../../assets/countries/${item.country_id}/60.png`)} title={item.name} />
                                <CardContent>
                                    <Typography variant="h6" component="h6">Porto de {item.name}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StepSendFrom;