import React from "react";
import DoneIcon from "@mui/icons-material/Done";

import "./orderProcessed.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const OrderProcessed = () => {
  return (
    <div className="order-processed">
      <div className="order-processed-title">
        <DoneIcon sx={{ margin: "5px" }} size="large" />
        <h1 className="order-processed-title-text">Заказ оформлен</h1>
      </div>
      <Link to="/">
        <Button
          variant="contained"
          size="large"
          sx={{ marginTop: "10px", marginLeft: "84%" }}
        >
          На главную
        </Button>
      </Link>
    </div>
  );
};

export default OrderProcessed;
