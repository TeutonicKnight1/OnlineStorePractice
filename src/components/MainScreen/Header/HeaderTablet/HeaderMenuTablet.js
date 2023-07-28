import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../../static/logo.svg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import "./headerMenuTablet.css";

const headerMenuTablet = () => {
    const sumPrice = useSelector((state) => state.cart.sumPrice);

    return (
        <div className="header-menu-tablet">
            <div className="header-tablet-div-logo-links">
                <Link to="/" style={{ margin: '0'}}>
                    <img src={logo} alt="Логотип logo" className="header-tablet-logo" width={75} height={80}/>
                </Link>
                {/* <div className="header-tablet-links">
                    
                    <Link className="header-tablet-about">О компании</Link>
                    <Link className="header-tablet-delivery">Доставка и оплата</Link>
                    <Link className="header-tablet-news">Новости</Link>
                    <Link className="header-tablet-reviews">Отзывы</Link>
                    <Link className="header-tablet-contacts">Контакты</Link>
                </div> */}
            </div>
            <div className="header-tablet-div-phone-order">
                <div className="header-tablet-phone">
                <p className="header-tablet-phone-number">+7 (800) 555 35 35</p> 
                <p className="header-tablet-phone-city">Ульяновск</p>
                </div>
                <Link to="/cart" className="header-tablet-order">
                    <div className="header-tablet-order-button">
                        <ShoppingCartOutlinedIcon fontSize="large"/>
                        <div className="header-tablet-cart">
                            <p className="header-tablet-cart-text">КОРЗИНА</p>
                            <p className="header-tablet-cart-number">{sumPrice} р.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default headerMenuTablet;

