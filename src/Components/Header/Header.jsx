import React from "react";
import "./Header.css";
import "../../App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
function Header() {
  return (
    <>
      <header className="header flexSB">
        <div className="info flexSB">
          <p> العنوان: 6 شارع حسن محمد على</p>
          <p>|</p>
          <p>الايميل: ayahamedzaki@gmail.com</p>
          <p>
            <a
              href="https://wa.me/201273805398"
              target="_blank"
              className="whatsapp-link"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="font" />
              <span className="phone">01273805398</span>
            </a>
          </p>
        </div>
        <div className="icons">
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="font" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="font" />
          </a>
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="font" />
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;
