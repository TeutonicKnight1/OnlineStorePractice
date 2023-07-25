import React from "react";
import MapComponent from "../mapComponent/mapComponent";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setStep } from "../../../../slices/orderSlice";

const AdressInfoStepMobile = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.customer);

  const HandleClick = () => {
    dispatch(setStep(4));
  };

  return (
    <div className="adress-info-step">
      <div
        className="adress-info-step-map"
        style={{
          width: "95%",
          margin: "10px",
        }}
      >
        <MapComponent key="map1" />
      </div>
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "flex-start" }}>
        <TextField
          label="Страна"
          variant="filled"
          color="primary"
          sx={{
            margin: "0 0 10px 0",
          }}
          value={address.country}
          focused
        />
        <TextField
          label="Область"
          variant="filled"
          color="primary"
          sx={{
            margin: "0 0 10px 0",
          }}
          value={address.state}
          focused
        />
        <TextField
          label="Город"
          variant="filled"
          color="primary"
          sx={{
            margin: "0 0 10px 0",
          }}
          value={address.city ? address.city : ""}
          focused
        />
        <div>
          <TextField
            label="Улица"
            variant="filled"
            color="primary"
            sx={{
              margin: "0 0 10px 0",
              width: "130px",
            }}
            value={address.road ? address.road : ""}
            focused
          />
          <TextField
            label="Номер дома"
            variant="filled"
            color="primary"
            sx={{
              width: "100px",
              margin: "0 0 10px 10px",
            }}
            value={address.house_number ? address.house_number : ""}
            focused
          />
        </div>
        <TextField
          label="Почтовый индекс"
          variant="filled"
          color="primary"
          value={address.postcode ? address.postcode : ""}
          sx={{
            margin: "0 0 10px 0",
          }}
          focused
        />
        <div style={{ margin: "0 0 20px 0" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
                width: "115px",
            }}
            onClick={() => dispatch(setStep(2))}
          >
            Назад
          </Button>
          <Button
            variant="contained"
            size="large"
            sx={{
                width: "115px",
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

export default AdressInfoStepMobile;
