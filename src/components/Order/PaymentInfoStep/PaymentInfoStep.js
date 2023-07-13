import React from "react";
import "./paymentInfoStep.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setStep } from "../../../slices/orderSlice";

const PaymentInfoStep = () => {
    const dispatch = useDispatch();

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
                        onClick={() => dispatch(setStep(3))}
                    >
                        Далее
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PaymentInfoStep;