import React from "react";
import Navbar from "../components/module/NavBar";
import Footer from "../components/module/Footer";
import SideBar from "../components/module/SideBar";
import HowToTopUp from "../components/module/HowToTopUp";
function home() {
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-md-block">
        <Navbar />
      </div>
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar />
          </div>
          <div className="col">
            <HowToTopUp />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer />
      </div>
    </div>
  );
}

export default home;
