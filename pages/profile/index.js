import React from "react";
import Link from "next/link";
import Navbar from "../../components/module/NavBar";
import Footer from "../../components/module/Footer";
import SideBar from "../../components/module/SideBar";
import ProfileMenu from "../../components/module/ProfileMenu";
import Profile from "../../components/module/Profile";
import ContactInfo from "../../components/module/ContactInfo";

function home() {
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-lg-block">
        <Navbar />
      </div>
      <div className="d-block d-lg-none">
        <div className="container d-flex d-lg-none py-4">
          <Link href={"/dashboard"}>
            <a className="text-dark mr-3">
              <h5 className="m-0 font-weight-bold align-self-center">
                <i class="bi bi-arrow-left"></i>
              </h5>
            </a>
          </Link>
          <h5 className="m-0 align-self-center font-weight-bold">My Profile</h5>
        </div>
      </div>
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar />
          </div>
          <div className="col ">
            <Profile className={"mb-3"} />

            <div className="row">
              <div className="col">
                <ProfileMenu />
              </div>
              <div className="col d-none d-lg-block">
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
