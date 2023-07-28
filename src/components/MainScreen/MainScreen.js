import React from "react";
import "./mainScreen.css";
import HeaderMenu from "./Header/HeaderDesktop/HeaderMenu";
import MainMenu from "./MainMenu/MainMenuDesktop/MainMenu";
import ListGoods from "./ListGoods/ListGoods";
import SortButtons from "./SortButtons/SortButtons";
import Footer from "./Footer/FooterDesktop/Footer";

import { useMediaQuery } from "react-responsive";
import HeaderMenuMobile from "./Header/HeaderMobile/HeaderMenuMobile";
import HeaderMenuTablet from "./Header/HeaderTablet/HeaderMenuTablet";
import FooterMobile from "./Footer/FooterMobile/FooterMobile";
import MainMenuMobile from "./MainMenu/MainMenuMobile/MainMenuMobile";

const MainScreen = () => {
  const isMobile = useMediaQuery({ maxWidth: "425px" });
  const isTablet = useMediaQuery({ minWidth: "426px", maxWidth: "1023px" });
  const isLaptop = useMediaQuery({ minWidth: "1024px", maxWidth: "1279px" });
  const isDesktop = useMediaQuery({ minWidth: "1280px" });

  return (
    <div className="main-screen">
      {isMobile && (
        <div>
          <HeaderMenuMobile />
          <div className="main-screen-content">
            <div className="main-screen-content-grid">
              <SortButtons />
              <ListGoods />
            </div>
          </div>
          <FooterMobile mainBlockName="main-screen" />

          <MainMenuMobile />
        </div>
      )}
      {isTablet && (
        <div>
          <HeaderMenuTablet/>
          <div className="main-screen-content">
            <MainMenu />
            <div className="main-screen-content-grid">
              <SortButtons />
              <ListGoods />
            </div>
          </div>
          <Footer mainBlockName="main-screen" />
        </div>
      )}
      {isLaptop && (
        <div>
          <HeaderMenu />
          <div className="main-screen-content">
            <MainMenu />
            <div className="main-screen-content-grid">
              <SortButtons />
              <ListGoods />
            </div>
          </div>
          <Footer mainBlockName="main-screen" />
        </div>
      )}
      {isDesktop && (
        <div>
          <HeaderMenu />
          <div className="main-screen-content">
            <MainMenu />
            <div className="main-screen-content-grid">
              <SortButtons />
              <ListGoods />
            </div>
          </div>
          <Footer mainBlockName="main-screen" />
        </div>
      )}
    </div>
  );
};

export default MainScreen;
