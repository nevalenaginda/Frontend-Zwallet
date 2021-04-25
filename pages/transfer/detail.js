import React from "react";
import Navbar from "../../components/module/NavBar";
import Footer from "../../components/module/Footer";
import SideBar from "../../components/module/SideBar";
import { useRouter } from "next/router";

import DetailTransfer from "../../components/module/DetailTransfer";

function home() {
  const router = useRouter();
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-md-block">
        <Navbar />
      </div>
      <div className="container">
        <div className="row h-row py-lg-5">
          <div className="col-3 d-none d-md-block">
            <SideBar></SideBar>
          </div>
          <div className="col">
            <DetailTransfer />
          </div>
        </div>
      </div>
      <div className="d-none d-md-block">
        <Footer />
      </div>
      <style jsx>{``}</style>
    </div>
  );
}

export default home;
