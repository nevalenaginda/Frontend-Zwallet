import React from "react";

function AsideLeft() {
  return (
    <div className="container align-self-center">
      <h3 className="font-weight-bold text-white">Zwallet</h3>
      <div className="text-center">
        <img
          style={{ height: "400px" }}
          src={require("../../assets/images/phone.svg")}
        />
      </div>
      <h5 className="font-weight-bold text-white">
        App that Covering Banking Needs.
      </h5>
      <div className="pr-5">
        <p className="text-light">
          Zwallet is an application that focussing in banking needs for all
          users in the world. Always updated and always following world trends.
          5000+ users registered in Zwallet everyday with worldwide users
          coverage.
        </p>
      </div>
      <style jsx>
        {`
          .bg-accent {
            background-image: url("/assets/Vector1.svg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position-y: 50px;
          }
        `}
      </style>
    </div>
  );
}

export default AsideLeft;
