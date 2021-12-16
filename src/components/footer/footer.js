import React from "react";
//import asset
import LogoImage from "../../assets/images/oatstraw.png";
//import css
import "./footer.scss";
function Footer() {
  return (
    <div className="footer-control">
      <div className="footer-content">
        <h2>
          <strong>Raia Kogan LMFT #87945</strong>
        </h2>
        <div className="footer-banner">
          <img src={LogoImage} />
        </div>
        <div className="footer-info">
          <p>
            512-698-9643 <br />
            <a href="mailto:raio@embodiedtherapies.com">
              raio@embodiedtherapies.com
            </a>{" "}
            <br />
            1918 Bonita Ave. Berkeley CA 94704
          </p>

          <div className="social-content"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
