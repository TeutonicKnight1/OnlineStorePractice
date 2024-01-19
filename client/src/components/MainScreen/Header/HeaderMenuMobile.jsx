import { Link } from "react-router-dom";
import logo from '../../../static/logo.svg'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from "react-redux";
import "../../../less/headerMenuMobile.less";

const HeaderMenuMobile = () => {
    const sumPrice = useSelector((state) => state.cart.sumPrice);

    return (
        <div className="header-mobile-menu-mobile">
            <div className="header-mobile-div-logo-links">
                <Link to="/" style={{ margin: '0'}}>
                    <img src={logo} alt="Логотип logo" className="header-mobile-logo" width={75} height={80}/>
                </Link>
                {/* <div className="header-mobile-links">
                    <Link className="header-mobile-about">О компании</Link>
                    <Link className="header-mobile-delivery">Доставка и оплата</Link>
                    <Link className="header-mobile-news">Новости</Link>
                    <Link className="header-mobile-reviews">Отзывы</Link>
                    <Link className="header-mobile-contacts">Контакты</Link>
                </div> */}
            </div>
            <div className="header-mobile-div-phone-order">
                <div className="header-mobile-phone">
                <p className="header-mobile-phone-number">+7 (800) 555 35 35</p> 
                <p className="header-mobile-phone-city">Ульяновск</p>
                </div>
                <Link to="/cart" className="header-mobile-order">
                    <div className="header-mobile-order-button">
                        <ShoppingCartOutlinedIcon fontSize="large"/>
                        <div className="header-mobile-cart">
                            <p className="header-mobile-cart-text">КОРЗИНА</p>
                            <p className="header-mobile-cart-number">{sumPrice} р.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default HeaderMenuMobile;