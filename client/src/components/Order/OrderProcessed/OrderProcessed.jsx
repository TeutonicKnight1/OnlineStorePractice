import DoneIcon from "@mui/icons-material/Done";
import QRCode from "qrcode.react";
import "../../../less/orderProcessed.less";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const OrderProcessed = () => {
  const customerData = useSelector((state) => state.customer);
  const [qrCodeData, setQRCodeData] = useState('');

  const generateQRCode = () => {
    const qrCodeString = JSON.stringify(customerData);
    setQRCodeData(qrCodeString);
  };

  useEffect(() => {
    generateQRCode();
  })

  return (
    <div className="order-processed">
      <div className="order-processed-title">
        <DoneIcon sx={{ margin: "5px" }} size="large" />
        <h1 className="order-processed-title-text">Заказ оформлен, осталось лишь оплатить</h1>
      </div>
      <div className="order-processed-qr">
        {qrCodeData && <QRCode value={qrCodeData} size={200} />}
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
