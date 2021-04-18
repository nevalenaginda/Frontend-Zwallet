import React from "react";
import Navbar from "../../components/module/NavBar";
import Footer from "../../components/module/Footer";
import SideBar from "../../components/module/SideBar";
import ProfileMenu from "../../components/module/ProfileMenu";
import Profile from "../../components/module/Profile";
import ContactInfo from "../../components/module/ContactInfo";

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
            <Profile />

            <div className="row pt-3 pt-lg-4">
              <div className="col-lg mb-md-0">
                {/* <Menu /> */} <ProfileMenu />
              </div>
              <div className="col">
                <ContactInfo />
              </div>
            </div>
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
