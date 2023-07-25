import React from "react";
import "./adressInfoStep.css";
import MapComponent from "../mapComponent/mapComponent";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../slices/orderSlice";

const AdressInfoStep = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.customer);

  const HandleClick = () => {
    dispatch(setStep(4));
  };

  return (
    <div className="adress-info-step">
      <div className="adress-info-step-map">
        <MapComponent key="map1" />
      </div>
      <div>
        <TextField
          label="Страна"
          variant="filled"
          color="primary"
          sx={{
            margin: "20px 0",
          }}
          value={address.country}
          focused
        />
        <TextField
          label="Область"
          variant="filled"
          color="primary"
          sx={{
            margin: "20px 20px",
          }}
          value={address.state}
          focused
        />
        <TextField
          label="Город"
          variant="filled"
          color="primary"
          sx={{
            margin: "20px 0",
          }}
          value={address.city ? address.city : ""}
          focused
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "end",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "0" }}>
          <TextField
            label="Улица"
            variant="filled"
            color="primary"
            value={address.road ? address.road : ""}
            focused
          />
          <TextField
            label="Номер дома"
            variant="filled"
            color="primary"
            sx={{
              width: "110px",
              margin: "0 20px",
            }}
            value={address.house_number ? address.house_number : ""}
            focused
          />
          <TextField
            label="Почтовый индекс"
            variant="filled"
            color="primary"
            value={address.postcode ? address.postcode : ""}
            focused
          />
        </div>
        <div style={{ margin: "0" }}>
          <Button
            variant="contained"
            size="large"
            onClick={() => dispatch(setStep(2))}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
              marginLeft: "10px",
            }}
            onClick={HandleClick}
          >
            Далее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdressInfoStep;
