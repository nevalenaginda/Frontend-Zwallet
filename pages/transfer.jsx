import React from "react";
import Navbar from "../components/module/NavBar";
import Footer from "../components/module/Footer";
import SideBar from "../components/module/SideBar";
import SearchReceiver from "../components/module/SearchReceiver.jsx";
import AmmountNotes from "../components/module/AmmountNotes";
import DetailTransfer from "../components/module/DetailTransfer";
import HistoryTransfer from "../components/module/HistoryTransfer";
function home() {
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
            <SearchReceiver />
            {/* <AmmountNotes /> */}
            {/* <DetailTransfer /> */}
            {/* <HistoryTransfer /> */}
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
