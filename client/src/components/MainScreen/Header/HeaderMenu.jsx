import { Link } from "react-router-dom";
import logo from "../../../static/logo.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";
import "../../../less/headerMenu.less";
import User from "../../User/User";
import { useState } from "react";

const HeaderMenu = () => {
  const sumPrice = useSelector((state) => state.cart.sumPrice);

  const [loginActive, setLoginActive] = useState(false);

  const loginActiveHandler = () => {
    setLoginActive(!loginActive);
  }

  return (
    <div className="header-menu">
      <div className="header-div-logo-links">
        <Link to="/" style={{ margin: "0" }}>
          <img
            src={logo}
            alt="Логотип logo"
            className="header-logo"
            width={75}
            height={80}
          />
        </Link>
        <div className="header-links">
          <Link className="header-about">О компании</Link>
          <Link className="header-delivery">Доставка и оплата</Link>
          <Link className="header-news">Новости</Link>
          <Link className="header-reviews">Отзывы</Link>
          <Link className="header-contacts">Контакты</Link>
        </div>
      </div>
      <div className="header-div-login">
        <Link className="header-login" onClick={loginActiveHandler }>
          <u>Войти</u>
        </Link>
        <User loginActive={loginActive}/>
      </div>
      <div className="header-div-phone-order">
        <div className="header-phone">
          <p className="header-phone-number">+7 (800) 555 35 35</p>
          <p className="header-phone-city">Ульяновск</p>
        </div>
        <Link to="/cart" className="header-order">
          <div className="header-order-button">
            <ShoppingCartOutlinedIcon fontSize="large" />
            <div className="header-cart">
              <p className="header-cart-text">КОРЗИНА</p>
              <p className="header-cart-number">{sumPrice} р.</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderMenu;
