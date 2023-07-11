import React from "react";
import "./mainScreen.css";

import HeaderMenu from "./Header/HeaderMenu";
import MainMenu from "./MainMenu/MainMenu";
import ListGoods from "./ListGoods/ListGoods";

const MainScreen = () => {
    return (
        <div className="main-screen">
            <HeaderMenu/>
            <div className="main-screen-content">
                <MainMenu/>
                <ListGoods/>
            </div>
        </div>
    )
}

export default MainScreen;