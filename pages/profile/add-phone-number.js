import React from "react";
import AddPhoneNumber from "../../components/module/AddPhoneNumber";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";

function addPhoneNumber() {
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
            <AddPhoneNumber />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer />
      </div>
    </div>
  );
}

export default addPhoneNumber;
