import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Navbar from "../components/module/NavBar";
import Footer from "../components/module/Footer";
import SideBar from "../components/module/SideBar";
import Balance from "../components/module/Balance";
import GraphCard from "../components/module/GraphCard";
import Transaction from "../components/module/Transaction";

function home() {
  const { user } = useSelector((state) => state.user);
  const urlImg = process.env.NEXT_PUBLIC_URL_IMAGE_NO_SLASH;
  const router = useRouter();
  return (
    <div className="bg-light">
      <div className="row d-none d-lg-block">
        <Navbar />
      </div>
      {/* Mobile */}
      <div
        className="text-dark text-decoration-none pointer"
        onClick={(e) => router.push("/profile")}
      >
        <div className="container py-3 d-flex d-lg-none">
          <div className="align-self-center">
            {user.image ? (
              <img
                className="img-user bg-dark mr-3 align-self-center radius-12"
                src={`${urlImg}/images/${user.image}`}
                alt=""
              />
            ) : (
              <img
                className="img-user bg-dark mr-3 align-self-center radius-12"
                src={require("../assets/images/default-user.svg")}
                alt=""
              />
            )}
          </div>
          <div className="align-self-center">
            <p className="text-muted m-0">Hello,</p>
            <h5 className="font-weight-bold m-0">{user.name}</h5>
          </div>
          <h3 className="ml-auto align-self-center">
            <i className="bi bi-bell"></i>
          </h3>
        </div>
      </div>
      {/* End For Mobile */}
      <div className="container">
        <div className="row py-lg-5">
          <div className="col-3 d-none d-lg-block">
            <SideBar></SideBar>
          </div>
          <div className="col ">
            <Balance />
            <div className="row  pt-3 pt-lg-4">
              <div className="col-lg mb-md-0">
                <div className="d-none d-lg-block">
                  {" "}
                  <GraphCard />
                </div>
              </div>
              <div className="col ">
                <Transaction />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-none d-lg-block">
        <Footer />
      </div>
      <style jsx>
        {`
          @media screen and (max-width: 992px) {
            .bg-light {
              background-color: ghostwhite !important;
            }
          }
          .img-user {
            object-fit: cover;
            height: 75px !important;
            width: 75px !important;
          }
          .h-100 {
            height: 100vh !important;
          }
        `}
      </style>
    </div>
  );
}

export default home;
