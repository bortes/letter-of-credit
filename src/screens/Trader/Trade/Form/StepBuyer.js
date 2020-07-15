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
function StepBuyer(props) {
    const { items, handleStepChange, selected } = props;

    const [ currentBuyer, setCurrentBuyer ] = React.useState(selected);

    const classes = useStyles();
    
    if (props.active != true)
    {
        return null;
    }

    const handleChange = (event, item) => {
        const newValue = [...currentBuyer];
        const index = newValue.indexOf(item.company_id);

        if (index > -1)
        {
            newValue.splice(index, 1);
        } else {
            newValue.push(item.company_id);
        }

        setCurrentBuyer(newValue);
        handleStepChange(newValue);
    };

    return (
        <>
            <Typography component="h4" variant="h6">Escolha uma ou mais empresas que serão responsáveis pela venda.</Typography>

            <div className="row mt-4">
                {items.map((item, index) => (
                    <div className="col-md-2" key={item.company_id}>
                        <Card variant="outlined" className={classes.card}>
                            <CardActionArea className={currentBuyer.includes(item.company_id) ? '' : 'data-disabled'} onClick={e => handleChange(e, item)}>
                                <CardMedia image={require(`../../../../assets/companies/${item.company_id}.png`)} title={item.name} />
                                <CardContent>
                                    <Typography variant="h6" component="h6">{item.name}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
}

export default StepBuyer;