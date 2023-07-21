import React from "react";
import "./mainScreen.css";
import HeaderMenu from "./Header/HeaderMenu";
import MainMenu from "./MainMenu/MainMenu";
import ListGoods from "./ListGoods/ListGoods";
import SortButtons  from "./SortButtons/SortButtons";
import Footer from "./Footer/Footer";


const MainScreen = () => {
    return (
        <div className="main-screen">
            <HeaderMenu/>
            <div className="main-screen-content">
                <MainMenu/>
                <div className="main-screen-content-grid">
                    <SortButtons/>
                    <ListGoods/>
                </div>
            </div>
            <Footer mainBlockName="main-screen"/>
        </div>
    )
}

export default MainScreen;