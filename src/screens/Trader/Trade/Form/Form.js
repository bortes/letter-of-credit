import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grow from '@material-ui/core/Grow';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Switch from '@material-ui/core/Switch';
import Q from 'q';

import ServiceBank from '../../../../services/ServiceBank';
import ServiceCompany from '../../../../services/ServiceCompany';
import ServiceCommodity from '../../../../services/ServiceCommodity';
import ServicePort from '../../../../services/ServicePort';

import StepBuyer from './StepBuyer';
import StepCommodity from './StepCommodity';
import StepOperation from './StepOperation';
import StepSeller from './StepSeller';
import StepSendFrom from './StepSendFrom';
import StepSendTo from './StepSendTo';

const useStyles = makeStyles({
    commodity: {
        height: 140,
    },
    company: {
        backgroundSize: 'auto',
        height: 100,
    },
});

/**
 * Componente responsavel por exibir a pagina com o para cadastro e exibicao das negociacoes.
 *
 * @param props parametros do componente
 * @author bortes
 */
function ScreensTraderTradeForm(props) {
    const [activeStep, setActiveStep] = React.useState(0);

    const [bankList, setBankList] = React.useState([]);
    const [companyList, setCompanyList] = React.useState([]);
    const [commodityList, setCommodityList] = React.useState([]);
    const [portList, setPortList] = React.useState([]);

    const [selectedOperation, setSelectedOperation] = React.useState('');
    const [selectedCommodity, setSelectedCommodity] = React.useState('');
    const [selectedSeller, setSelectedSeller] = React.useState([]);
    const [selectedBuyer, setSelectedBuyer] = React.useState([]);
    const [selectedSendFrom, setSelectedSendFrom] = React.useState([]);
    const [selectedSendTo, setSelectedSendTo] = React.useState([]);

    useEffect(() => {
        Q.all([
            ServiceBank.get(),
            ServiceCompany.get(),
            ServiceCommodity.get(),
            ServicePort.get(),
        ])
            .then(result => {
                setBankList(result[0]);
                setCompanyList(result[1]);
                setCommodityList(result[2]);
                setPortList(result[3]);
            })
    }, []);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleOperation = (selected) => {
        setSelectedOperation(selected);
        // console.log('handleOperation', selected);

    }
    const handleCommodity = (selected) => {
        setSelectedCommodity(selected);
        // console.log('handleCommodity', selected);

    }
    const handleSeller = (selected) => {
        setSelectedSeller(selected);
        // console.log('handleSeller', selected);

    }
    const handleBuyer = (selected) => {
        setSelectedBuyer(selected);
        // console.log('handleBuyer', selected);

    }
    const handleSendFrom = (selected) => {
        setSelectedSendFrom(selected);
        // console.log('handleSendFrom', selected);

    }
    const handleSendTo = (selected) => {
        setSelectedSendTo(selected);
        // console.log('handleSendTo', selected);
    }

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

            <div>
                <Stepper orientation="vertical" activeStep={activeStep}>
                    <Step>
                        <StepLabel>TIPO DE OPERAÇÃO</StepLabel>
                        <StepContent>
                            <StepOperation handleStepChange={handleOperation} selected={selectedOperation} active={activeStep === 0} />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <Button onClick={handleNext} variant="contained" color="primary">Próximo</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>MERCADÓRIA NEGOCIADA</StepLabel>
                        <StepContent>
                            <StepCommodity handleStepChange={handleCommodity} selected={selectedCommodity} items={commodityList} active={activeStep === 1} />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <Button onClick={handleBack}>Voltar</Button>
                                    <Button onClick={handleNext} variant="contained" color="primary">Próximo</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>VENDEDOR</StepLabel>
                        <StepContent>
                            <StepSeller handleStepChange={handleSeller} selected={selectedSeller} items={companyList} active={activeStep === 2} />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <Button onClick={handleBack}>Voltar</Button>
                                    <Button onClick={handleNext} variant="contained" color="primary">Próximo</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>COMPRADOR</StepLabel>
                        <StepContent>
                            <StepBuyer handleStepChange={handleBuyer} selected={selectedBuyer} items={companyList} active={activeStep === 3} />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <Button onClick={handleBack}>Voltar</Button>
                                    <Button onClick={handleNext} variant="contained" color="primary">Próximo</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>ORIGEM</StepLabel>
                        <StepContent>
                            <StepSendFrom handleStepChange={handleSendFrom} selected={selectedSendFrom} items={portList} active={activeStep === 4} />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <Button onClick={handleBack}>Voltar</Button>
                                    <Button onClick={handleNext} variant="contained" color="primary">Próximo</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                    <Step>
                        <StepLabel>DESTINO</StepLabel>
                        <StepContent>
                            <StepSendTo handleStepChange={handleSendTo} selected={selectedSendTo} items={portList} active={activeStep === 5} />
                            <div className="row mt-4">
                                <div className="col-md-2">
                                    <Button onClick={handleBack}>Voltar</Button>
                                    <Button onClick={handleNext} variant="contained" color="primary">Próximo</Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                </Stepper>
            </div>
        </>
    );
}

export default ScreensTraderTradeForm;