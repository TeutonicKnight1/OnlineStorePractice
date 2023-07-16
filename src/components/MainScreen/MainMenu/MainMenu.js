import React from "react";
import "./mainMenu.css";

const MainMenu = () => {
    return (
        <div className="main-menu">
            <div className="main-menu-title">
                <h1 className="main-menu-title-text">Фильтры</h1>
            </div>
            <div className="main-menu-categories">
                <div className="main-menu-categories-title">
                    <h2 className="main-menu-categories-title-text">Категории</h2>
                </div>
                <div className="main-menu-categories-body"></div>
            </div>
            <div className="main-menu-price">
                <div className="main-menu-price-title">Цена</div>
                <div className="main-menu-price-body"></div>
            </div>
        </div>
    )
}

export default MainMenu