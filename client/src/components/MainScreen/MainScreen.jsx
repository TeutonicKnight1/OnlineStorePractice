import "../../less/mainScreen.less";
import HeaderMenu from "./Header/HeaderMenu";
import MainMenu from "./MainMenu/MainMenu";
import ListGoods from "./ListGoods/ListGoods";
import SortButtons from "./SortButtons/SortButtons";
import Footer from "./Footer/Footer";
import { useMediaQuery } from "react-responsive";
import HeaderMenuMobile from "./Header/HeaderMenuMobile";
import HeaderMenuTablet from "./Header/HeaderMenuTablet";
import FooterMobile from "./Footer/FooterMobile";
import MainMenuMobile from "./MainMenu/MainMenuMobile";
import { getProducts } from "../../axios/axios";
import { useDispatch } from "react-redux";
import { setData } from "../../slices/listGoodsSlice";
import { useEffect, useState } from "react";

const MainScreen = () => {
  const dispatch = useDispatch();

  const [dataLoaded, setDataLoaded] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: "499px" });
  const isTablet = useMediaQuery({ minWidth: "500px", maxWidth: "1023px" });
  const isLaptop = useMediaQuery({ minWidth: "1024px", maxWidth: "1279px" });
  const isDesktop = useMediaQuery({ minWidth: "1280px" });

  async function getProductsFromDB() {
    const data = await getProducts();
    return data;
  }

  useEffect(() => {
    getProductsFromDB().then((data) => {
      dispatch(setData(data));
      setDataLoaded(true);
    });
  }, [dispatch]);

  return (
    <div className="main-screen">
      {isMobile && (
        <div>
          <HeaderMenuMobile />
          <div className="main-screen-content">
            <MainMenuMobile />
            <div className="main-screen-content-grid">
              <SortButtons />
              <ListGoods />
            </div>
          </div>
          {dataLoaded && <FooterMobile mainBlockName="main-screen" />}
        </div>
      )}
      {isTablet && (
        <div>
          <HeaderMenuTablet />
          <div className="main-screen-content">
            <MainMenuMobile />
            <div className="main-screen-content-grid">
              <SortButtons />
              <ListGoods />
            </div>
          </div>
          {dataLoaded && <Footer mainBlockName="main-screen" />}
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
          {dataLoaded && <Footer mainBlockName="main-screen" />}
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
          {dataLoaded && <Footer mainBlockName="main-screen" />}
        </div>
      )}
    </div>
  );
};

export default MainScreen;
