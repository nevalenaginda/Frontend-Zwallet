import React from "react";
import Navbar from "../components/module/NavBar";
import Footer from "../components/module/Footer";
import SideBar from "../components/module/SideBar";
import Balance from "../components/module/Balance";
import GraphCard from "../components/module/GraphCard";
import Transaction from "../components/module/Transaction";

function home() {
  return (
    <div className="bg-light">
      <div className="row d-none d-lg-block">
        <Navbar />
      </div>
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar></SideBar>
          </div>
          <div className="col ">
            <Balance />
            <div className="row  pt-3 pt-lg-4">
              <div className="col-lg mb-md-0">
                <div className="d-none d-lg-block">
                  {" "}
                  <GraphCard />
                </div>
              </div>
              <div className="col ">
                <Transaction />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-none d-lg-block">
        <Footer />
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .bg-light {
              background-color: ghostwhite !important;
            }
          }
          .img-user {
            object-fit: cover;
            height: 75px !important;
            width: 75px !important;
          }
          .h-100 {
            height: 100vh !important;
          }
        `}
      </style>
    </div>
  );
}

export default home;
