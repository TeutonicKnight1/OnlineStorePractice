import React from "react";
import "./customerInfoStep.css";
import TextField from '@mui/material/TextField';
import { useState } from "react"
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setStep } from "../../../slices/orderSlice";
import { makeStyles } from "@mui/material";

const CustomerInfoStep = () => {
    const dispatch = useDispatch();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setPhoneNumber(value);

        const validPhoneNumber = /^([0-9]{11})?$/.test(value);
        setPhoneNumberError(!validPhoneNumber);
    };

    return (
        <div className="customer-info">
            <form>
                <div className="customer-info-public">
                    <h2 className="customer-info-public-title ">Общая информация</h2>
                    <div className="customer-info-public-name">
                        <TextField 
                            id="outlined-basic" 
                            label="Имя"
                            variant="filled"
                            color="primary"
                            focused
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Фамилия"
                            variant="filled"
                            color="primary"
                            sx={{ 
                                margin: '0 20px',
                                borderRadius: '100px'
                            }}
                            focused
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Отчество"
                            variant="filled"
                            color="primary"
                            focused
                        />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <TextField 
                            id="outlined-basic" 
                            label="Номер телефона"
                            value={phoneNumber}
                            error={phoneNumberError}
                            onChange={handleInputChange}
                            variant="filled"
                            color="primary"
                            focused
                        />
                    </div>
                </div>
                <div className="customer-info-public">
                    <h2 className="customer-info-public-title ">Данные для таможенного контроля</h2>
                    <div className="customer-info-public-name">
                        <TextField 
                            id="outlined-basic" 
                            label="Серия и номер паспорта"
                            variant="filled"
                            color="primary"
                            focused
                        />
                        <TextField 
                            id="outlined-basic" 
                            label="Дата выдачи"
                            variant="filled"
                            color="primary"
                            sx={{ 
                                margin: '0 20px',
                                borderRadius: '100px'
                            }}
                            focused
                        />
                    </div>
                    <div style={{ margin: '20px 100% 0 0', width: '500px' }}>
                        <TextField 
                            id="outlined-basic"
                            label="Кем выдан"
                            variant="filled"
                            color="primary"
                            focused
                            fullWidth
                        />
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" size="large" sx={{ marginLeft: '88%'}} onClick={() => dispatch(setStep(2))}>Далее</Button>
                </div>
            </form>
        </div>
    )
}

export default CustomerInfoStep;