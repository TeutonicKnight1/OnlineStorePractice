import Header from "../MainScreen/Header/HeaderMenu";
import "../../less/order.less";
import { useSelector } from "react-redux";
import CustomerInfoStep from "./CustomerInfoStep/CustomerInfoStep";
import AdressInfoStep from "./AdressInfoStep/AdressInfoStep";
import PaymentInfoStep from "./PaymentInfoStep/PaymentInfoStep";
import OrderProcessed from "./OrderProcessed/OrderProcessed";
import Footer from "../MainScreen/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import HeaderMenuMobile from "../MainScreen/Header/HeaderMenuMobile";
import CustomerInfoStepMobile from "./CustomerInfoStep/CustomerInfoStepMobile";
import OrderProcessedMobile from "./OrderProcessed/OrderProcessedMobile";
import PaymentInfoStepMobile from "./PaymentInfoStep/PaymentInfoStepMobile";
import AdressInfoStepMobile from "./AdressInfoStep/AdressInfoStepMobile";

const Order = () => {
  const isMobile = useMediaQuery({ maxWidth: "425px" });
  // const isTablet = useMediaQuery({ minWidth: "426px", maxWidth: "1023px" });
  // const isLaptop = useMediaQuery({ minWidth: "1024px", maxWidth: "1279px" });
  const isDesktop = useMediaQuery({ minWidth: "1280px" });

  const step = useSelector((state) => state.order.step);

  return (
    <div className="order">
      {isMobile && (
        <div>
          <HeaderMenuMobile />
          <div className="order-step-now">
            {step === 1 && <CustomerInfoStepMobile />}
            {step === 2 && <PaymentInfoStepMobile />}
            {step === 3 && <AdressInfoStepMobile />}
            {step === 4 && <OrderProcessedMobile />}
          </div>
        </div>
      )}
      {isDesktop && (
        <div>
          <Header />
          {step < 4 && (
            <div className="order-stepper">
              <div className="order-stepper-one">
                <div className="order-stepper-one-number step">1</div>
                <div className="order-stepper-one-text">
                  Информация о покупателе
                </div>
              </div>
              <div
                className={step >= 2 ? "line line-step-complited" : "line"}
              />
              <div className="order-stepper-two">
                <div className="order-stepper-two-number step">2</div>
                <div className="order-stepper-two-text">
                  Информация об оплате
                </div>
              </div>
              <div
                className={step >= 3 ? "line line-step-complited" : "line"}
              />
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
          <Footer mainBlockName="order" />
        </div>
      )}
    </div>
  );
};

export default Order;
