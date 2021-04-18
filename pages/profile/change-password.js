import React from "react";
import ChangePassword from "../../components/module/ChangePassword";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";
function changePassword() {
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-md-block">
        <NavBar></NavBar>
      </div>
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar></SideBar>
          </div>
          <div className="col">
            <ChangePassword></ChangePassword>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default changePassword;
