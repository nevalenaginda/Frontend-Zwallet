import React from "react";
import Navbar from "../components/module/NavBar";
import Footer from "../components/module/Footer";
import SideBar from "../components/module/SideBar";
import HowToTopUp from "../components/module/HowToTopUp";
function home() {
  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <div className="container">
        <div className="row py-5">
          <div className="col-3 d-none d-md-block">
            <SideBar />
          </div>
          <div className="col">
            <HowToTopUp />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default home;
