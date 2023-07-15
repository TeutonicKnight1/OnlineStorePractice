import React from "react";
import Header from "../MainScreen/Header/HeaderMenu";
import "./order.css";
import { useSelector } from "react-redux";
import CustomerInfoStep from "./CustomerInfoStep/CustomerInfoStep";
import AdressInfoStep from "./AdressInfoStep/AdressInfoStep";
import PaymentInfoStep from "./PaymentInfoStep/PaymentInfoStep";
import OrderProcessed from "./OrderProcessed/OrderProcessed";

const Order = () => {
  const step = useSelector((state) => state.order.step);

  return (
    <div className="order">
      <Header />
      {step < 4 && (
        <div className="order-stepper">
          <div className="order-stepper-one">
            <div className="order-stepper-one-number step">1</div>
            <div className="order-stepper-one-text">
              Информация о покупателе
            </div>
          </div>
          <div className={step >= 2 ? "line line-step-complited" : "line"} />
          <div className="order-stepper-two">
            <div className="order-stepper-two-number step">2</div>
            <div className="order-stepper-two-text">Информация об оплате</div>
          </div>
          <div className={step >= 3 ? "line line-step-complited" : "line"} />
          <div className="order-stepper-three">
            <div className="order-stepper-three-number step">3</div>
            <div className="order-stepper-three-text">Адрес доставки</div>
          </div>
        </div>
      )}
      <div className="order-step-now">
        {step === 1 && <CustomerInfoStep />}
        {step === 2 && <PaymentInfoStep />}
        {step === 3 && <AdressInfoStep />}
        {step === 4 && <OrderProcessed />}
      </div>
    </div>
  );
};

export default Order;
