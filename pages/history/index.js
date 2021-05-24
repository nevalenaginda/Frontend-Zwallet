import React from "react";
import Link from "next/link";
import NavBar from "../../components/module/NavBar";
import SideBar from "../../components/module/SideBar";
import Footer from "../../components/module/Footer";
import HistoryAllTransaction from "../../components/module/HistoryAllTransaction";

function history() {
  return (
    <div className="bg-light min-vh-100">
      <div className="d-none d-lg-block">
        <NavBar />
      </div>
      <div className="container d-flex d-lg-none py-4">
        <Link href="/dashboard">
          <h5 className="m-0 font-weight-bold align-self-center text-dark mr-3">
            <i className="fa fa-arrow-left" aria-hidden="true"></i>
          </h5>
        </Link>
        <h5 className="m-0 align-self-center font-weight-bold">History</h5>
      </div>
      <div className="container">
        <div className="row pb-5 py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar />
          </div>
          <div className="col">
            <HistoryAllTransaction />
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <Footer />
      </div>
    </div>
  );
}

export default history;
