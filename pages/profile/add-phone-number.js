import React from "react";
import AddPhoneNumber from "../../components/module/AddPhoneNumber";
import Footer from "../../components/module/Footer";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";

function addPhoneNumber() {
  return (
    <div className="bg-light min-vh-100">
      <NavBar></NavBar>

      <div className="container h-content">
        <div className="row py-5 py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar />
          </div>
          <div className="col">
            <AddPhoneNumber />
          </div>
        </div>
      </div>

      <Footer />
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

export default addPhoneNumber;
