import React from "react";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import PersonalInfo from "../../components/module/PersonalInfo";
import SideBar from "../../components/module/SideBar";

function personalInformation() {
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-md-block">
        <NavBar></NavBar>
      </div>
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar />
          </div>
          <div className="col">
            <PersonalInfo />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer />
      </div>
    </div>
  );
}

export default personalInformation;
