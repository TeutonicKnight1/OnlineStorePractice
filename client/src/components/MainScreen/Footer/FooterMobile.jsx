import { useEffect, useState } from "react";
import "../../../less/footerMobile.less";

import logo from "../../../static/logo.svg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const FooterMobile = ({mainBlockName}) => {
  const footerHeight = 220;
  const [viewportHeight, setViewportHeight] = useState(0);
  const [mainBlockHeight, setMainBlockHeight] = useState(0);
  
  useEffect (() => {
    const mainBlock = document.querySelector(`.${mainBlockName}`);
    setMainBlockHeight(mainBlock.offsetHeight);
    setViewportHeight(window.innerHeight);
  }, [mainBlockName]);

  return (
    <div className={mainBlockHeight + footerHeight > viewportHeight ? "footer-mobile" : "footer-mobile footer-mobile-sticky-bottom"}>
      <div className="footer-mobile-content">
        <div className="footer-mobile-content-logo">
          <Link to="/">
            <img
              src={logo}
              alt="Логотип logo"
              className="footer-mobile-logo"
              width={75}
              height={80}
            />
          </Link>
        </div>
        <div className="footer-mobile-content-text">
          <a
            className="footer-mobile-content-text-github-a"
            href="https://github.com/TeutonicKnight1"
          >
            <GitHubIcon sx={{ margin: "0 5px 0 0" }} />
            <p style={{ margin: "0" }}>GitHub</p>
          </a>
          <div className="footer-mobile-content-text-mail">
            <EmailSharpIcon sx={{ marginRight: "5px" }} />
            <p>worldkiri@gmail.com</p>
          </div>
          <div className="footer-mobile-content-text-phone">
            <LocalPhoneSharpIcon sx={{ marginRight: "5px" }} />
            <p className="footer-mobile-content-text-phone-p">+1 (234) 567 8901</p>
          </div>
        </div>
      </div>
      <div className="footer-mobile-copyright">
        <CopyrightIcon sx={{ margin: "10px" }} />
        <p className="footer-mobile-copyright-text">
          Lorem Ipsum 2023 Copyright | All Rights Not Reserved
        </p>
      </div>
    </div>
  );
};

FooterMobile.propTypes = {
  mainBlockName: PropTypes.string.isRequired,
}

export default FooterMobile;
