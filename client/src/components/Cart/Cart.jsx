import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import "../../less/cart.less";
import HeaderMenu from "../MainScreen/Header/HeaderMenu.jsx";
import CartElement from "./CartElement.jsx";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "../MainScreen/Footer/Footer.jsx";
import HeaderMenuMobile from "../MainScreen/Header/HeaderMenuMobile.jsx";
import FooterMobile from "../MainScreen/Footer/FooterMobile.jsx";

const Cart = () => {
  const isMobile = useMediaQuery({ maxWidth: "425px" });
  // const isTablet = useMediaQuery({ minWidth: "426px", maxWidth: "1023px" });
  // const isLaptop = useMediaQuery({ minWidth: "1024px", maxWidth: "1279px" });
  const isDesktop = useMediaQuery({ minWidth: "1280px" });
  const [CART, setCart] = useState([]);
  const sumPrice = useSelector((state) => state.cart.sumPrice);

  useEffect(() => {
    componentRender();
  }, []);

  const componentRender = () => {
    const storedCartData = localStorage.getItem("cart");
    console.log(storedCartData);
    if (storedCartData) {
      setCart(JSON.parse(storedCartData));
    }
  };

  return (
    <div className="cart">
      {isMobile && (
        <div>
          <HeaderMenuMobile />
          <div className="cart-body">
            <div className={ isMobile ? "cart-body-grid cart-body-grid-mobile" : "cart-body-grid"}>
              <div className="cart-body-grid-header">
                <h1 className="cart-body-grid-header-title">Корзина</h1>
              </div>
              {CART.map((element) => (
                <CartElement
                  key={element.id}
                  {...element}
                  componentRender={componentRender}
                />
              ))}
            </div>
            <div className="cart-body-info">
              <div className="cart-body-info-text">
                <div className="cart-body-info-text-header">
                  <h2 className="cart-body-info-text-header-title">Итого</h2>
                  <h2 className="cart-body-info-text-header-sum">
                    {sumPrice} р.
                  </h2>
                </div>
                <div className="cart-body-info-text-delivery">
                  <h3 className="cart-body-info-text-delivery-title">
                    Доставка
                  </h3>
                  <h3 className="cart-body-info-text-delivery-sum">
                    Бесплатно
                  </h3>
                </div>
              </div>
              <div>
                <Link to="/order">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      width: "100%",
                      maxWidth: "210px",
                      fontSize: "12px",
                    }}
                  >
                    Перейти к оформлению
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <FooterMobile mainBlockName="cart" />
        </div>
      )}
      {isDesktop && (
        <div>
          <HeaderMenu />
          <div className="cart-body">
            <div className="cart-body-grid">
              <div className="cart-body-grid-header">
                <h1 className="cart-body-grid-header-title">Корзина</h1>
              </div>
              {CART.map((element) => (
                <CartElement
                  key={element.id}
                  {...element}
                  componentRender={componentRender}
                />
              ))}
            </div>
            <div className="cart-body-info">
              <div className="cart-body-info-text">
                <div className="cart-body-info-text-header">
                  <h2 className="cart-body-info-text-header-title">Итого</h2>
                  <h2 className="cart-body-info-text-header-sum">
                    {sumPrice} р.
                  </h2>
                </div>
                <div className="cart-body-info-text-delivery">
                  <h3 className="cart-body-info-text-delivery-title">
                    Доставка
                  </h3>
                  <h3 className="cart-body-info-text-delivery-sum">
                    Бесплатно
                  </h3>
                </div>
              </div>
              <div>
                <Link to="/order">
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      width: "100%",
                      maxWidth: "210px",
                      fontSize: "12px",
                    }}
                  >
                    Перейти к оформлению
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <Footer mainBlockName="cart" />
        </div>
      )}
    </div>
  );
};

export default Cart;
