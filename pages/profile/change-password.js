import React from "react";
import ChangePassword from "../../components/module/ChangePassword";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";
function changePassword() {
  return (
    <div className="bg-light min-vh-100">
      <NavBar></NavBar>

      <div className="container">
        <div className="row py-5 py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar></SideBar>
          </div>
          <div className="col">
            <ChangePassword></ChangePassword>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default changePassword;
