import React from "react";
import "./footer.css";

import logo from "../../../static/logo.svg";
import CopyrightIcon from "@mui/icons-material/Copyright";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-logo">
          <Link to="/">
            <img
              src={logo}
              alt="Логотип logo"
              className="footer-logo"
              width={75}
              height={80}
            />
          </Link>
        </div>
        <div className="footer-content-text">
          <a
            className="footer-content-text-github-a"
            href="https://github.com/TeutonicKnight1"
          >
            <GitHubIcon sx={{ margin: "0 5px 0 0" }} />
            <p style={{ margin: "0" }}>GitHub</p>
          </a>
          <div className="footer-content-text-mail">
            <EmailSharpIcon sx={{ marginRight: "5px" }} />
            <p>worldkiri@gmail.com</p>
          </div>
          <div className="footer-content-text-phone">
            <LocalPhoneSharpIcon sx={{ marginRight: "5px" }} />
            <p className="footer-content-text-phone-p">+1 (234) 567 8901</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <CopyrightIcon sx={{ margin: "0" }} />
        <p className="footer-copyright-text">
          Lorem Ipsum 2023 Copyright | All Rights Not Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
