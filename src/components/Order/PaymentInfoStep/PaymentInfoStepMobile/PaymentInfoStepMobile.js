import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setStep } from "../../../../slices/orderSlice";
import { setInfoStep2 } from "../../../../slices/customerSlice";

import CardComponent from "../CardComponent/CardComponent";

const PaymentInfoStepMobile = () => {
  const dispatch = useDispatch();

  const [numberCard, setNumberCard] = useState("");
  const [dateCard, setDateCard] = useState("");
  const [codeCard, setCodeCard] = useState("");
  const [ownerCardName, setOwnerCardName] = useState("");

  const handleNumberCardChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.replace(/(\d{4})(?=\d)/g, "$1 ");
    if (formattedValue.length <= 19) {
      setNumberCard(formattedValue);
    }
  };

  const handleDateCardChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.replace(/(\d{2})(?=\d)/g, "$1/");
    if (formattedValue.length <= 5 && formattedValue.slice(-1) !== "/") {
      setDateCard(formattedValue);
    }
  };

  const handleCodeCardChange = (event) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = inputValue.slice(0, 3);
    setCodeCard(formattedValue);
  };

  const handleOwnerCardNameChange = (event) => {
    const inputValue = event.target.value
      .replace(/[^a-zA-Z\s]/g, "")
      .toUpperCase();
    setOwnerCardName(inputValue);
  };

  const handleClick = () => {
    if (
      numberCard !== "" &&
      dateCard !== "" &&
      codeCard !== "" &&
      ownerCardName !== ""
    ) {
    dispatch(
      setInfoStep2({
        card: `${numberCard} ${dateCard} ${codeCard} ${ownerCardName}`,
      })
    );
    dispatch(setStep(3));
    } else {
      alert("Заполните все поля!");
    }
  };

  return (
    <div className="payment-info" style={{ margin: "10px" }}>
      <form>
        <div className="payment-info-card">
          <h2 className="payment-info-card-title ">
            Информация о банковской карте
          </h2>
          <div style={{ marginBottom: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CardComponent
              props={{
                numberCard: numberCard,
                dateCard: dateCard,
                codeCard: codeCard,
                ownerCardName: ownerCardName,
              }}
            />
          </div>
          <div className="payment-info-card-bod">
            <div
              className="payment-info-card-body-text"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "240px",
              }}
            >
              <TextField
                id="outlined-basic"
                label="Номер карты"
                variant="filled"
                color="primary"
                onChange={handleNumberCardChange}
                sx={{
                  marginBottom: "10px",
                }}
                value={numberCard}
                focused
              />
              <div style={{ marginBottom: "10px", display: "flex" }}>
                <TextField
                  id="outlined-basic"
                  label="Срок действия"
                  variant="filled"
                  color="primary"
                  sx={{
                    marginRight: "10px",
                    width: "115px",
                  }}
                  value={dateCard}
                  onChange={handleDateCardChange}
                  focused
                />
                <TextField
                  id="outlined-basic"
                  label="CVC"
                  variant="filled"
                  color="primary"
                  sx={{
                    width: "115px",
                  }}
                  onChange={handleCodeCardChange}
                  value={codeCard}
                  focused
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Держатель карты"
                variant="filled"
                color="primary"
                onChange={handleOwnerCardNameChange}
                value={ownerCardName}
                fullWidth
                focused
              />
            </div>
          </div>
        </div>
        <div
          style={{
            margin: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={() => dispatch(setStep(1))}
          >
            Назад
          </Button>
          <Button variant="contained" size="large" onClick={handleClick}>
            Далее
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PaymentInfoStepMobile;
