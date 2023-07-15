import React, {useState} from "react";
import "./paymentInfoStep.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setStep } from "../../../slices/orderSlice";
import { setInfoStep2 } from "../../../slices/customerSlice";

const PaymentInfoStep = () => {
    const dispatch = useDispatch();

    const [numberCard, setNumberCard] = useState("");
    const [dateCard, setDateCard] = useState("");
    const [codeCard, setCodeCard] = useState("");
    const [ownerCardName, setOwnerCardName] = useState("");

    const handleNumberCardChange = (event) => {
        setNumberCard(event.target.value);
    }

    const handleDateCardChange = (event) => {
        setDateCard(event.target.value);
    }

    const handleCodeCardChange = (event) => {
        setCodeCard(event.target.value);
    }

    const handleOwnerCardNameChange = (event) => {
        setOwnerCardName(event.target.value);
    }

    const handleClick = () => {
        dispatch(setInfoStep2({
                card: `${numberCard} ${dateCard} ${codeCard} ${ownerCardName}`,
            }));
        dispatch(setStep(3));
    }

    return (
        <div className="payment-info">
            <form>
                <div className="payment-info-card">
                    <h2 className="payment-info-card-title ">Информация о банковской карте</h2>
                    <div className="payment-info-card-name">
                        <TextField 
                            id="outlined-basic" 
                            label="Номер карты"
                            variant="filled"
                            color="primary"
                            onChange={handleNumberCardChange}
                            focused
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Срок действия"
                            variant="filled"
                            color="primary"
                            sx={{ 
                                margin: '0 20px',
                            }}
                            onChange={handleDateCardChange}
                            focused
                        />
                        
                    </div>
                    <div style={{ margin: '20px 0', width: '500px' }}>
                        <TextField 
                            id="outlined-basic" 
                            label="CVC"
                            variant="filled"
                            color="primary"
                            sx={{ 
                                width: '100px'
                            }}
                            onChange={handleCodeCardChange}
                            focused
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Держатель карты"
                            variant="filled"
                            color="primary"
                            sx={{ 
                                margin: '20px 0',
                            }}
                            onChange={handleOwnerCardNameChange}
                            fullWidth
                            focused
                        />
                    </div>
                </div>
                <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <Button 
                        variant="contained" 
                        size="large" 
                        
                        onClick={() => dispatch(setStep(1))}
                    >
                        Назад
                    </Button>
                    <Button 
                        variant="contained" 
                        size="large"
                        onClick={handleClick}
                    >
                        Далее
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PaymentInfoStep;