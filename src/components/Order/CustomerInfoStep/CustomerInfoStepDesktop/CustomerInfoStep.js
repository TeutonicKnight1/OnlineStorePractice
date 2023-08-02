import React from "react";
import "./customerInfoStep.css";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import {
  handleFirstNameChange,
  handleLastNameChange,
  handleMiddleNameChange,
  handleNumberPassportChange,
  handleYearPassportChange,
  handleIssuedPassportChange,
  handlePhoneNumberChange,
  handleInputChange,
  handleButtonClick,
} from "../CustomerUtils/CustomerUtils";
import { useDispatch } from "react-redux";

const CustomerInfoStep = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [middleName, setMiddleName] = useState("");
  const [middleNameError, setMiddleNameError] = useState(false);
  const [numberPassport, setNumberPassport] = useState("");
  const [numberPassportError, setNumberPassportError] = useState(false);
  const [yearPassport, setYearPassport] = useState("");
  const [yearPassportError, setYearPassportError] = useState(false);
  const [issuedPassport, setIssuedPassport] = useState("");
  const [issuedPassportError, setIssuedPassportError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const handleFirstNameChangeDesktop = (event) => {
    handleFirstNameChange(event, setFirstName, setFirstNameError);
  };
  const handleLastNameChangeDesktop = (event) => {
    handleLastNameChange(event, setLastName, setLastNameError);
  };
  const handleMiddleNameChangeDesktop = (event) => {
    handleMiddleNameChange(event, setMiddleName, setMiddleNameError);
  };
  const handleNumberPassportChangeDesktop = (event) => {
    handleNumberPassportChange(
      event,
      setNumberPassport,
      setNumberPassportError
    );
  };
  const handleYearPassportChangeDesktop = (event) => {
    handleYearPassportChange(event, setYearPassport, setYearPassportError);
  };
  const handleIssuedPassportChangeDesktop = (event) => {
    handleIssuedPassportChange(
      event,
      setIssuedPassport,
      setIssuedPassportError
    );
  };
  const handleButtonClickDesktop = () => {
    handleButtonClick(
      dispatch,
      firstName,
      lastName,
      middleName,
      numberPassport,
      yearPassport,
      issuedPassport,
      phoneNumber,
      firstNameError,
      lastNameError,
      middleNameError,
      numberPassportError,
      yearPassportError,
      issuedPassportError,
      phoneNumberError,
      setFirstNameError,
      setLastNameError,
      setMiddleNameError,
      setNumberPassportError,
      setYearPassportError,
      setIssuedPassportError,
      setPhoneNumberError
    );
  };
  const handleInputChangeDesktop = (event) => {
    handleInputChange(event, setPhoneNumber, setPhoneNumberError);
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
              onChange={handleFirstNameChangeDesktop}
              error={firstNameError}
              focused
            />
            <TextField
              id="outlined-basic"
              label="Фамилия"
              variant="filled"
              color="primary"
              sx={{
                margin: "0 20px",
              }}
              onChange={handleLastNameChangeDesktop}
              error={lastNameError}
              focused
            />
            <TextField
              id="outlined-basic"
              label="Отчество"
              variant="filled"
              color="primary"
              onChange={handleMiddleNameChangeDesktop}
              error={middleNameError}
              focused
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Номер телефона"
              value={phoneNumber}
              error={phoneNumberError}
              onChange={handleInputChangeDesktop}
              variant="filled"
              color="primary"
              focused
            />
          </div>
        </div>
        <div className="customer-info-public">
          <h2 className="customer-info-public-title ">
            Данные для таможенного контроля
          </h2>
          <div className="customer-info-public-name">
            <TextField
              id="outlined-basic"
              label="Серия и номер паспорта"
              variant="filled"
              color="primary"
              onChange={handleNumberPassportChangeDesktop}
              value={numberPassport}
              error={numberPassportError}
              focused
            />
            <TextField
              id="outlined-basic"
              label="Дата выдачи"
              variant="filled"
              color="primary"
              sx={{
                margin: "0 20px",
              }}
              onChange={handleYearPassportChangeDesktop}
              error={yearPassportError}
              value={yearPassport}
              focused
            />
          </div>
          <div style={{ margin: "20px 100% 0 0", width: "500px" }}>
            <TextField
              id="outlined-basic"
              label="Кем выдан"
              variant="filled"
              color="primary"
              onChange={handleIssuedPassportChangeDesktop}
              error={issuedPassportError}
              focused
              fullWidth
            />
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <Button
            variant="contained"
            size="large"
            sx={{ marginLeft: "88%" }}
            onClick={handleButtonClickDesktop}
          >
            Далее
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfoStep;
