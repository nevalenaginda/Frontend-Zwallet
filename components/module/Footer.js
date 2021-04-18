import React from "react";
import style from "../../styles/Footer.module.css";

function Footer() {
  return (
    <div
      className={`container-fluid bg-blue text-white d-flex min-h ${style["min-container-fluid"]}`}
    >
      <div className="align-self-center w-100">
        <div className="container d-block d-md-flex justify-content-between text-center text-md-left">
          <div>2021 Zwallet. All right reserved.</div>
          <div className="d-block d-md-flex justify-content-between">
            <div className="mr-3">+62 5637 8882 9901</div>
            <div className="">contact@zwallet.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
