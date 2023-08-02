import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
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

const CustomerInfoStepMobile = () => {
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

  const handleFirstNameChangeMobile = (event) => {
    handleFirstNameChange(event, setFirstName, setFirstNameError);
  };
  const handleLastNameChangeMobile = (event) => {
    handleLastNameChange(event, setLastName, setLastNameError);
  };
  const handleMiddleNameChangeMobile = (event) => {
    handleMiddleNameChange(event, setMiddleName, setMiddleNameError);
  };
  const handleNumberPassportChangeMobile = (event) => {
    handleNumberPassportChange(
      event,
      setNumberPassport,
      setNumberPassportError
    );
  };
  const handleYearPassportChangeMobile = (event) => {
    handleYearPassportChange(event, setYearPassport, setYearPassportError);
  };
  const handleIssuedPassportChangeMobile = (event) => {
    handleIssuedPassportChange(
      event,
      setIssuedPassport,
      setIssuedPassportError
    );
  };
  const handleButtonClickMobile = () => {
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
  const handleInputChangeMobile = (event) => {
    handleInputChange(event, setPhoneNumber, setPhoneNumberError);
  };

  return (
    <div className="customer-info" style={{ margin: "10px" }}>
      <form>
        <div className="customer-info-public">
          <h2 className="customer-info-public-title ">Общая информация</h2>
          <TextField
            id="outlined-basic"
            label="Имя"
            variant="filled"
            color="primary"
            sx={{
              marginBottom: "10px",
            }}
            onChange={handleFirstNameChangeMobile}
            focused
          />
          <TextField
            id="outlined-basic"
            label="Фамилия"
            variant="filled"
            color="primary"
            sx={{
              marginBottom: "10px",
            }}
            onChange={handleLastNameChangeMobile}
            focused
          />
          <TextField
            id="outlined-basic"
            label="Отчество"
            variant="filled"
            color="primary"
            sx={{
              marginBottom: "10px",
            }}
            onChange={handleMiddleNameChangeMobile}
            focused
          />
          <TextField
            id="outlined-basic"
            label="Номер телефона"
            value={phoneNumber}
            error={phoneNumberError}
            onChange={handleInputChangeMobile}
            variant="filled"
            color="primary"
            focused
          />
        </div>
        <div className="customer-info-public">
          <h2 className="customer-info-public-title ">
            Данные для таможенного контроля
          </h2>
          <TextField
            id="outlined-basic"
            label="Серия и номер паспорта"
            variant="filled"
            color="primary"
            value={numberPassport}
            onChange={handleNumberPassportChangeMobile}
            sx={{
              marginBottom: "10px",
            }}
            focused
          />
          <TextField
            id="outlined-basic"
            label="Дата выдачи"
            variant="filled"
            color="primary"
            sx={{
              marginBottom: "10px",
            }}
            value={yearPassport}
            onChange={handleYearPassportChangeMobile}
            focused
          />
          <div style={{ margin: "0", width: "240px" }}>
            <TextField
              id="outlined-basic"
              label="Кем выдан"
              variant="filled"
              color="primary"
              value={issuedPassport}
              onChange={handleIssuedPassportChangeMobile}
              focused
              fullWidth
            />
          </div>
        </div>
        <div style={{ margin: "10px 0 0 70%" }}>
          <Button variant="contained" size="large" onClick={handleButtonClickMobile}>
            Далее
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CustomerInfoStepMobile;
