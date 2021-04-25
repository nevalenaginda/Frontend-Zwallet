import React from "react";
import CardChangePin from "../../components/module/CardChangePin";
import ChangePassword from "../../components/module/ChangePassword";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";
function changePassword() {
  return (
    <div className="bg-light min-vh-100">
      <NavBar></NavBar>

      <div className="container h-content">
        <div className="row py-5 py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar></SideBar>
          </div>
          <div className="col">
            <CardChangePin />
          </div>
        </div>
      </div>

      <Footer></Footer>
      <style jsx>{`
        @media (max-width: 767.98px) {
          .h-content {
            height: 80vh;
          }
        }
      `}</style>
    </div>
  );
}

export default changePassword;
